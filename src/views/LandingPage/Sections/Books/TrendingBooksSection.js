import React from "react";

import Book from "./Book";

//CSS
import "./tableStyle.css";

const TrendingBooksSection = (props) => {
  const TrendingBooks = props.trendingBooks;
  let trendingBooks = {
    Magazine: [],
    Story: [],
    Journal: [],
    Departmental: [],
  };

  for (let i = 0; i < TrendingBooks.length; i++) {
    const book = TrendingBooks[i];
    if ("Magazines".localeCompare(book.categories) === 0) {
      trendingBooks.Magazine.push(book);
    }
    if ("Story".localeCompare(book.categories) === 0) {
      trendingBooks.Story.push(book);
    }
    if ("Departmental".localeCompare(book.categories) === 0) {
      trendingBooks.Departmental.push(book);
    }
    if ("Journals".localeCompare(book.categories) === 0) {
      trendingBooks.Journal.push(book);
    }
  }

  const onButtonClick = (details) => {
    props.history.push({
      pathname: "/book-details",
      search: `isbn=${details.isbn}`,
      state: { bookDetails: details },
    });
  };

  return (
    <div id="myTable" className="container">
      <div className="row">
        <div className="col-md-3">
          <p className="h3">Magazines</p>
          <ul>
            {trendingBooks.Magazine.map((value, index) => {
              return (
                <li key={index} className="py-2">
                  <Book bookDetails={value} onClick={onButtonClick} />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-md-3">
          <h5 className="h3">Journals</h5>
          <ul>
            {trendingBooks.Journal.map((value, index) => {
              return (
                <li key={index} className="py-2">
                  <Book bookDetails={value} onClick={onButtonClick} />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-md-3">
          <h5 className="h3">Departmental</h5>
          <ul>
            {trendingBooks.Departmental.map((value, index) => {
              return (
                <li key={index} className="py-2">
                  <Book bookDetails={value} onClick={onButtonClick} />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-md-3">
          <h5 className="h3">Stories</h5>
          <ul>
            {trendingBooks.Story.map((value, index) => {
              return (
                <li key={index} className="py-2">
                  <Book bookDetails={value} onClick={onButtonClick} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TrendingBooksSection;
