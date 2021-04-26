import React from "react";
import "./css/NoItems.css";
import { RiDeleteBin2Line } from "react-icons/ri";

function NoItems() {
  return (
    <div className="no-items">
      <div className="wrap">
        <div className="del-icon">
          <RiDeleteBin2Line />
        </div>
        <p>No Items</p>
      </div>
    </div>
  );
}

export default NoItems;
