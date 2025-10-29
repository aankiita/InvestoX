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

// app.get("/allHoldings", async (req, res) => {
//     let tempHoldings = [
//       { name: "TATASTEEL", qty: 5, avg: 125.8, price: 132.4, net: "+5.26%", day: "+0.92%" },
//       { name: "BRITANNIA", qty: 2, avg: 4950.0, price: 5018.6, net: "+1.39%", day: "-0.24%" },
//     ];
//       tempHoldings.forEach((item)=>{
//          let newHolding=new HoldingsModel({
//             name:item.name,
//             qty:item.qty,
//             avg:item.avg,
//             price:item.price,
//             net:item.net,
//             day:item.day,
//          })
//          newHolding.save();
//     })
//     res.send("Done!");
// });

// app.get("/addPositions", async (req, res) => {
//      //dobara se run na ho jaye islie dummy data ko comment out kar di dubara run ho jyga to fr se database me same data save ho jyga
//     let tempPositions = [
//         { product: "CNC", name: "TATASTEEL", qty: 5, avg: 125.8, price: 132.4, net: "+5.26%", day: "+0.92%" },
//         { product: "CNC", name: "RELIANCE", qty: 2, avg: 2450.5, price: 2490.3, net: "+1.62%", day: "-0.14%" },
//         { product: "CNC", name: "TITAN", qty: 1, avg: 3060.0, price: 3125.8, net: "+2.15%", day: "+0.59%" },
//         { product: "CNC", name: "JSWSTEEL", qty: 5, avg: 785.3, price: 802.1, net: "+2.14%", day: "+0.31%" },
//       ];   
//     tempPositions.forEach((item)=>{
//          let newPosition=new PositionsModel({
//             product:item.product,
//             name:item.name,
//             qty:item.qty,
//             avg:item.avg,
//             price:item.price,
//             net:item.net,
//             day:item.day,
//             isLoss:item.isLoss,
            
//          })
//          newPosition.save();
//     })
//     res.send("Done!");
// });


// app.get("/newOrder", async (req, res) => {
//     let tempOrders = [
//         { name: "ADANIPOWER", price: 688.3, percent: "+2.14%", isDown: false },
//         { name: "MARUTI", price: 10218.5, percent: "-0.15%", isDown: true },
//         { name: "MCDOWELL_N", price: 1088.9, percent: "+1.09%", isDown: false },
//     ];
//     tempOrders.forEach((item)=>{
//          let newOrders=new OrdersModel({
//             name:item.name,
//             price:item.price,
//             percent:item.percent,
//             isDown:item.isDown,
            
//          })
//          newOrders.save();
//     })
//     res.send("Done!");
// });


app.use("/", authRoute);
app.use("/api", investorRoutes);



app.get("/allHoldings", async (req, res) => {
    let allHoldings=await HoldingsModel.find({});   //holdingModel se sare data nikal lo 
    res.json(allHoldings); //json ke format mai bhej do webpage par
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