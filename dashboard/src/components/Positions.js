import React,{ useState, useEffect } from "react";
import { all } from "axios";
import axios from "axios";

// import { positions } from "../data/data";
const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/addPositions")   //axios.get try to connect it to the link and try to get response from it
      .then((res) => setAllPositions(res.data))
      .catch(err => console.error("Axios error:", err));
  }, []);

  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>

          {allPositions.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0; //boolean value return
            const profClass = isProfit ? "profit" : "loss";      //boolean value return
            const dayClass = stock.isLoss ? "loss" : "profit";    //boolean value return

            return (    // <-- this return is for the map function, not the component
              <tr key={index}>
                <td>{stock.product}</td>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td className={profClass}>
                  {(curValue - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}

        </table>


      </div>
    </>
  );
};

export default Positions;