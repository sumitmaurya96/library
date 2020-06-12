import React from "react";
import Typist from "react-typist";
import Navbar from "views/Components/Navbar/Navbar";
import Footer from "views/Components/Footer/Footer";

//Sections
import Carousel from "./Sections/Carousel/Carousel";
import Navigation from "./Sections/Navigation/Navigation";
import AskALibrarian from "./Sections/AskALibrarian/AskALibrarian";

//CSS
import "./Sections/Style/landingPageStyle.css";

//Images
import Slide1 from "assets/img/slideshow/slide4.1.jpg";
import Slide2 from "assets/img/slideshow/slide5.1.jpg";
import Slide3 from "assets/img/slideshow/slide6.1.jpg";

const LandingPage = (props) => {
  const { apiLink } = props;

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

  const [showAskLibrarian, setShowAskALibrarian] = React.useState(false);

  const hideAskALibrarian = () => {
    setShowAskALibrarian(false);
  };

  const handleNavigationButtonClick = (buttonName) => {
    if ("askLibrarian" === buttonName) {
      setShowAskALibrarian(true);
    } else if ("timing" === buttonName) {
      props.history.push({
        pathname: "/about",
        search: buttonName,
        state: true,
      });
    } else if ("services" === buttonName) {
      props.history.push({
        pathname: "/services",
        state: true,
      });
    }
  };

  return (
    <div>
      <Navbar
        {...props}
        user={props.user}
        apiLink={apiLink}
        logOut={props.logOut}
      />
      {showAskLibrarian ? (
        <AskALibrarian apiLink={apiLink} goBack={hideAskALibrarian} />
      ) : (
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
          <div className="py-5 px-4">
            <p className="h1 text-center pt-5 pb-2 text-danger">
              We have a huge book collection
            </p>
            <p className="h6 text-muted pb-5 pt-2 text-center">
              we have several categories such as magazines, story, novel etc.
              you can find online book pdf and can download it.
            </p>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default LandingPage;
