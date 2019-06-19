import React, { Component } from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import User from "./userComponent";

class Nested extends Component {
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
    const { match } = this.props;
    return (
      <div>
        <div className="container">
          <h2>Users</h2>
          <div className="row">
            <div className="col-3">
              <ul>
                {this.state.contacts.map(contact => (
                  <li key={contact.id}>
                    <Link
                      to={{
                        pathname: `${match.url}/${contact.id}`,
                        state: {
                          contact: contact
                        }
                      }}
                    >
                      {contact.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-9 honeyDew">
              <Route
                path={`${match.path}/:userId`}
                render={(props, match) => (
                  <User {...props} isAuthed={true} isBool={false} />
                )}
              />
              <Route
                exact
                path={match.path}
                render={() => <h3>Please select a user.</h3>}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Nested;
