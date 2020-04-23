import React from "react";
import "./Style/footerStyle.css";

//Icons
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialGooglePlus } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";

//Logo
import Logo from "assets/img/app/ju.png";

const Footer = (props) => {
  return (
    <footer id="myFooter">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h2 className="logo">
              <a href="#">
                <img
                  src={Logo}
                  alt="JU Library"
                  width="60px"
                  height="60px"
                  style={{ display: "inline" }}
                />
              </a>
            </h2>
          </div>
          <div className="col-md-2">
            <h5>Get started</h5>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Sign up</a>
              </li>
              <li>
                <a href="#">Downloads</a>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5>About us</h5>
            <ul>
              <li>
                <a href="#">Jadavpur University</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Reviews</a>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5>Support</h5>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Help desk</a>
              </li>
              <li>
                <a href="#">Forums</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <div className="social-networks">
              <a href="#" className="twitter">
                <TiSocialTwitter />
              </a>
              <a href="#" className="facebook">
                <TiSocialFacebook />
              </a>
              <a href="#" className="google">
                <TiSocialGooglePlus />
              </a>
            </div>
            <button type="button" className="btn btn-default">
              Contact us
            </button>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>© {new Date().getFullYear()} Jadavpur University </p>
      </div>
    </footer>
  );
};

export default Footer;
