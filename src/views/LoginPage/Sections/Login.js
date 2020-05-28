import React from "react";

//CSS
import "./login.css";

//icons
import { GoAlert } from "react-icons/go";
import { MdLocalLibrary } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { FaUserInjured } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa";
import { FiLock } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";

//Roles
import { student, librarian, admin, faculty } from "./roles";

const LoginPage = (props) => {
  const { authFaild } = props;

  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
  });

  const [formType, setFormType] = React.useState(student);

  const handleFormType = (formType) => {
    setFormType(formType);
    props.setAuthFaild(false);
    setFormData({
      username: "",
      password: "",
    });
  };

  const handleFormChange = (field, event) => {
    event.persist();
    props.setAuthFaild(false);
    setFormData((state) => {
      const FormData = { ...state };
      FormData[field] = event.target.value;
      return FormData;
    });
  };
  const setFont = () => {
    return 10 + (16 - 10) * ((window.innerWidth - 300) / (1600 - 300));
  };

  return (
    <div className="row py-4">
      <div className="col-md-6 offset-md-3 rounded bg-light shadow-lg">
        <div className="jumbotron bg-light">
          <div className="text-center">
            <p className="h1 text-muted strong">Login</p>
          </div>
          <div className="text-center">
            <ul
              className="nav nav-pills d-inline-block my-3"
              style={{ borderRadius: "4px 4px 0px 0px" }}
            >
              <li className="nav-item d-inline-block border-right">
                <button
                  className={`btn btn-info py-3 px-2 ${
                    formType === student ? "active" : ""
                  }`}
                  href="#"
                  style={{
                    borderRadius: "4px 0px 0px 0px",
                    fontSize: `${setFont()}px`,
                  }}
                  onClick={() => {
                    handleFormType(student);
                  }}
                >
                  <span>
                    <FaUserTie size={`${setFont() + 7}px`} />
                    <span className="p-1">Student</span>
                  </span>
                </button>
              </li>
              <li className="nav-item d-inline-block">
                <button
                  className={`btn btn-info py-3 px-2 ${
                    formType === faculty ? "active" : ""
                  }`}
                  href="#"
                  style={{
                    borderRadius: "0px",
                    fontSize: `${setFont()}px`,
                  }}
                  onClick={() => {
                    handleFormType(faculty);
                  }}
                >
                  <span>
                    <FaUserInjured size={`${setFont() + 7}px`} />
                    <span className="p-1">Faculty</span>
                  </span>
                </button>
              </li>
              <li className="nav-item d-inline-block border-left">
                <button
                  className={`btn btn-info py-3 px-2 ${
                    formType === librarian ? "active" : ""
                  }`}
                  href="#"
                  style={{
                    borderRadius: "0px",
                    fontSize: `${setFont()}px`,
                  }}
                  onClick={() => {
                    handleFormType(librarian);
                  }}
                >
                  <span>
                    <MdLocalLibrary size={`${setFont() + 7}px`} />
                    <span className="p-1">Librarian</span>
                  </span>
                </button>
              </li>
              <li className="nav-item d-inline-block border-left">
                <button
                  className={`btn btn-info py-3 px-2 ${
                    formType === admin ? "active" : ""
                  }`}
                  href="#"
                  style={{
                    borderRadius: "0px 4px 0px 0px",
                    fontSize: `${setFont()}px`,
                  }}
                  onClick={() => {
                    handleFormType(admin);
                  }}
                >
                  <span>
                    <FaUserShield size={`${setFont() + 7}px`} />
                    <span className="p-1">Admin</span>
                  </span>
                </button>
              </li>
            </ul>
          </div>
          <div className="pt-3">
            <form className="mx-auto login-form">
              <div className="form-group">
                <div className="bg-dar" style={{ position: "relative" }}>
                  <input
                    type="username"
                    className="form-control login-form-control"
                    name="username"
                    placeholder={formType === student ? "Card No" : "Username"}
                    value={formData.username}
                    onChange={(event) => handleFormChange("username", event)}
                  />
                  {authFaild ? (
                    <GoAlert
                      color={authFaild ? "red" : "#17A2B8"}
                      size="20px"
                      style={{ position: "absolute", top: "35%", right: "5px" }}
                    />
                  ) : (
                    <FaRegUser
                      color={authFaild ? "red" : "#17A2B8"}
                      size="20px"
                      style={{ position: "absolute", top: "35%", right: "5px" }}
                    />
                  )}
                </div>
              </div>
              <div className="form-group">
                <div className="bg-dar" style={{ position: "relative" }}>
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control login-form-control"
                    name="password"
                    value={formData.password}
                    onChange={(event) => handleFormChange("password", event)}
                  />

                  {authFaild ? (
                    <GoAlert
                      color={authFaild ? "red" : "#17A2B8"}
                      size="20px"
                      style={{ position: "absolute", top: "35%", right: "5px" }}
                    />
                  ) : (
                    <FiLock
                      color={authFaild ? "red" : "#17A2B8"}
                      size="20px"
                      style={{ position: "absolute", top: "35%", right: "5px" }}
                    />
                  )}
                </div>
              </div>
              <div className="py-1" style={{ height: "30px" }}>
                <a
                  className="float-right"
                  href="#"
                  style={{ textDecoration: "none", fontSize: "13px" }}
                >
                  Forget password?
                </a>
              </div>
              <div className="text-center py-2">
                <button
                  type="submit"
                  className="btn btn-md btn-outline-info"
                  onClick={(event) => {
                    event.preventDefault();
                    props.handleFormSubmit(formData);
                  }}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
