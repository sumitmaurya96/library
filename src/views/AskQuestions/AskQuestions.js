import React from "react";

//CSS
import "./askQuestionStyle.css";

import Navbar from "views/Components/Navbar/Navbar";
import Footer from "views/Components/Footer/Footer";

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
    <React.Fragment>
      <Navbar {...props} />
      <div className="row m-0 pb-5" style={{ paddingTop: "6rem" }}>
        <div className="col-md-10 offset-md-1 bg-light shadow-lg">
          <div className="jumbotron bg-light">
            <div className="text-center">
              <p className="h1 text-muted strong">Ask A Librarian</p>
            </div>
            <div className="pt-3">
              <form className="mx-auto">
                <div className="py-2">
                  <input
                    type="text"
                    placeholder="Your Full Name"
                    className="form-control login-form-control"
                    id="name"
                  />
                </div>
                <div className="py-2">
                  <input
                    type="email"
                    className="form-control login-form-control"
                    id="useremail"
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
                <div className="bg-dar py-2">
                  <textarea
                    className="border-info"
                    row="1"
                    placeholder="Your Question"
                    id="question"
                    className="login-form-control form-control"
                  />
                </div>
                <div className="text-center py-3">
                  <button
                    type="submit"
                    className="btn btn-md btn-outline-info px-4"
                  >
                    Ask
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer {...props} />
    </React.Fragment>
  );
};

export default LoginPage;
