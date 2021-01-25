import React from "react";
import { BrowserRouter as Route } from "react-router-dom";
// import CardDetail from "../CardDetail";
const Cards = (avatar) => {
  return (
    <div className="card-cards">
      {/* <li key={index}> */}
      <img src={avatar.avatar} alt={avatar.first_name} />
      <p>
        {avatar.first_name} {avatar.last_name}
      </p>
      <button onClick={avatar.showDetail}>Detail</button>
      {/* </li> */}
      <Route />
    </div>
  );
};

export default Cards;
