import React, { useState } from "react"
import allFiles from "./HotelReact.js"

const Restaurant = (props) => {
  // const [order, setOrder] = useState(0);
  //  const orderOne = () =>{
  //    setOrder(order + 1);
  //  }
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <allFiles.Order orderType=  "Pizzas" />
        <allFiles.Order orderType=  "Salads" />
        <allFiles.Order orderType=  "Chocolate cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
