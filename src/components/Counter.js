import React, { useState } from "react";
import "./../App.css";

const Counter = () => {
  let [count, setCount] = useState(0);
  const increase = (val) => {
    setCount(count + val);
  };
  const decrease = (val) => {
    setCount(count - val);
  };
  return (
    <section className="container">
      <h1 className="text-center">
        <span className="value">{count}</span>
      </h1>
      <div className="flx text-center">
        <div className="half">
          <button
            className="btn btn-primary my-1"
            onClick={() => {
              decrease(1);
            }}
          >
            Decrease by 01
          </button>{" "}
          <br />
          <button
            className="btn btn-primary my-1"
            onClick={() => {
              decrease(2);
            }}
          >
            Decrease by 02
          </button>{" "}
          <br />
          <button
            className="btn btn-primary my-1"
            onClick={() => {
              decrease(4);
            }}
          >
            Decrease by 04
          </button>{" "}
          <br />
          <button
            className="btn btn-primary my-1"
            onClick={() => {
              decrease(8);
            }}
          >
            Decrease by 08
          </button>{" "}
          <br />
          <button
            className="btn btn-primary my-1"
            onClick={() => {
              decrease(16);
            }}
          >
            Decrease by 16
          </button>{" "}
          <br />
          <button
            className="btn btn-primary my-1"
            onClick={() => {
              decrease(32);
            }}
          >
            Decrease by 32
          </button>{" "}
          <br />
        </div>
        <div className="half">
          <button
            className="btn btn-primary my-1"
            onClick={() => {
              increase(1);
            }}
          >
            Increase by 01
          </button>{" "}
          <br />
          <button
            className="btn btn-primary my-1"
            onClick={() => {
              increase(2);
            }}
          >
            Increase by 02
          </button>{" "}
          <br />
          <button
            className="btn btn-primary my-1"
            onClick={() => {
              increase(4);
            }}
          >
            Increase by 04
          </button>{" "}
          <br />
          <button
            className="btn btn-primary my-1"
            onClick={() => {
              increase(8);
            }}
          >
            Increase by 08
          </button>{" "}
          <br />
          <button
            className="btn btn-primary my-1"
            onClick={() => {
              increase(16);
            }}
          >
            Increase by 16
          </button>{" "}
          <br />
          <button
            className="btn btn-primary my-1"
            onClick={() => {
              increase(32);
            }}
          >
            Increase by 32
          </button>{" "}
          <br />
        </div>
      </div>
    </section>
  );
};

export default Counter;
