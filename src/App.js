import React, { Component } from "react";
import router from "./router";
import { HashRouter } from "react-router-dom";
// import logo from './logo.svg';
import { connect } from "react-redux";
import { updateUsername, updatePassword } from "./ducks/reducer";

import Nav from "./Component/Nav/Nav";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          {/* {console.log(this.props)} */}
          {/* <Nav /> */}
          {router}
        </div>
      </HashRouter>
    );
  }
}
