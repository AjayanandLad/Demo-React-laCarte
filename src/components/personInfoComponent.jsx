import React, { Component } from "react";

// class PersonInfo extends Component {
//   state = {};
//   render({ contacts }) {
//     console.log("props", this.props);
//     console.log("stateInfo", this.state);
//     console.log("propsInfo", this.props);
//     return <h3>PERSON-INFO</h3>;
//   }
// }

const PersonInfo = ({ match }) => {
  console.log("this", match);
  // console.log("props", this.props);
  return <h3>PERSON-INFO</h3>;
};

export default PersonInfo;
