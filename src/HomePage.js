import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>
        Test Page for Routing
      </h1>
      <Link
        to="/templates/reminder-early"
        style={{
          display: "inline-block",
          padding: "10px 20px",
          backgroundColor: "blue",
          color: "white",
          borderRadius: "8px",
          textDecoration: "none",
        }}
      >
        Go to Reminder Template
      </Link>
    </div>
  );
}

export default HomePage;
