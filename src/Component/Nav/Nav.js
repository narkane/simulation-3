import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  updateImage,
  updateUsername,
  updatePassword
} from "../../ducks/reducer";

import home from "../../assets/home_logo.png";

import "../../App.css";
import Axios from "axios";

class Nav extends Component {
  constructor(props) {
    super(props);

    console.log("NAV: " + props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    Axios.get("/logout").then(resp => alert(resp.status + ": " + resp.data));
  }

  render() {
    return (
      <>
        {/* {props.pn.location.pathname != "/" ? ( */}
        <div className="Nav">
          <div className="User">
            {/* <div id="profileFrame"> */}
            <img src={this.props.img} id="profileFrame" />
            {/* </div> */}
            {this.props.username}
          </div>
          <div>
            <hr />
            <Link to="/Nav/Dashboard">
              <button id="home-button" />
            </Link>
            <Link to="/Nav/Post/:1">
              <button id="post-button" />
            </Link>
          </div>
          <div id="logout">
            <Link to="/">
              <button onClick={this.logout} />
            </Link>
          </div>
        </div>
        {/* ) : null} */}
      </>
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
)(Nav);
