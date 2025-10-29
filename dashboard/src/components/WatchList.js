import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import { Tooltip, Grow } from "@mui/material";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
  InfoOutlined,
} from "@mui/icons-material";

//KeyboardArrowDown,KeyboardArrowUp--> these class come from materialUI 
import { watchlist } from "../data/data";
import { DoughnutChart } from "./DoughnoutChart";

const labels = watchlist.map((stock) => stock.name);
//const labels = watchlist.map((subArray) => subArray["name"]);  ////watchlist to data.js se aa rha hai  uska bass naam extract karo qki ek holding mai name,profit,price sab hota hai to extract name only we can write
  //map((subArray)=>subArray(["name"]))  ["name"] matlab bass uska naam chahiye,so label will contain all watchlist name

const WatchList = () => {
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };


  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>   {/*watchlist.length=9 */}
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>

      <DoughnutChart data={data} />
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false); //starting m kuch v show nhi krna qki sare showwatchlist stock ki value false  hai, jo stock ki value true hogi ushi pr mousehover function km krega or uska hi sara detail dikhyegi dega

  const handleMouseEnter = (e) => {   //jab mouse se click kregnge tabb  setshowWatchlistActions ki value true ho jygi , jisse  jiise uska sara detail dikhyegi dega.
    setShowWatchlistActions(true);   ///jab mouse hatyega  tabb  setshowWatchlistActions ki value false ho jygi, jiise uska sara detail dikhna band ho jyga.
  };

  const handleMouseLeave = (e) => {
    setShowWatchlistActions(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>   {/*stock.isDown ? "down" : "up"---> for setting colour of stock either blue or green down-red up-blue */}
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />  
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchlistActions && <WatchListActions uid={stock.name} />}  {/*agar ye true hoga tab hi WatchListActions wala function call hoga */}
    </li>
  );
};

const WatchListActions = ({ uid }) => {   //jo icons hai jaise buy box ke andr sell ya graph ushi ke lie hum  WatchListActions bana rahe hai .
// (uid use islie kar rahe hai taki pata chl sake ki kis particular item par hume hover show karna hai-->>index ko humlog uuid ke tarah use karenge)
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);  //opeBuywindow is inbuilt function inside GeneralContext
  };
  const handleSellClick = () => {
    generalContext.openSellWindow(uid);  //opeBuywindow is inbuilt function inside GeneralContext
  };

  const handleAnalyticsClick = () => {
    generalContext.openAnalyticsWindow(uid); 
  };
  //jub onclick mouse karenge toh hume us stock k pass sell,buy,graph show karne lage

  const handleAboutClick = () => {    
    generalContext.openAboutWindow(uid);
  };
  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy (B)"  //title is just a name agar buy wale button par click kie the gray colour mai BUY(B) upar mai show hoga 
          placement="top"   //title kaha show karna chye but ke top mai to placement="top" agar down mai to placement="bottom"
          arrow  //box ke niche mai thora sa arrow ayega jo dikhyega ye buy button ka hai islie arrow use karte hai
          TransitionComponent={Grow}
          onClick={handleBuyClick}
        >
          <button className="buy">Buy</button>
        </Tooltip>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}   //TransitionComponent={Grow} → the tooltip grows smoothly from small to full size when it appears. like zoom -->in ,out and fade--> in ,out 
          onClick={handleSellClick} 
        >
          <button className="sell">Sell</button>
        </Tooltip>
        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
          onClick={handleAnalyticsClick} 
        >
          <button className="action"><BarChartOutlined className="icon" /></button> {/*<BarChartOutlined /> comes from material ui -->renders a bar chart icon inside the button. */}
        </Tooltip>
        <Tooltip title="More" 
            placement="top" 
            arrow 
            TransitionComponent={Grow}
            onClick={handleAboutClick}
            >
          <button className="action"> <MoreHoriz className="icon" /></button>  {/*<MoreHoriz/> comes from material ui for more wala icon */}
        </Tooltip>
      </span>
    </span>
  );
};