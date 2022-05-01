import React from "react";
import "../css/footer.css";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsYoutube,
  BsTwitter,
} from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <ul className="firstcolumn">
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Events</li>
          <li>Plans</li>
        </ul>
        <ul className="secondcolumn">
          <li>
            <a href="/terms">Terms of Use</a>
          </li>
          <li>
            <a href="/privacy">Privacy Policy</a>
          </li>
          {/* <Link to="/faq"> */}
          <li>
            <a href="/faq">FAQ</a>
          </li>
          {/* </Link> */}
          <li>Help</li>
        </ul>
        <ul className="thirdcolumn">
          <li>
            <input
              type="text"
              className="fp-footerinput"
              placeholder=" Your email address"
            />
            <button className="fp-footerbtn" type="submit">
              SUBSCRIBE
            </button>
          </li>

          <li>Subscribing to SpeakerOre unlocks unlimited events. </li>
          <li className="fc10">
            <span>
              <a href="https://www.facebook.com/speakerore">
                <BsFacebook />
              </a>
            </span>
            <span>
              <a href="https://www.instagram.com/speakerore/">
                <BsInstagram />
              </a>
            </span>
            <span>
              <a href="https://www.linkedin.com/in/speakerore/">
                <BsLinkedin />
              </a>{" "}
            </span>
            <span>
              <a href="https://twitter.com/speakerore">
                <BsTwitter />
              </a>
            </span>
          </li>
          <li>Social Handles</li>
        </ul>
      </div>
      <p className="copyright-line">Copyright &copy; 2021 SpeakerOre</p>
    </>
  );
}
