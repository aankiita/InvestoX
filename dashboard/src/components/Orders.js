import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/buyOrder")
      .then((res) => {
        let backendOrders = res.data || [];
        const latestOrder = localStorage.getItem("latestOrder");
        if (latestOrder) {
          const parsedOrder = JSON.parse(latestOrder);
          backendOrders = [...backendOrders, parsedOrder];
          localStorage.removeItem("latestOrder");
        }

        setOrders(backendOrders);
      })
      .catch((err) => console.error("Error fetching orders:", err));
  }, []);

  return (
    <div className="orders" style={{ padding: "2rem" }}>
      {orders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today.</p>
          <a href="/" className="btn">
            Get started
          </a>
        </div>
      ) : (
        <div className="order-list">
          <h2>Your Orders</h2>
          <table border="1" cellPadding="10" style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ backgroundColor: "#f5f5f5" }}>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Mode</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td>{order.name}</td>
                  <td>{order.qty}</td>
                  <td>₹{order.price}</td>
                  <td>{order.mode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;
