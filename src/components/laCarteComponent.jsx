import React, { Component } from "react";
import Counters from "./counterComponent";
import "../styles/laCarte.css";

class LaCarte extends Component {
  render() {
    return (
      <React.Fragment>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        <br />
        <br />
        <div>
          {this.props.products.map(product => (
            <React.Fragment key={product.id}>
              <Counters
                product={product}
                onIncrement={this.props.onIncrement}
                onDecrement={this.props.onDecrement}
                onDelete={this.props.onDelete}
              >
                <img
                  className="product-thumb"
                  src="https://picsum.photos/50"
                  alt=""
                />
                <h4>{product.name}</h4>
              </Counters>
              <br />
              <br />
            </React.Fragment>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default LaCarte;
