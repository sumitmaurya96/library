import React from "react";

//Image
import BookImage from "assets/img/app/books.svg";

function LibraryCard(props) {
  return (
    <div
      className="card"
      style={{
        backgroundColor: "#3D5884",
        color: "white",
        width: "18rem",
      }}
    >
      <div className="w-100 bg-dark">
        <img src={BookImage} className="p-1" width="70" height="100" />
      </div>
      <div className="card-body">
        <div className="card-title">
          {props.cardNumber}/{props.cardNumber}
        </div>
        <hr className="bg-dark" style={{ width: "80%" }} />
        <div className="text-light" style={{ fontSize: "12px" }}>
          <div className="row" style={{ margin: "0" }}>
            <div className="col-md-12 d-flex">
              <div className="w-100">
                <p className="d-inline">Title:</p>
              </div>
              <div className="d-inline w-100">
                <p className="text-info">{props.bookName}</p>
              </div>
            </div>
          </div>
          <div className="row" style={{ margin: "0" }}>
            <div className="col-md-12 d-flex">
              <div className="w-100">
                <p className="d-inline">Author:</p>
              </div>
              <div className="d-inline w-100">
                <p className="text-info">{props.author}</p>
              </div>
            </div>
          </div>
          <div className="row" style={{ margin: "0" }}>
            <div className="col-md-12 d-flex">
              <div className="w-100">
                <p className="d-inline">Issue Date:</p>
              </div>
              <div className="d-inline w-100">
                <p className="text-info">{props.issueDate}</p>
              </div>
            </div>
          </div>
          <div className="row" style={{ margin: "0" }}>
            <div className="col-md-12 d-flex">
              <div className="w-100">
                <p className="d-inline">Submission Date:</p>
              </div>
              <div className="d-inline w-100">
                <p className="text-info">{props.submissionDate}</p>
              </div>
            </div>
          </div>
          {/*<div className="row" style={{ margin: "0" }}>
            <div className="col-md-12 d-flex">
              <div className="w-100">
                <p className="d-inline">Accession No:</p>
              </div>
              <div className="d-inline w-100">
                <p className="text-info">{props.accNum}</p>
              </div>
            </div>
          </div>
          <div className="row" style={{ margin: "0" }}>
            <div className="col-md-12 d-flex">
              <div className="w-100">
                <p className="d-inline">Card Number:</p>
              </div>
              <div className="d-inline w-100">
                <p className="text-info">{props.cardNumber}</p>
              </div>
            </div>
          </div>
          <div className="row" style={{ margin: "0" }}>
            <div className="col-md-12 d-flex">
              <div className="w-100">
                <p className="d-inline">Department:</p>
              </div>
              <div className="d-inline w-100">
                <p className="text-info">{props.department}</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default LibraryCard;
