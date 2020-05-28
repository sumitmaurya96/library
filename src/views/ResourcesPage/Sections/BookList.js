import React from "react";

//CSS
//import "./bookList.css";

// Componnet
import Book from "./Book";

const BookList = (props) => {
  const { data } = props;

  const onButtonClick = (details) => {
    props.bookDetailsVisible(details);
  };

  const populateGrid = () => {
    const rows = [];
    let col = [];

    data.map((value, index) => {
      col.push(
        <div key={index} className="col-md-3">
          <Book
            key={index}
            bookDetails={value.book}
            onClick={() => onButtonClick(value.book)}
          />
        </div>
      );

      if ((index + 1) % 4 === 0 || data.length === index + 1) {
        rows.push(
          <div key={index} className="row">
            {col}
          </div>
        );
        col = [];
      }
    });

    return rows;
  };

  return (
    <div className="container">
      {data.length ? (
        populateGrid()
      ) : (
        <div
          className="d-flex justify-content-center"
          style={{ height: "60vh" }}
        >
          <p className="text-muted align-self-center h3">No data found</p>
        </div>
      )}
    </div>
  );
};

export default BookList;
