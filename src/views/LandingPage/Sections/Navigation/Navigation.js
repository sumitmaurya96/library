import React from "react";

//Images
import Background from "assets/img/navigation-bg.jpg";
// import Book from "./Book";

//CSS
// import "./tableStyle.css";

//Icons
import { AiFillAudio } from "react-icons/ai";
import { MdPeople } from "react-icons/md";
import { GiCrossbow } from "react-icons/gi";

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
          <button className="btn btn-outline-light">
            <AiFillAudio size="100px" />
          </button>
          <p className="h2 pt-4 mb-4">Ask a Librarin</p>
        </div>
        <div className="col-sm-4">
          <button className="btn btn-outline-light">
            <GiCrossbow size="100px" />
          </button>
          <p className="h2 pt-4 mb-4">Innovation</p>
        </div>
        <div className="col-sm-4">
          <button className="btn btn-outline-light">
            <MdPeople size="100px" />
          </button>
          <p className="h2 pt-4">Join the Library</p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
