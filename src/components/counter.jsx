import React, { Component } from "react";
import Counters from "./counters";
import "./counter.css";

class Counter extends Component {
  render() {
    return (
      <>
        <div>
          {this.props.children}
          <img src="https://picsum.photos/200" alt="new" />
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          <span className="updownbuttons">
            <button
              onClick={() => this.props.onIncrement(this.props.counter)}
              className="btn btn-secondary btn-sm m-2"
            >
              +
            </button>
            <button
              onClick={() => this.props.onDecrement(this.props.counter)}
              className="btn btn-secondary btn-sm"
            >
              -
            </button>
          </span>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            Delete
          </button>
        </div>
      </>
    );
  }

  getBadgeClasses() {
    let classes = "badge l-3 bg-";
    classes +=
      this.props.counter.value === 0
        ? "warning counterholder"
        : "primary counterholder2";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
