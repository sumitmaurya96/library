import React from "react";

//Images
import Background from "assets/img/navigation-bg.jpg";
// import Book from "./Book";

//CSS
// import "./tableStyle.css";

//Icons
import { AiFillAudio } from "react-icons/ai";
import { MdAccessTime } from "react-icons/md";
import { FaServicestack } from "react-icons/fa";

const Navigation = (props) => {
  return (
    <div
      id="myTable"
      className="jumbotron-fluid p-5"
      style={{
        paddingBottom: "0px",
        backgroundImage: `url(${Background})`,
      }}
    >
      <div className="row text-light">
        <div className="col-sm-4">
          <button
            className="btn btn-outline-light"
            onClick={() => props.handleNavigationClick("askLibrarian")}
          >
            <AiFillAudio size="100px" />
          </button>
          <p className="h2 pt-4 mb-4">Ask a Librarin</p>
        </div>
        <div className="col-sm-4">
          <button
            className="btn btn-outline-light"
            onClick={() => props.handleNavigationClick("services")}
          >
            <FaServicestack size="100px" />
          </button>
          <p className="h2 pt-4 mb-4">Library Services</p>
        </div>
        <div className="col-sm-4">
          <button
            className="btn btn-outline-light"
            onClick={() => props.handleNavigationClick("timing")}
          >
            <MdAccessTime size="100px" />
          </button>
          <p className="h2 pt-4">Library Timing</p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
