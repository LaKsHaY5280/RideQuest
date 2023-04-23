import React from "react";
import "./Aboutussty.css";
import abus from "./abus.png";

export default function Aboutus(props) {
  return (
    <div className="tfix" >
      <div
        className={` my-5 ${props.mode === "dark" ? "white-text" : ""} `}
      >
        <div className="container my-5">
          <h2 className="text-center mb-4">About Us</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <img src={abus} alt="About Us" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <h3>Who We Are</h3>
              <p>
                We are a company dedicated to providing the best products and
                services to our customers. Our team of experts is committed to
                delivering high-quality solutions that meet the unique needs of
                each client.
              </p>

              <h3>What We Do</h3>
              <p>
                Our mission is to exceed our customers' expectations by
                providing exceptional service and delivering innovative
                solutions that add value to their businesses. We are constantly
                exploring new technologies and techniques to improve our
                offerings and stay ahead of the competition.
              </p>

              <h3>Why Choose Us</h3>
              <p>
                We take pride in our work and are passionate about helping our
                customers succeed. With years of experience and a commitment to
                excellence, we are confident that we can meet and exceed your
                expectations. Contact us today to learn more about how we can
                help you grow your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
