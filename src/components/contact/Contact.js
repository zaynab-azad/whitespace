import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div class="contact">
      <div class="text">
        <h2>
          Contact us and
          <br />
          Rregister your bussiness now
        </h2>

        <p>Register your business with Karasan, and get new leads</p>
        <button>contact us</button>
      </div>
      <div class="image">
        <img src={require(`./image/Delivery.png`)} />
      </div>
    </div>
  );
};

export default Contact;
