import React from "react";

//CSS
import "./login.css";

//icons
import { GiMonkFace } from "react-icons/gi";

const LoginPage = (props) => {
  const [userType, setUserType] = React.useState({
    student: true,
    faculty: false,
    librarian: false,
  });

  const handleUserType = (user) => {
    const UserType = { ...userType };
    UserType.student = false;
    UserType.faculty = false;
    UserType.librarian = false;
    if (user === 0) UserType.student = true;
    else if (user === 1) UserType.faculty = true;
    else if (user === 2) UserType.librarian = true;
    setUserType(UserType);
  };

  const setFont = () => {
    return 10 + (16 - 10) * ((window.innerWidth - 300) / (1600 - 300));
  };

  return (
    <div className="row py-4">
      <div className="col-md-4 offset-md-4 rounded bg-light shadow-lg">
        <div className="jumbotron bg-light">
          <div className="text-center">
            <p className="h1 text-muted strong">Login</p>
          </div>
          <div className="text-center">
            <ul
              className="nav nav-pills d-inline-block my-3"
              style={{ borderRadius: "4px 4px 0px 0px" }}
            >
              <li className="nav-item d-inline-block">
                <button
                  className={`btn btn-info py-3 px-2 ${
                    userType.student ? "active" : ""
                  }`}
                  href="#"
                  style={{
                    borderRadius: "4px 0px 0px 0px",
                    fontSize: `${setFont()}px`,
                  }}
                  onClick={() => {
                    handleUserType(0);
                  }}
                >
                  <span>
                    <GiMonkFace size={`${setFont() + 7}px`} />
                    <span className="p-1">Student</span>
                  </span>
                </button>
              </li>
              <li className="nav-item d-inline-block">
                <button
                  className={`btn btn-info py-3 px-2 ${
                    userType.faculty ? "active" : ""
                  }`}
                  href="#"
                  style={{
                    borderRadius: "0px",
                    fontSize: `${setFont()}px`,
                  }}
                  onClick={() => {
                    handleUserType(1);
                  }}
                >
                  <span>
                    <GiMonkFace size={`${setFont() + 7}px`} />
                    <span className="p-1">Faculty</span>
                  </span>
                </button>
              </li>
              <li className="nav-item d-inline-block">
                <button
                  className={`btn btn-info py-3 px-2 ${
                    userType.librarian ? "active" : ""
                  }`}
                  href="#"
                  style={{
                    borderRadius: "0px 4px 0px 0px",
                    fontSize: `${setFont()}px`,
                  }}
                  onClick={() => {
                    handleUserType(2);
                  }}
                >
                  <span>
                    <GiMonkFace size={`${setFont() + 7}px`} />
                    <span className="p-1">Librarian</span>
                  </span>
                </button>
              </li>
            </ul>
          </div>
          <div className="pt-3">
            <form className="mx-auto login-form">
              <div className="form-group">
                {/* <label for="exampleInputEmail1">Email address</label> */}
                <input
                  type="email"
                  className="form-control login-form-control"
                  id="exampleInputEmail1"
                  placeholder={
                    userType.student
                      ? "Card No"
                      : userType.faculty
                      ? "Identification Id"
                      : "Email"
                  }
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="form-group">
                {/* <label for="exampleInputPassword1">Password</label> */}
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control login-form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input  login-form-check-input"
                  id="exampleCheck1"
                />
                <label
                  className="form-check-label py-1 login-form-check-label"
                  for="exampleCheck1"
                >
                  Remember Me
                </label>
                <a
                  className="float-right"
                  href="#"
                  style={{ textDecoration: "none", fontSize: "13px" }}
                >
                  Forget password?
                </a>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-md btn-outline-info">
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
