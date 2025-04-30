import React from "react";
import { Link } from "react-router-dom";


const AdminPanel = ({data}) => {
  let n = data.length;

  return (
    <div
      className="admin"
      style={{
        marginLeft: "200px",
        gap: "10px",
        height:"100vh",
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        <Link
          to={`/admin/products/${n}`}
          style={{
            borderRadius: "3px",
            padding: "7px",
            backgroundColor: "gray",
            color: "white",
          }}
        >
          Add Products
        </Link>
      </div>

      {data.map((item, id) => (
        <div
          key={id}
          className="prod-list"
          style={{
            display: "flex",
            marginBottom: "20px",
            backgroundColor: "grey",
            width: "50vw",
            height: "70px"
          }}
        >
          <div style={{ marginRight: "50px" }}>
            <img src={item.img} alt="product" style={{ height: "65px", width: "50px"}} />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link
              to={`/admin/products/${id}`}
              style={{
                borderRadius: "3px",
                padding: "5px 10px",
                backgroundColor: "#333",
                color: "#fff",
                textDecoration: "none",
              }}
            >
              {item.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminPanel;