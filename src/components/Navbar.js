import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div
        style={{
          paddingBottom: "20px",
          paddingTop: "20px",
          textAlign: "center",
          marginBottom: "50px",
          marginRight: "200px",
          marginLeft: "120px",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
      >
        <nav>
          <Link to="/" style={{ marginRight: "15px" }}>
            HOME
          </Link>
          <Link to="/admin">ADMIN</Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
