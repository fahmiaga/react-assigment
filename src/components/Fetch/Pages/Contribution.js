import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_API } from "../Utility/constant";
import Cards from "../Card/Cards";
import "../Card/cards.css";
// import ReactDOM from "react-dom";

const Contribution = (props) => {
  const [users, setUsers] = useState([]);
  console.log(props);
  useEffect(() => {
    const fetchdata = async () => {
      const result = await axios(BASE_API);
      setUsers(result.data.data);
    };
    fetchdata();
  }, []);
  const showDetail = (id) => {
    console.log(id);
    props.history.push(`/card-detail/${id}`);
  };
  return (
    <div>
      <div className="cards-container">
        {users.map((user, index) => (
          <Cards
            avatar={user.avatar}
            first_name={user.first_name}
            last_name={user.last_name}
            index={index}
            showDetail={() => showDetail(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Contribution;
