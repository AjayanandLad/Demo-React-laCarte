import React, { Component } from "react";

class Counters extends Component {
  render() {
    // const {children,onIncrement,product,onDelete} = this.props;
    return (
      <React.Fragment>
        <div>{this.props.children}</div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.product)}
          className="btn btn-secondary m-1 btn-sm"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.product)}
          className="btn btn-secondary m-1 btn-sm"
        >
          -
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.product.id)}
          className="btn btn-danger m-1 btn-sm"
        >
          Delete
        </button>
      </React.Fragment>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.product.itemCount === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { itemCount } = this.props.product;
    return itemCount === 0 ? "Buy" : itemCount;
  }
}

export default Counters;
