import React from "react";

//Books
import Book1 from "assets/img/book-cover/bbcdune.jpg";

const Book = (props) => {
  const { Title, Authors, Type, Copies, ISBN } = props;
  return (
    <div
      className="text-center"
      style={{
        width: "16rem",
        border: "0px",
        backgroundColor: "inherit",
        display: "inline-block",
        flexShrink: "0",
      }}
    >
      <img
        className="rounded"
        src={Book1}
        alt="Book Caption"
        width="140px"
        height="190px"
      />
      <div className="p-3">
        <h5 className="text-dark">{Title}</h5>
        <p className="text-muted">{Authors}</p>
        <button
          className="btn btn-outline-danger"
          style={{ borderRadius: "20px" }}
        >
          View
        </button>
      </div>
    </div>
  );
};

export default Book;
