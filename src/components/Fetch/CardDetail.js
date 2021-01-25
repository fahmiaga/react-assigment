import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_API } from "./Utility/constant";
import { useParams } from "react-router-dom";

function CardDetail(props) {
  const { id } = useParams();
  const [people, setPeople] = useState([]);
  useEffect(() => {
    axios.get(BASE_API).then((response) => {
      console.log(response.data.data[id]);
      setPeople(response.data.data[id]);
    });
  }, [id]);

  const handleClickNext = () => {
    let idTemp = parseInt(id);
    props.history.push(`/card-detail/${idTemp === 5 ? idTemp : idTemp + 1}`);
    console.log(props);
  };
  const handleClickPrev = () => {
    let idTemp = parseInt(id);
    props.history.push(`/card-detail/${idTemp === 0 ? idTemp : idTemp - 1}`);
    console.log(idTemp);
  };

  return (
    <div className="card-detail">
      {console.log(people.first_name)}
      <p>
        {people.first_name} {people.last_name}
      </p>
      <img src={people.avatar} alt="" />
      <p>{people.email}</p>
      <button onClick={handleClickPrev}>prev</button>
      <button onClick={handleClickNext}>next</button>
    </div>
  );
}
export default CardDetail;
