import React from "react";
import Typist from "react-typist";
import Navbar from "views/Components/Navbar/Navbar";
import Footer from "views/Components/Footer/Footer";

//Sections
import Carousel from "./Sections/Carousel/Carousel";
import TrendingBooksSection from "./Sections/Books/TrendingBooksSection";
import Navigation from "./Sections/Navigation/Navigation";

//CSS
import "./Sections/Style/landingPageStyle.css";

//Icons
import { FaBook } from "react-icons/fa";

//Images
import Slide1 from "assets/img/slideshow/slide4.1.jpg";
import Slide2 from "assets/img/slideshow/slide5.1.jpg";
import Slide3 from "assets/img/slideshow/slide6.1.jpg";

//Database
import trendingBooks from "views/virtualDB/books/trendingBooks";

const LandingPage = (props) => {
  const slideData = [
    {
      index: 0,
      id: 1,
      src: Slide1,
      heading: "Jadavpur University Library",
      subHeading:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      index: 0,
      id: 2,
      src: Slide2,
      heading: "You can learn anything",
      subHeading:
        "There are many variations of passages of Lorem Ipsum available.",
    },
    {
      index: 0,
      id: 3,
      src: Slide3,
      heading: "You have to know one thing",
      subHeading:
        "But I must explain to you how all this mistaken idea of denouncing pleasure.",
    },
  ];

  const handleNavigationButtonClick = (buttonName) => {
    if ("askLibrarian".localeCompare(buttonName) === 0) {
      props.history.push({
        pathname: "/ask",
      });
    }
    if ("timing".localeCompare(buttonName) === 0) {
      props.history.push({
        pathname: "/about",
        search: buttonName,
      });
    }
    if ("services".localeCompare(buttonName) === 0) {
      props.history.push({
        pathname: "/services",
        search: buttonName,
      });
    }
  };

  return (
    <div>
      <Navbar {...props} />
      <div style={{ marginTop: "0px" }}>
        <Carousel slideData={slideData} />
        <div className="jumbotron bg-light text-center jumbo">
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
        <Navigation handleNavigationClick={handleNavigationButtonClick} />
        <hr className="hr-text py-5" data-content="Trending Books" />
        <TrendingBooksSection trendingBooks={trendingBooks} {...props} />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
