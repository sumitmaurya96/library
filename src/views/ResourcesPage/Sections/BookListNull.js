import React from "react";
//import "./bookList.css";

//react-scroll
import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

//Icons
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

//sections
import Book from "./Book";

const BookList = (props) => {
  const bookData = {
    ISBN: "2345",
    Title: "BBC Dune",
    Type: "Story",
    Authors: "Frank Herbert",
    Copies: 40,
  };

  const [views, setViews] = React.useState({ sroll: 0 });
  const myRef = React.createRef();

  const scrollList = (arg) => {
    const toScroll = Math.floor((myRef.current.offsetWidth * 5) / 6);
    const maxScrollWidth =
      myRef.current.scrollWidth - myRef.current.offsetLeft * 2 - toScroll;

    // console.log(toScroll);
    // console.log(maxScrollWidth);
    // console.log(views.sroll);

    if (arg === 0 && views.sroll > 0) {
      setViews((prevState) => {
        const Views = { ...prevState };
        Views.sroll -= toScroll;
        if (Views.sroll < 0) Views.sroll = 0;
        myRef.current.scrollLeft = Views.sroll;
        return Views;
      });
    } else if (arg === 1 && views.sroll < maxScrollWidth) {
      setViews((prevState) => {
        const Views = { ...prevState };
        Views.sroll += toScroll;
        if (Views.sroll > maxScrollWidth) Views.sroll = maxScrollWidth;
        myRef.current.scrollLeft = Views.sroll;
        return Views;
      });
    }
  };

  return (
    <div className="jumbotron py-4" style={{ marginBottom: "0px" }}>
      <div style={{ paddingLeft: "70px" }}>
        <p className="h1">{props.listLabel}</p>
      </div>
      <div className="d-flex" style={{ marginBottom: "0px" }}>
        <a
          className="display-inline-block align-self-center"
          onClick={() => {
            scrollList(0);
          }}
        >
          <MdKeyboardArrowLeft size="60px" />
          <span className="sr-only">Previous</span>
        </a>
        <div
          className="py-2 border border-secondary rounded d-flex"
          style={{
            overflowX: "hidden",
            //whiteSpace: "nowrap",
            marginBottom: "0px",
            width: "100%",
            // zIndex: "-1",
            // transform: `translateX(-${views.sroll}px)`,
            // transition: "1s",
          }}
          ref={myRef}
        >
          <Book {...bookData} />
          <Book {...bookData} />
          <Book {...bookData} />
          <Book {...bookData} />
          <Book {...bookData} />
          <Book {...bookData} />
          <Book {...bookData} />
          <Book {...bookData} />
          <Book {...bookData} />
          <Book {...bookData} />
          <Book {...bookData} />
          <Book {...bookData} />
        </div>
        <a
          className="display-inline-block align-self-center"
          onClick={() => {
            scrollList(1);
          }}
        >
          <MdKeyboardArrowRight size="60px" />
          <span className="sr-only">/Next</span>
        </a>
      </div>
    </div>
  );
};

export default BookList;
