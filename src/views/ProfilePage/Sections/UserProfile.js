import React from "react";

//Images
import ProfilePic from "assets/img/faces/kendall.jpg";
import Favourites from "./Favourites";

export default function ProfilePage(props) {
  const { cardNumber, name } = props;

  return (
    <React.Fragment>
      <div className="row" style={{ marginBottom: "0" }}>
        <div
          className="col-md-3 offset-md-2 text-center"
          style={{ marginBottom: "0" }}
        >
          <img
            src={ProfilePic}
            className="rounded-circle pt-2"
            width="140"
            height="140"
          />
          <br />
          <button className="m-2 btn btn-sm btn-outline-secondary">
            Update Photo
          </button>
        </div>
        <div className="d-inline-block col-md-6 d-flex">
          <div className="align-self-center mx-auto">
            <p className="h3">{name}</p>
          </div>
        </div>
      </div>
      <div className="row py-4 px-5" style={{ marginBottom: "0" }}>
        <div className="col-md-4 text-center">
          <p className="h3 text-muted">Favourites</p>
          <button
            className="btn btn-sm btn-outline-danger rounded-circle p-2"
            style={{ width: "70px", height: "70px" }}
          >
            <p className="h5">189</p>
            <p className="mt-n2" style={{ fontSize: "16px" }}>
              Books
            </p>
          </button>
        </div>
        <div className="col-md-4 text-center">
          <p className="h3 text-muted">Card Used</p>
          <button
            className="btn btn-sm btn-outline-danger rounded-circle p-2"
            style={{ width: "70px", height: "70px" }}
          >
            <p className="h5">3</p>
            <p className="mt-n2" style={{ fontSize: "16px" }}>
              Cards
            </p>
          </button>
        </div>
        <div className="col-md-4 text-center">
          <p className="h3 text-muted">Due Books</p>
          <button
            className="btn btn-sm btn-outline-danger rounded-circle p-2"
            style={{ width: "70px", height: "70px" }}
          >
            <p className="h5">3</p>
            <p className="mt-n2" style={{ fontSize: "16px" }}>
              Books
            </p>
          </button>
        </div>
      </div>
      <div className="row py-5 px-2 bg-info">
        <div className="col-md-4 text-center">
          <p className="h3 text-muted">Account</p>
        </div>
        <div className="col-md-8 py-1 px-2">
          <div className="row" style={{ margin: "0" }}>
            <div className="col-md-12 d-flex">
              <div className="w-100">
                <p className="d-inline">Card Number:</p>
              </div>
              <div className="d-inline w-100">
                <p className="h5 d-inline">{cardNumber}</p>
              </div>
            </div>
          </div>
          <div className="row" style={{ margin: "0" }}>
            <div className="col-md-12 d-flex">
              <div className="w-100">
                <p className="d-inline">Password:</p>
              </div>
              <div className="d-inline w-100">
                <a className="text-dark" href="#">
                  Change Password
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Favourites />
      {/* <hr className="bg-info p-0" style={{ width: "70%" }} />
      <div className="row px-2 py-5">
        <div className="col-md-12 text-center">
          <button className="btn btn-sm btn-outline-danger">Log Out</button>
        </div>
      </div> */}
    </React.Fragment>
  );
}
