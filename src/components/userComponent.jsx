import React, { Component } from "react";

class User extends Component {
  state = {
    contact: {}
  };
  componentDidMount() {
    this.setState({ contact: this.props.location.state.contact });
    const { userId } = this.props.match.params.userId;
    const { contact } = this.props.location.state.contact;
  }
  render() {
    debugger;
    return (
      //   <React.Fragment>
      //     <h2>Name: {this.state.contact.name}</h2>
      //     <h4>Id: {this.userId}</h4>
      //     <h6>Company: {this.state.contact.company.name}</h6>
      //     <h6>Phone: {this.state.contact.phone}</h6>
      //     <h6>Email: {this.state.contact.email}</h6>
      //   </React.Fragment>
      <React.Fragment>
        <h2>Name: {this.props.location.state.contact.name}</h2>
        <h4>Id: {this.userId}</h4>
        <h6>Company: {this.props.location.state.contact.company.name}</h6>
        <h6>Phone: {this.props.location.state.contact.phone}</h6>
        <h6>Email: {this.props.location.state.contact.email}</h6>
      </React.Fragment>
    );
  }
}

export default User;
