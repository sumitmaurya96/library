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
      <Navbar {...props} apiLink={props.apiLink} logOut={props.logOut} />

      <div
        className="text-center"
        style={{
          backgroundImage: `url(${LibraryStaff})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          height: "400px",
        }}
      >
        <div
          className="d-flex justify-content-center"
          style={{ width: "100%", height: "100%" }}
        >
          <h1
            className="text-light align-self-center"
            style={{ fontSize: "60px", fontFamily: "cursive" }}
          >
            Together we can do great thing
          </h1>
        </div>
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
            Here We Go...
          </h1>
        </Typist>
        <p className="text-muted" style={{ fontSize: "20px" }}>
          Introducing you to our team
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
        <a
          className="btn btn-lg btn-danger"
          href="http://www.jaduniv.edu.in/library.php"
          target="_blank"
        >
          Know More
        </a>
      </div>
      <Footer />
    </div>
  );
}
