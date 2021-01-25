import React from "react";
import "../../assets/css/about.css";

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <div classname="photo">
          <img
            src="https://i.pinimg.com/originals/0b/5e/50/0b5e50a5fadc48dd168262fad22c5e2c.jpg"
            alt=""
          />
        </div>
        <div classname="name">
          <h1>Kotaro Minami</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero,
            accusantium debitis hic quos doloremque tempora aperiam error magni
            minima illum iste. Harum magnam dolor pariatur nisi, delectus minus
            alias iure! Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Vero, accusantium debitis hic quos doloremque tempora aperiam
            error magni minima illum iste. Harum magnam dolor pariatur nisi,
            delectus minus alias iure! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Vero, accusantium debitis hic quos doloremque
            tempora aperiam error magni minima illum iste. Harum magnam dolor
            pariatur nisi, delectus minus alias iure!
          </p>
        </div>
      </div>
    );
  }
}

export default About;
