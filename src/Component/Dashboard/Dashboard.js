import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUsername, updatePassword } from "../../ducks/reducer";
import { Link } from "react-router-dom";

import "../../App.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    // const { updatePathname } = this.props;
    console.log(this.props);
    // updatePathname("/Dashboard");
    // this.logout = this.logout.bind(this);
  }

  render() {
    return (
      <div className="Dashboard">
        Dashboard
        <br />
        {/* <Link to="/Post">
          <button>New Post</button>
        </Link> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  // const { loggedIn } = state;

  return {
    username: state.username,
    password: state.password
    // location: {
    //   pathname: state.pathname
    // }
  };
}

export default connect(
  mapStateToProps,
  { updateUsername, updatePassword }
)(Dashboard);
