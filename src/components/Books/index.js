// import React from "react";
// import { BookData } from "../BookData";
// import BookCard from "../BookCard";

// class Books extends React.Component {
//   constructor() {
//     super();
//     this.state = BookData;
//   }

//   addBook(){
//     this.setState
//   }
//   render() {
//     return;
//   }
// }
// export default Books;

import React, { useEffect, useState } from "react";
// import { Row, Col } from "antd";
import { BookData } from "../BookData";
// import imgBook from "../../assets/images/book.jpg";
import BookCard from "../BookCard";

const Books = () => {
  const [data, setData] = useState(BookData);

  const handleAdd = () => {
    const newData = {
      id: data.length + 1,
      name: "Book",
      img:
        "https://i.pinimg.com/originals/09/c6/5f/09c65fad0b1753e0b99f455e5b6a2f37.png",
      button: <button onClick={handleRemove}>Remove Book</button>,
    };
    const newArr = [...data]; // rest & spread operator
    let result = newArr.concat(newData);
    setData(result);
  };

  const handleRemove = () => {
    const newArr = [...data];
    // let result = newArr.slice(0, newArr.length - 1); // remove last element
    // let result = newArr.slice(0, -1); // remove last element
    let result = newArr.filter((arr) => arr != arr.id + 1); // remove last element
    setData(result);
  };

  return (
    <>
      <button onClick={handleAdd}>Add Book</button>

      <div className="book-container">
        {data.map((list, index) => (
          <BookCard
            name={list.name}
            id={list.id}
            img={list.img}
            button={list.button}
          />
        ))}
      </div>
    </>
  );
};

export default Books;
