import React, { useState, useEffect } from "react";
import { all } from "axios";
import axios from "axios";

import { VerticalGraph } from "./VerticalGraph";

//import { holdings } from "../data/data";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allHoldings")   //axios.get try to connect it to the link and try to get response from it
      .then((res) => setAllHoldings(res.data))
      .catch(err => console.error("Axios error:", err));
  }, []);

 const labels = allHoldings.map((stock) => stock.name);
 // const labels = allHoldings.map((subArray) => subArray["name"]);   //allHolding to database se data aa rha hai  uska bass naam extract karo qki ek holding mai name,profir,price sab hota hai to extract name only we can write
  //map((subArray)=>subArray(["name"]))  ["name"] matlab bass uska naam chahiye,so label will contain all holdings name

  const data = {  //the pattern we are taking from react document 
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),  //for each stock in the array we only want stock Price so we can write--> arraylist.map((stock)=>stock.price)
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  useEffect(() => {
    setAllHoldings(allHoldings);
  }, []);


  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>  {/*LTP means last time price kiya tha */}
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>

            {/* array.map((element, index) => {   //as element and index is inbuilt in map so there stock=element and index=index ek tarah se inbuilt hua 
              // do something
            }); */}
          {allHoldings.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;   //return booleans as comparing to >=0.0
            const profClass = isProfit ? "profit" : "loss"; //return booleans
            const dayClass = stock.isLoss ? "loss" : "profit"; //return booleans

            return (
              <tr key={index}>  {/* index of --> array.map(element,index) if index=0 then key=0 if index=1 then key=1..so..on */}
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td> {/*toFixed(2) matalb 2 decimal place tak jayega*/}
                <td>{stock.price.toFixed(2)}</td>   
                <td>{curValue.toFixed(2)}</td>
                <td className={profClass}>
                  {(curValue - stock.avg * stock.qty).toFixed(2)}   {/*profit in decimal */}
                </td>
                <td className={profClass}> {stock.net} </td>  {/*profit in percentage */}
                <td className={dayClass}> {stock.day} </td>    {/*loss in percentage */}
              </tr>
            );
          })}
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalGraph data={data} />  {/*Graph ko sabse last mai daal rahe hai or props hoga {data} */}
    </>
  );
};

export default Holdings;