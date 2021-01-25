import React from "react";
// import "../../assets/css/card.css";

class Card extends React.Component {
  //   render() {
  //     return <div className="container">{this.props.list}</div>;
  //   }
  // }
  render() {
    return (
      <div
        onClick={this.props.change}
        className={this.props.select ? "card" : "card color"}
      >
        <p>{this.props.name}</p>
        <img src={this.props.photo} alt="" />
      </div>
    );
  }
}

export default Card;
