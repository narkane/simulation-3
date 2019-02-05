import React, { Component } from "react";
import { connect } from "react-redux";
import {
  updateImage,
  updateUsername,
  updatePassword
} from "../../ducks/reducer";
import { Link } from "react-router-dom";
import "../../App.css";
import axios from "axios";

import logo from "../../assets/helo_logo.png";

class Auth extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   username: "",
    //   password: ""
    // };

    // const { updatePathname } = this.props;
    // updatePathname("/");
    const { updateUsername, updatePassword } = this.props;
    updatePassword("");
    updateUsername("");
    console.log(this.props);
    // updatePathname("/");
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleLogin(event) {
    const { updateImage } = this.props;
    console.log(this.props);
    // console.log("A name was submitted: " + this.props.user);
    event.preventDefault();
    axios
      .post("/login", {
        username: this.props.username,
        password: this.props.password
      })
      .then(resp => {
        console.log(resp.data);
        if (resp.status === 200) {
          console.log("yos");
          updateUsername(resp.data.username);
          updatePassword(resp.data.password);
          updateImage(resp.data.img);
        } else {
          console.log("no");
        }
      });
    this.props.history.push("/Nav/Dashboard");
  }
  handleRegister(event) {
    console.log(this.props);
    alert("A name was registered: " + this.props.username);
    event.preventDefault();
    axios
      .post("/register", {
        username: this.props.username,
        password: this.props.password
      })
      .then(resp => {
        console.log(resp);
      });
    this.props.history.push("/Nav/Dashboard");
  }

  handleUsername(event) {
    const { updateUsername } = this.props;
    // this.setState({ username: event.target.value });
    updateUsername(event.target.value);
  }
  handlePassword(event) {
    const { updatePassword } = this.props;
    // this.setState({ password: event.target.value });
    updatePassword(event.target.value);
  }

  render() {
    return (
      // <form>
      <div className="Auth">
        <div className="auth_container">
          <img src={logo} />
          <div id="title">Helo</div>
          <label>
            Name:
            <input type="text" onChange={this.handleUsername} />
          </label>
          <label>
            Pass:
            <input type="password" onChange={this.handlePassword} />
          </label>
          <Link to="/Dashboard" id="butts">
            <button value="Submit" onClick={this.handleLogin}>
              Submit
            </button>
            <button value="Register" onClick={this.handleRegister}>
              Register
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // const { loggedIn } = state;

  return {
    username: state.username,
    password: state.password,
    img: state.img
  };
}

export default connect(
  mapStateToProps,
  { updateImage, updateUsername, updatePassword }
)(Auth);
