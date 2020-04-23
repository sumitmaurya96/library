import React from "react";

//Books
import Book1 from "assets/img/book-cover/bbcdune.jpg";

const Book = (props) => {
  const { bookName, author } = props;
  return (
    <div
      className="bg-warning card text-center p-2"
      style={{ width: "14rem", border: "0px", backgroundColor: "inherit" }}
    >
      <div className="d-inline">
        <img
          style={{ width: "140px", height: "200px" }}
          className=""
          src={Book1}
          alt="Book Caption"
        />
      </div>
      <div className="p-1" style={{ fontSize: "12px" }}>
        <p className="text-light">{bookName}</p>
        <p className="text-light">{author}</p>
      </div>
    </div>
  );
};

export default Book;
