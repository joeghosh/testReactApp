import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement, onDecrement } =
      this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
            onDecrement={onDecrement}
          >
            {" "}
            <h2 className="m-2">Item {counter.id}</h2>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
