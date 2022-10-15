import React, { useState } from "react";
import "./style.css";

const Calculator = () => {
  const [cal, setCal] = useState("");

  const updateCal = (value) => {
    setCal(cal + value);
  };

  const handleequal = () => {
    var result = eval(cal);
    setCal(result);
  };

  const createdigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button key={i} onClick={() => updateCal(i.toString())}>
          {i}
        </button>
      );
    }
    return digits;
  };
  const reset = () => {
    setCal("");
  };

  return (
    <>
      <div className="calc_container">
        <div className="width">
          <h3>Calculator</h3>
          <div className="flex">
            <h4>{cal}</h4>
            <button className="right" onClick={() => reset()}>
              C
            </button>
          </div>
          <div className="flex">
            <div>
              {createdigits()}
              <button onClick={() => updateCal(".")}>.</button>
              <button onClick={() => updateCal("0")}>0</button>
              <button onClick={() => handleequal()}>=</button>
            </div>
            <div>
              <button onClick={() => updateCal("/")}>/</button>
              <button onClick={() => updateCal("*")}>*</button>
              <button onClick={() => updateCal("+")}>+</button>
              <button onClick={() => updateCal("-")}>-</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
