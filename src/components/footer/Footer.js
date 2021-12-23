import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div class="footer">
      <div className="footer-container">
        <div class="infoCompany">
          <img src={require("./images/logo.png")} />
          <p>
            Your destination for all things real-estate, find
            <br /> your ideal home, next investment, or sell with
            <br /> ease.
          </p>
          <a href="#privac">Privacy & Policy</a>
          <div class="language">
            <label for="cars">Language</label>
            <select id="cars">
              <option value="english">English</option>
              <option value="spain">Arabic</option>
              <option value="kurdish">Kurdish</option>
            </select>
          </div>

          <hr />

          <div className="getEmail">
            <form method="POST">
              <input
                className="email-notfy"
                placeholder="Get email notification"
              />
              <button> SIGN UP</button>
            </form>
          </div>
        </div>
        <div class="Links">
          <ul>
            <b>Links</b>
            <li className="first-child">Add Property</li>
            <li>Find Property</li>
            <li>Log in</li>
            <li>Go Premium</li>
            <li>Auction</li>
            <li>Projects</li>
            <li>Currency</li>
          </ul>
        </div>
        <div class="company">
          <ul>
            <b>Company</b>
            <li className="first-child">About</li>
            <li>Terms of use</li>
            <li>FAQ</li>
            <li>Contact us</li>
            <li>Help & Support</li>
            <li>What's new</li>
          </ul>
          <ul class="social-media">
            <li>
              <i class="fab fa-facebook-f"></i>
            </li>
            <li>
              <i class="fab fa-instagram"></i>
            </li>
            <li>
              <i class="fab fa-twitter"></i>
            </li>
          </ul>
        </div>
        <div class="image">
          <img src={require("./images/Coding.png")} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
