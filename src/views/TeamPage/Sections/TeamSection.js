import React from "react";

import "views/LandingPage/Sections/Style/landingPageStyle.css";

import teamMembers from "./teamData";
import Member from "./Member";

const TeamSection = (props) => {
  const populateList = () => {
    const outerDiv = [];
    let innerDiv = [];
    for (let i = 0; i < teamMembers.length; ) {
      for (let j = 0; j < 4 && i < teamMembers.length; j++, i++) {
        innerDiv.push(
          <div key={i} className="col-xl-3">
            <Member {...teamMembers[i]} />
          </div>
        );
      }

      outerDiv.push(
        <div key={-i} className="row">
          {innerDiv}
        </div>
      );
      innerDiv = [];
    }
    return outerDiv;
  };

  return (
    <div
      className="jumbotron text-center m-0 pt-0"
      style={{ borderRadius: "0px" }}
    >
      <hr className="hr-text p-4" data-content="Our Team" />
      {populateList().length !== 0 && populateList()}
    </div>
  );
};

export default TeamSection;
