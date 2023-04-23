import React from "react";
import "./homest.css";
import airport from "./airport_transfer.jpg";
import baby from "./baby_capsule.jpg";
import wed from "./wedding_transport.jpg";

export default function Home(props) {
  return (
    <div
      className={`container ${props.mode === "dark" ? "white-text" : ""} tfix`}
    >
      <h1 className="my-5">Welcome to our taxi service!</h1>
      <p>
        We provide safe, reliable, and affordable transportation services to
        customers throughout the area.
      </p>
      <p>
        Whether you need a ride to the airport, a business meeting, or a night
        out on the town, we have you covered.
      </p>
      <p> 
        Please use our inquiry form to book your ride or contact us if you have
        any questions.
      </p>

      <section className="first">
        <div className="container">
          <div
            className="headtag"
            style={{ textAlign: "left", fontWeight: "500" }}
          >
            <h1>RELIABLE, FLEXIBLE TAXI SERVICES – RideQuest</h1>
            <i className="border"></i>
          </div>
          <p>
            Ride Quest is a professional group of individual taxi drivers in
            Greater Perth. We provide premium taxi charter services, taking
            pride in treating our customers with great care and respect. We are
            not a dispatch company, we provide personalized taxi charter
            passenger pick up and drop off service. We charge the official
            metered tariffs if you are travelling a little far distance but if
            you need a taxi service for a short distance, we charge a little
            extra because we will be providing you a guaranteed pick-up service.
            We will give you full peace of mind that your taxi driver will
            definitely arrive. We try our 100 percent best to arrive on time,
            but sometimes delay can happen due to road closures, tunnel
            closures, accidents, etc. Therefore, please allow yourself a little
            extra time, and if your driver is even one minute late, please give
            us a call back, and we can provide you with a live update of your
            taxi. Our taxi fleet is large and diverse, ranging from normal cabs
            such as sedans and station wagons to 7 seater Taragos, 8 seater, 9
            seater taxi van, and 10 seater bus taxi or 13-seater maxi taxis.
            Efficient group transfers, Perth airport transfers, and wheelchair
            taxis are some of our specialties. All our taxis are fully insured
            and meet all government regulations. Ride Quest's drivers are all
            police cleared, courteous, and highly experienced safe drivers. You
            can book a taxi in Perth 24/7 via our website, and we will send you
            an email with a price mentioned. Perth airport taxi pick-up and
            drop-off service and wedding transport is one of our favorite
            activities, which keeps us very busy throughout the year. We are
            very famous because of our excellent airport taxi service.
          </p>
        </div>
      </section>

      <div id="heading1" className="my-5">
        <h2>Our Services</h2>
        <i className="border"></i>
      </div>

      <div className="container-fluid">
        <div className="row my-4">
          <div className="col-md-6">
            <img src={airport} alt="" className="imgadj" />
          </div>
          <div className="col-md-6">
            <div className="service-desc">
              <h3>Airport Transfers</h3>
              <p>
                We offer reliable and efficient airport transfer services to and
                from all major airports in the area. Our drivers will pick you
                up from your home, office or hotel and drop you off at the
                airport on time for your flight. We also provide meet and greet
                services for our clients.
              </p>
            </div>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-md-6 order-md-2">
            <img src={baby} alt="" className="imgadj" />
          </div>
          <div className="col-md-6 order-md-1">
            <div className="service-desc">
              <h3>Baby Capsule Service</h3>
              <p>
                We offer a baby capsule service for families with young
                children. Our drivers will ensure that your child is safely
                secured in a baby capsule during the journey. Please let us know
                in advance if you require this service.
              </p>
            </div>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-md-6">
            <img src={wed} alt="" className="imgadj" />
          </div>
          <div className="col-md-6">
            <div className="service-desc">
              <h3>Wedding Transport</h3>
              <p>
                We provide luxury wedding transport services for your special
                day. Our fleet of high-end cars and experienced drivers will
                ensure that you arrive at your wedding venue in style and
                comfort.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
