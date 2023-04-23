import React from "react";

export default function Confo(props) {
  const {
    name,
    date,
    time,
    pickup,
    dropoff,
    passengers,
    additionalInfo,
    handleReset,
  } = props;

  return (
    <div>
      <div
        className={`confirmation-container ${
          props.mode === "dark" ? "white-text" : ""
        }`}
      >
        <h1>Thank you for your inquiry, {name}!</h1>
        <p>
          We will pick up {passengers} passenger
          {passengers > 1 ? "s" : ""} from {pickup} and drop you off at{" "}
          {dropoff} on {date} at {time}.
        </p>
        <p>Your additional requirements are: {additionalInfo}.</p>
        <button onClick={handleReset} className="btn btn-dark">
          Reset
        </button>
      </div>
    </div>
  );
}
