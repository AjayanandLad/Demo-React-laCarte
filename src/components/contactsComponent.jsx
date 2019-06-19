import React, { Component } from "react";

class contacts extends Component {
  state = {
    contacts: []
  };

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        this.setState({ contacts: data });
      })
      .catch(console.log);
  }

  render() {
    let loading = this.state.contacts.length === 0 ? "block" : "none";
    return (
      <div>
        <h3 className="m-3">
          Contact List
          <small>
            &nbsp; (list populated with API
            'http://jsonplaceholder.typicode.com/users')
          </small>
        </h3>
        <center
          style={{
            display: loading
          }}
        >
          Loading...
        </center>
        {this.state.contacts.map(contact => (
          <div className="card" key={contact.id}>
            <div className="card-body">
              <h5 className="card-title">{contact.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{contact.email}</h6>
              <p className="card-text">{contact.company.catchPhrase}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default contacts;
