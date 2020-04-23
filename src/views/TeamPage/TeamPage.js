import React from "react";
import Typist from "react-typist";

import LibraryStaff from "assets/img/librarian/library-staff.jpg";

//views
import Footer from "views/Components/Footer/Footer";
import Navbar from "views/Components/Navbar/Navbar";

// Sections for this page
import TeamSection from "./Sections/TeamSection";

export default function AboutPage(props) {
  return (
    <div className="">
      <Navbar {...props} />

      <div
        className="text-center"
        style={{
          backgroundImage: `url(${LibraryStaff})`,
          height: "550px",
          paddingTop: "300px",
          paddingBlock: "240px",
        }}
      >
        <h1
          className="text-light"
          style={{ fontSize: "60px", fontFamily: "cursive" }}
        >
          Together we can do great thing
        </h1>
        <p className="text-light">{"          "} - JU Library Staff</p>
      </div>
      <div
        className="jumbotron text-center"
        style={{ margin: "0px", backgroundColor: "WHITE", borderRadius: "0px" }}
      >
        <Typist cursor={{ show: false }}>
          <h1
            className="text-danger"
            style={{
              fontSize: "7vw",
              textShadow: "0.2vw 0.2vw 0.2vw #00203f",
            }}
          >
            Welcome to the Library
          </h1>
        </Typist>
        <p className="text-muted" style={{ fontSize: "20px" }}>
          Welcome to Jadavpur University Library
        </p>
      </div>

      <TeamSection />
      <div
        className="jumbotron text-center"
        style={{
          marginBottom: "0px",
          backgroundColor: "white",
          borderRadius: "0px",
        }}
      >
        <p className="h3 text-dark py-3">
          Find more information about faculties and staff of Jadavpur University
        </p>
        <button className="btn btn-outline-danger btn-lg">Know More</button>
      </div>
      <Footer />
    </div>
  );
}
