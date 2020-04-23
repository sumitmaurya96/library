import React from "react";

//Books
import Book1 from "assets/img/librarian/kms.png";

const Book = (props) => {
  const { email, name, phone, about } = props;
  return (
    <div
      className="m-2 border border-danger pt-4"
      style={{ width: "18rem", border: "0px", backgroundColor: "inherit" }}
    >
      <img
        className="rounded"
        src={Book1}
        alt="Book Caption"
        width="140px"
        height="190px"
      />
      <div className="p-3">
        <h5 className="text-dark">{name}</h5>
        <p className="text-muted">{about}</p>
        <p className="text-muted">{phone}</p>
        <p className="text-muted">{email}</p>
        <button
          className="btn btn-outline-danger"
          style={{ borderRadius: "20px" }}
        >
          View Profile
        </button>
      </div>
    </div>
  );
};

export default Book;
