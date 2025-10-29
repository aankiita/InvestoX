require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./model/UserModel");

require("dotenv").config();
const authRoute = require("./Routes/AuthRoute");
const investorRoutes = require("./Routes/investorRoutes");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const PORT=process.env.PORT || 3002;
const uri=process.env.MONGO_URL;

const app=express();

app.use(bodyParser.json());
app.use(cors({
 origin: ["http://localhost:3000", "http://localhost:3001"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



app.use(session({
  secret: "MysuperSecretKey", 
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

app.use("/", authRoute);
app.use("/api", investorRoutes);

app.get("/allHoldings", async (req, res) => {
    let allHoldings=await HoldingsModel.find({});   
    res.json(allHoldings); 
});

app.get("/addPositions", async (req, res) => {
    let allPositions=await PositionsModel.find({});
    res.json(allPositions);
});



app.post("/buyOrder", async (req, res) => {
  try {
    let newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: "BUY",
    });
    await newOrder.save();
    res.json(newOrder); 
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to place buy order" });
  }
});

app.get("/buyOrder", async (req, res) => {
    let allOrders=await OrdersModel.find({});
    res.json(allOrders);
});

app.post("/sellOrder", async (req, res) => {
  try {
    let newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: "SELL",
    });
    await newOrder.save();
    res.json(newOrder); 
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to place sell order" });
  }
});

app.post("/sellOrder", async (req, res) => {
  try {
    const { name } = req.body;
    const existingOrder = await OrdersModel.findOne({ name });
    if (!existingOrder) {
      return res.status(404).json({ error: "Order not found to sell" });
    }
    await OrdersModel.deleteOne({ name });
    res.json({ message: "Order sold and removed successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: " Failed to sell (delete) order" });
  }
});

app.listen(PORT,()=>{
    console.log("App is started");
    mongoose.connect(uri);
    console.log("DB Connected!");
});