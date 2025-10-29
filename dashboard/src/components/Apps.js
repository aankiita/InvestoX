import React from "react";

const Apps = () => {
  const handleKnowMore = () => {
    window.location.href = "http://localhost:3001"; 
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "2rem",
          borderRadius: "20px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          textAlign: "center",
          maxWidth: "400px",
        }}
      >

        <h2 style={{ color: "#1373e1ff" }}>Know More About App</h2>
        <p style={{ color: "#555", fontSize: "15px", marginTop: "0.5rem" }}>
          Empowering investors since 2010 — trade smart, invest better, and
          achieve financial freedom.
        </p>

        <button
          onClick={handleKnowMore}
          style={{
            backgroundColor:"#1373e1ff",
            marginTop: "1.5rem",
            color: "white",
            border: "none",
            borderRadius: "8px",
            padding: "10px 20px",
            cursor: "pointer",
            fontWeight: "600",
            transition: "0.3s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0d47a1")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#1373e1ff")}
        >
           Explore Zerodha
        </button>
      </div>
    </div>
  );
};

export default Apps;
