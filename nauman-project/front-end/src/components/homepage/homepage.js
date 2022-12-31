import React from "react";
import "./homepage.css";

const Homepage = ({ setLoginUser }) => {
  return (
    <div className="homepage">
      {/* <h1>Hello Homepage</h1> */}

      <div class="container">
        <div class="title">CREATE CERTIFICATE</div>
        <div class="user__details">
          <div class="input__box">
            <span class="details">First Name*</span>
            <input type="text" placeholder="E.g: Nauman" required />
          </div>
          <div class="input__box">
            <span class="details">Last Name*</span>
            <input type="text" placeholder="Ahmed" required />
          </div>
          <div class="input__box">
            <span class="details">Batch ID*</span>
            <input type="email" placeholder="nauman@gmail.com" required />
          </div>
          <div class="input__box">
            <span class="details">University*</span>
            <input type="text" placeholder="Hamdard University" required />
          </div>
          <div class="input__box">
            <span class="details">Date</span>
            <input type="date" required />
          </div>
          <div class="input__box">
            <span class="details">Certificate For *</span>
            <input type="text" placeholder="taimoor" required />
          </div>
        </div>
      </div>
      <div className="button">Create</div>
      <div className="button" onClick={() => setLoginUser({})}>
        Logout
      </div>
    </div>
  );
};

export default Homepage;
