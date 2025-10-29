import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);  //quantity 1 se start hoga qki 0 quanity to ho nahi sakti 0 item koi khrid nhi skta
  const [stockPrice, setStockPrice] = useState(0.0);

  const handleBuyClick = () => {
    axios.post("http://localhost:3002/buyOrder", {    //Axios ek JavaScript library hai jo hum use karte hain HTTP requests (like GET, POST, PUT, DELETE) bhejne ke liye
      name: uid,  //agar koi bhi naye chiz buy karenge to /newOrder par post ho jayegi uski sari name,qty,price,mode sab kuch
      qty: stockQuantity,
      price: stockPrice,
      mode: "BUY",
    });
    GeneralContext.closeBuyWindow();  //Jab request bhej di, tab turant closeBuyWindow() call hota hai→ taaki Buy window close ho jaaye
  };

  const handleCancelClick = () => {    //Jab user “Cancel” button pe click karta hai,toh wo kuch karidna nahi hota — sirf window band karni hoti hai.Isliye yahan bhi closeBuyWindow() call kiya gaya.
    GeneralContext.closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;