import React from "react";
import "./carouselStyle.css";

const Carousel = (props) => {
  const slides = props.slideData;

  const [slide, setSlide] = React.useState({ index: 0 });

  const populateSlide = () => {
    const div = [];
    const ol = [];
    slides.forEach((value, index) => {
      ol.push(
        <li
          key={index}
          data-target="#carouselExampleIndicators"
          data-slide-to={index}
          className={slide.index === index ? "active" : ""}
          onClick={() => {
            handleClick(index);
          }}
        ></li>
      );

      div.push(
        <div
          className={`carousel-item ${slide.index === index ? "active" : ""}`}
          key={index}
        >
          <img
            style={{
              width: "100vw",
              height: `${
                220 + ((550 - 220) * (window.innerWidth - 300)) / (1600 - 300)
              }px`,
              objectFit: "cover",
            }}
            className="d-block"
            src={value.src}
            alt="First slide"
          />
          <div
            id="carouselCaption"
            className="carousel-caption d-none d-md-block"
          >
            <h1>{value.heading}</h1>
            <p>{value.subHeading}</p>
            <button className="btn btn-lg btn-danger">Know More</button>
          </div>
        </div>
      );
    });

    return (
      <React.Fragment>
        <ol className="carousel-indicators">{ol}</ol>
        <div className="carousel-inner">{div}</div>
      </React.Fragment>
    );
  };

  const handleClick = (arg) => {
    if (arg !== null)
      setSlide((prevState) => {
        const Slide = { ...prevState };
        if (arg === -1) {
          Slide.index += 1;
        } else if (arg === -2) {
          Slide.index -= 1;
        } else {
          Slide.index = arg;
        }

        Slide.index += slides.length;
        Slide.index %= slides.length;
        return Slide;
      });
  };

  const slideShow = () => {
    setSlide((prevState) => {
      const Slide = { ...prevState };
      Slide.index += 1;
      Slide.index %= slides.length;

      return Slide;
    });
  };

  React.useEffect(() => {
    const timeOut = setInterval(slideShow, 2000);
    return () => {
      clearInterval(timeOut);
    };
  });

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      {populateSlide()}
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
        onClick={() => {
          handleClick(-2);
        }}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
        onClick={() => {
          handleClick(-1);
        }}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
