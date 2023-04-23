import React, { useState } from "react";
import Home from "./Home";
import Form from "./Form";
import Fares from "./Fares";
import Aboutus from "./Aboutus";
import Contactus from "./Contactus";
import "./combcomp.css";

export default function Combcomp(props) {
  const [theme] = useState("light");

  return (
    <div className={` my-5 ${props.mode === "dark" ? "white-text" : ""}`}>
      <div>
        <Home mode={theme} />
        <Form mode={theme} />
        <Fares mode={theme} />
        <Aboutus mode={theme} />
        <Contactus mode={theme} />
      </div>
    </div>
  );
}
