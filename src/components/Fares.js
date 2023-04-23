import React, { useEffect } from "react";
import "./Faressty.css";

export default function Fares(props) {
  const fares = [
    { type: "Mini", basePrice: 60, perKm: 12 },
    { type: "Sedan", basePrice: 100, perKm: 15 },
    { type: "SUV", basePrice: 150, perKm: 18 },
  ];

  function calculateFare(distance, type) {
    const fare = fares.find((fare) => fare.type === type);
    const baseFare = fare.basePrice;
    const perKmFare = fare.perKm;
    return baseFare + distance * perKmFare;
  }

  useEffect(() => {
    const body = document.querySelector("body");
    if (props.mode === "dark") {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }, [props.mode]);

  return (
    <div className="fares-page tfix">
      <div className="confirmation-container">
        <div className="fares-container ">
          <h2 >Fares</h2>
          <ul className="fares-list list-group">
            {fares.map((fare) => (
              <li key={fare.type} className="list-group-item">
                <div className="fare-type">{fare.type}</div>
                <div className="fare-price">
                  {`Base fare: Rs.${fare.basePrice} + Rs.${fare.perKm}/km`}
                </div>
              </li>
            ))}
          </ul>
          <div className="fare-estimator">
            <h3>Calculate fare</h3>
            <div className="form-row mb-3 ">
              <div className="form-label col-sm-3">Distance (km)</div>
              <div className="col-sm-9">
                <input
                  type="number"
                  id="distance"
                  name="distance"
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="form-row mb-3">
              <div className="form-label col-sm-3">Vehicle type</div>
              <div className="form-colo col-sm-9">
                <select
                  id="vehicle-type"
                  name="vehicle-type"
                  className="form-colo form-control"
                >
                  {fares.map((fare) => (
                    <option key={fare.type} value={fare.type}>
                      {fare.type}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-row">
              <button
                className="btn btn-dark"
                onClick={() => {
                  const distance = document.getElementById("distance").value;
                  const vehicleType =
                    document.getElementById("vehicle-type").value;
                  const fare = calculateFare(distance, vehicleType);
                  alert(`The fare is Rs.${fare.toFixed(2)}`);
                }}
              >
                Calculate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
