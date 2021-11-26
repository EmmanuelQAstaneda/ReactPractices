import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value = 6 }) => {
  const [counter, setCounter] = useState(value);

  const addition = () => {
    setCounter(counter + 1);
  };
  const sustract = () => {
    setCounter(counter - 1);
  };
  const resetValue = () => {
    setCounter(value);
  };

  return (
    <Fragment>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={addition}>+1</button>
      <button onClick={resetValue}>Reset</button>
      <button onClick={sustract}>-1</button>
    </Fragment>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

export default CounterApp;
