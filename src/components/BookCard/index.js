// import React from "react";
// import "../../assets/css/book.css";

// class BookCard extends React.Component {
//   constructor() {
//     super();
//     this.state = { name: "", img: "", id: "" };
//   }
//   render() {
//     return (
//       <div className="book-container">
//         <div>
//           <p>
//             {this.state.name}
//             {this.state.id}
//           </p>
//           <img src={this.state.img} alt="" />
//         </div>
//       </div>
//     );
//   }
// }

// export default BookCard;

import React from "react";
import "../../assets/css/book.css";

const BookCard = ({ name, img, id, button }) => {
  return (
    <div classname="books">
      <p>
        {name} {id}
      </p>
      <img src={img} alt={name} width="100px" />
      <div>{button}</div>
    </div>
  );
};

export default BookCard;
