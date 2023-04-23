import React, { useState } from "react";
import "./Formsty.css";
import Confo from "./Confo";

const defaultValues = {
  name: "",
  phone: "",
  email: "",
  date: "",
  time: "",
  pickup: "",
  dropoff: "",
  passengers: "",
  additionalInfo: "",
};

export default function Form(props) {
  const [name, setName] = useState(defaultValues.name);
  const [phone, setPhone] = useState(defaultValues.phone);
  const [email, setEmail] = useState(defaultValues.email);
  const [date, setDate] = useState(defaultValues.date);
  const [time, setTime] = useState(defaultValues.time);
  const [pickup, setPickup] = useState(defaultValues.pickup);
  const [dropoff, setDropoff] = useState(defaultValues.dropoff);
  const [passengers, setPassengers] = useState(defaultValues.passengers);
  const [additionalInfo, setAdditionalInfo] = useState(
    defaultValues.additionalInfo
  );

  const [nameValid, setNameValid] = useState(false);
  const [phoneValid, setPhoneValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [dateValid, setDateValid] = useState(false);
  const [timeValid, setTimeValid] = useState(false);
  const [pickupValid, setPickupValid] = useState(false);
  const [dropoffValid, setDropoffValid] = useState(false);
  const [passengersValid, setPassengersValid] = useState(false);

  const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  const phoneRegex = /^\d{10}$/;
  const emailRegex = /^\S+@\S+\.\S+$/;
  const dateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
  const timeRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

  const [showConfirmation, setShowConfirmation] = useState(false);

  function handleNameChange(event) {
    const value = event.target.value;
    setName(value);
    setNameValid(nameRegex.test(value.trim()));
  }

  function handlePhoneChange(event) {
    const value = event.target.value;
    setPhone(value);
    setPhoneValid(phoneRegex.test(value.trim()));
  }

  function handleEmailChange(event) {
    const value = event.target.value;
    setEmail(value);
    setEmailValid(emailRegex.test(value));
  }

  function handleDateChange(event) {
    const value = event.target.value;
    setDate(value);
    setDateValid(dateRegex.test(value));
  }

  function handleTimeChange(event) {
    const value = event.target.value;
    setTime(value);
    setTimeValid(timeRegex.test(value));
  }

  function handlePickupChange(event) {
    const value = event.target.value;
    setPickup(value);
    setPickupValid(value.trim() !== "");
  }

  function handleDropoffChange(event) {
    const value = event.target.value;
    setDropoff(value);
    setDropoffValid(value.trim() !== "");
  }

  function handlePassengersChange(event) {
    const value = event.target.value;
    setPassengers(value);
    setPassengersValid(Number(value) > 0 && Number(value) <= 10);
  }

  function handleAdditionalInfoChange(event) {
    const value = event.target.value;
    setAdditionalInfo(value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const isFormValid =
      nameValid &&
      phoneValid &&
      emailValid &&
      dateValid &&
      timeValid &&
      pickupValid &&
      dropoffValid &&
      passengersValid;
    if (isFormValid) {
      setShowConfirmation(true);
    }
  }

  function handleReset() {
    setName(defaultValues.name);
    setPhone(defaultValues.phone);
    setEmail(defaultValues.email);
    setDate(defaultValues.date);
    setTime(defaultValues.time);
    setPickup(defaultValues.pickup);
    setDropoff(defaultValues.dropoff);
    setPassengers(defaultValues.passengers);
    setAdditionalInfo(defaultValues.additionalInfo);
    setNameValid(false);
    setPhoneValid(false);
    setEmailValid(false);
    setDateValid(false);
    setTimeValid(false);
    setPickupValid(false);
    setDropoffValid(false);
    setPassengersValid(false);

    setShowConfirmation(false);
  }

  return (
    <div className="tfix">
      <div
        className={`form-container my-5 ${
          props.mode === "dark" ? "white-text" : ""
        }`}
      >
        {showConfirmation ? (
          <Confo
            name={name}
            phone={phone}
            email={email}
            date={date}
            time={time}
            pickup={pickup}
            dropoff={dropoff}
            passengers={passengers}
            additionalInfo={additionalInfo}
            handleReset={handleReset}
          />
        ) : (
          <form
            className="form "
            onSubmit={handleSubmit}
            style={{ margin: "0", padding: "15px" }}
          >
            <h2>Make a Reservation</h2>
            <div className="row">
              <div className="col-6">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={handleNameChange}
                  required
                />
                {nameValid ? null : (
                  <p className="error-message">Please enter a valid name.</p>
                )}{" "}
              </div>
              <div className="col-6 ">
                <label htmlFor="phone">Phone Number:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={handlePhoneChange}
                  required
                />
                {phoneValid ? null : (
                  <p className="error-message">
                    Please enter a valid phone number.
                  </p>
                )}{" "}
              </div>
              <div className="col-6">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                {emailValid ? null : (
                  <p className="error-message">
                    Please enter a valid email address.
                  </p>
                )}{" "}
              </div>
              <div className="col-6">
                <label htmlFor="date">Date:</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={date}
                  onChange={handleDateChange}
                  required
                />
                {dateValid ? null : (
                  <p className="error-message">
                    Please enter a valid date (yyyy-mm-dd).
                  </p>
                )}{" "}
              </div>
              <div className="col-6">
                <label htmlFor="time">Time:</label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={time}
                  onChange={handleTimeChange}
                  required
                />
                {timeValid ? null : (
                  <p className="error-message">
                    Please enter a valid time (hh:mm).
                  </p>
                )}{" "}
              </div>
              <div className="col-6">
                <label htmlFor="pickup">Pickup Location:</label>
                <input
                  type="text"
                  id="pickup"
                  name="pickup"
                  value={pickup}
                  onChange={handlePickupChange}
                  required
                />
                {pickupValid ? null : (
                  <p className="error-message">
                    Please enter a pickup location.
                  </p>
                )}{" "}
              </div>
              <div className="col-6">
                <label htmlFor="dropoff">Dropoff Location:</label>
                <input
                  type="text"
                  id="dropoff"
                  name="dropoff
            "
                  value={dropoff}
                  onChange={handleDropoffChange}
                  required
                />
                {dropoffValid ? null : (
                  <p className="error-message">
                    Please enter a dropoff location.
                  </p>
                )}{" "}
              </div>
              <div className="col-6">
                <label htmlFor="passengers">Number of Passengers:</label>
                <input
                  type="number"
                  id="passengers"
                  name="passengers"
                  value={passengers}
                  onChange={handlePassengersChange}
                  required
                />
                {passengersValid ? null : (
                  <p className="error-message">
                    Please enter the number of passengers (1-6).
                  </p>
                )}{" "}
              </div>
              <label htmlFor="additionalInfo">Additional Information:</label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                value={additionalInfo}
                onChange={handleAdditionalInfoChange}
              />
              <button type="submit" className="btn btn-dark">
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
