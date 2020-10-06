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
                <a href="http://www.jaduniv.edu.in/" target="_blank">
                  Home
                </a>
              </li>
              <li>
                <a href="http://www.jaduniv.edu.in/" target="_blank">
                  Login
                </a>
              </li>
              <li>
                <a href="http://www.jaduniv.edu.in/s" target="_blank">
                  Downloads
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5>About us</h5>
            <ul>
              <li>
                <a href="http://www.jaduniv.edu.in/" target="_blank">
                  Jadavpur University
                </a>
              </li>
              <li>
                <a href="http://www.jaduniv.edu.in/" target="_blank">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#">Feedback</a>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5>Information</h5>
            <ul>
              <li>
                <a href="http://www.jaduniv.edu.in/" target="_blank">
                  JUMS
                </a>
              </li>
              <li>
                <a href="http://www.jaduniv.edu.in/" target="_blank">
                  Notice
                </a>
              </li>
              {/* <li>
                <a href="#">JU Library</a>
              </li> */}
            </ul>
          </div>
          <div className="col-md-3">
            <div className="social-networks">
              <a
                href="http://www.jaduniv.edu.in/"
                className="twitter"
                target="_blank"
              >
                <TiSocialTwitter />
              </a>
              <a
                href="http://www.jaduniv.edu.in/"
                className="facebook"
                target="_blank"
              >
                <TiSocialFacebook />
              </a>
              <a
                href="http://www.jaduniv.edu.in/"
                className="google"
                target="_blank"
              >
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
