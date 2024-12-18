import React, { Component } from "react";

export default class Person extends Component {
  constructor(props) {
    super(props);
    this.person = {
      fullName: "Skander",
      bio: "The best",
      imgSrc:
        "https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/451995224_1598089337424629_4701308598932700775_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=1X5zs6JNozYQ7kNvgEqkTCg&_nc_zt=23&_nc_ht=scontent.ftun1-2.fna&_nc_gid=AoN7nCDES3Vbtpj0nNbGeZg&oh=00_AYBcWjEJBeZNatlN33xvkyZTSO5yEWC6ebnsaULsX2IOzg&oe=6768BB72",
      profession: "Wev developer",
    };
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.state);
  }
  render() {
    return (
      <div>
        <div>counter: {this.state.count}</div>
        <h1>{this.person.fullName}</h1>
        <h2> {this.person.bio}</h2>
        <h2> {this.person.profession}</h2>
        <img src={this.person.imgSrc} alt="student" />
      </div>
    );
  }
}
