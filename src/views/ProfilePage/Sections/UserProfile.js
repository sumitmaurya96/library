import React from "react";

//Roles
import { student } from "Helpers/Roles";

export default function ProfilePage(props) {
  const {
    id,
    firstname,
    lastname,
    username,
    email,
    role,
    profilePicUrl,
  } = props.userData;

  return (
    <React.Fragment>
      <div
        className="row"
        style={{ marginBottom: "0", boxSizing: "border-box", width: "100vw" }}
      >
        <div
          className="col-md-3 offset-md-2 text-center"
          style={{ marginBottom: "0" }}
        >
          <img
            src={`http://localhost:5000${profilePicUrl}`}
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
            <p className="h3">{`${firstname} ${lastname}`}</p>
          </div>
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
                <p className="d-inline">
                  {role === student ? "Card Number:" : "Username"}
                </p>
              </div>
              <div className="d-inline w-100">
                <p className="h5 d-inline">{username}</p>
              </div>
            </div>
          </div>
          <div className="row" style={{ margin: "0" }}>
            <div className="col-md-12 d-flex">
              <div className="w-100">
                <p className="d-inline">Email:</p>
              </div>
              <div className="d-inline w-100">
                <p className="h5 d-inline">{email}</p>
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
    </React.Fragment>
  );
}
