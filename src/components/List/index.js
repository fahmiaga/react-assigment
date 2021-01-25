import React from "react";
import Card from "../Card";
import "../../assets/css/card.css";

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      isSelected: "card",
      list: [
        {
          name: "Kotaro Minami",
          photo:
            "https://www.sutekiji.com/wp-content/uploads/2016/12/kotaro_opt.jpg",
        },
        {
          name: "Kamen Rider Black",
          photo:
            "https://cdn.shopify.com/s/files/1/0095/6910/8015/products/4530956106991_0.jpg?v=1565852551",
        },
        {
          name: "Kamen Rider Bio",
          photo:
            "https://images-na.ssl-images-amazon.com/images/I/619vqeLTQBL._AC_SL1492_.jpg",
        },
        {
          name: "Jiban",
          photo:
            "https://tukoz.com/wp-content/uploads/2020/06/Kidou-Keiji-Jiban-2.jpg",
        },
        {
          name: "Kamen Rider Robo",
          photo:
            "https://cf.shopee.com.my/file/8fe7bb351bd71a80997b1ac5855a68f1",
        },
      ],
    };
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor(e) {
    console.log(e.target);
    if (e.target)
      this.setState({
        isSelected: !this.state.isSelected,
      });
  }
  // render() {
  //   const PeopleList = this.state.list.map((l, i) => {
  //     console.log(i);
  //     return (
  //       <div>
  //         <div
  //           onClick={(e) => {
  //             const change = e.target;
  //             this.changeColor(change);
  //           }}
  //           className={this.state.isSelected ? "card" : "card color"}
  //         >
  //           <p>{l.name}</p>
  //           <img src={l.photo} alt="" />
  //         </div>
  //       </div>
  //     );
  //   });
  //   return <Card list={PeopleList} />;
  // }
  render() {
    const name = this.state.list.map((l) => {
      return (
        <Card
          name={l.name}
          photo={l.photo}
          change={this.changeColor}
          select={this.state.isSelected}
        />
      );
    });
    return <div className="container">{name}</div>;
    // let name = "";
    // let photo = "";
    // this.state.list.map((l, i) => {
    //   return (name = l.name), (photo = l.photo);
    // });
    // return (
    //   <div className="container">
    //     {this.state.list.map((l) => {
    //       // console.log(l.name);
    //       <Card
    //         name={l.name}
    //         photo={l.photo}
    //         change={this.changeColor}
    //         select={this.state.isSelected}
    //       />;
    //     })}
    //   </div>
    // );
  }
}

export default List;
