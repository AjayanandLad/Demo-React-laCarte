import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/homecomponent";
import NavBar from "./components/navBarComponent";
import LaCarte from "./components/laCarteComponent";
import Contacts from "./components/contactsComponent";
import Nested from "./components/nestedComponent";
import ErrorPage from "./components/errorComponent";

class App extends Component {
  state = {
    products: [
      {
        name: "Notebook",
        id: "xS001",
        itemCount: 0
      },
      {
        name: "Pencil",
        id: "xS002",
        itemCount: 0
      },
      {
        name: "Clip",
        id: "xS003",
        itemCount: 2
      },
      {
        name: "Marker",
        id: "xS004",
        itemCount: 0
      }
    ]
  };

  handleDeleteProduct = productId => {
    const products = this.state.products.filter(c => c.id !== productId);
    this.setState({ products });
  };

  handleIncrement = product => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...product };
    products[index].itemCount++;
    this.setState({ products });
  };

  handleDecrement = product => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...product };
    if (products[index].itemCount > 0) products[index].itemCount--;
    this.setState({ products });
  };

  handleReset = () => {
    const products = this.state.products.map(c => {
      c.itemCount = 0;
      return c;
    });
    this.setState({ products });
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar
            totalItem={this.state.products.filter(c => c.itemCount > 0).length}
          />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route
              path="/cart"
              render={routeProps => (
                <LaCarte
                  products={this.state.products}
                  onReset={this.handleReset}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                  onDelete={this.handleDeleteProduct}
                />
              )}
            />
            <Route path="/contact" component={Contacts} />
            <Route path="/nested-user" component={Nested} />
            <Route component={ErrorPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
