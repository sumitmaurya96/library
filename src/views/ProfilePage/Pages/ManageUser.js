import React from "react";

import { admin, librarian, student, faculty } from "Helpers/Roles";
import Axios from "axios";
import { MdArrowBack } from "react-icons/md";

const ManageUser = (props) => {
  const {
    apiLink,
    editFlag = false,
    ownData = {},
    userData = {},
    handleNavigationClick = () => {},
  } = props;
  const { role } = ownData;

  const [submissionResult, setSubmissionResult] = React.useState({
    show: false,
    message: "No message",
  });

  const [newUserData, setNewUserData] = React.useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    role: student,
    superuserKey: "",
  });

  const onInputChange = (field, value) => {
    setNewUserData((state) => {
      const NewUserData = { ...state };
      NewUserData[field] = value;
      return NewUserData;
    });
  };

  const handleSubmit = () => {
    console.log(newUserData);
    Axios.post(`${apiLink}/users/add`, newUserData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        console.log(response);
        setSubmissionResult({
          show: true,
          message: `User ${
            editFlag ? "details modified" : "created"
          } successfully`,
        });
      })
      .catch((err) => {
        console.log(err);
        setSubmissionResult({
          show: true,
          message: `User ${editFlag ? "modification" : "creation"} faild`,
        });
      });
  };

  React.useEffect(() => {
    const { role, firstname, lastname, email } = userData;
    if (editFlag) {
      setNewUserData((state) => {
        const NewUserData = { ...state };
        NewUserData.firstname = firstname;
        NewUserData.lastname = lastname;
        NewUserData.email = email;
        NewUserData.role = role;
        return NewUserData;
      });
    }
  }, []);

  return (
    <div className="row m-0 mt-5">
      <div
        className="col-md-8 offset-md-2 shadow-lg"
        style={{ position: "relative" }}
      >
        <a
          style={{ position: "absolute", top: "5%", left: "5%" }}
          className="text-info"
          onClick={() => handleNavigationClick("back")}
        >
          <MdArrowBack size="40px" />
        </a>
        {submissionResult.show ? (
          <div
            className="d-flex w-100 justify-content-center"
            style={{ height: "100%" }}
          >
            <p className="align-self-center h2 text-muted">
              {submissionResult.message}
            </p>
          </div>
        ) : (
          <React.Fragment>
            <div className="text-center pt-3 pb-2">
              <p className="h3 text-info">
                {editFlag ? "Edit" : "Add New"} User
              </p>
            </div>
            <form className="pb-4 pt-2 login-for text-muted">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="First Name"
                  className="form-control login-form-control"
                  value={newUserData.firstname}
                  onChange={(event) =>
                    onInputChange("firstname", event.target.value)
                  }
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="form-control login-form-control"
                  value={newUserData.lastname}
                  onChange={(event) =>
                    onInputChange("lastname", event.target.value)
                  }
                />
              </div>
              {!editFlag && (
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Username"
                    className="form-control login-form-control"
                    value={newUserData.username}
                    onChange={(event) =>
                      onInputChange("username", event.target.value)
                    }
                  />
                </div>
              )}
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control login-form-control"
                  value={newUserData.email}
                  onChange={(event) =>
                    onInputChange("email", event.target.value)
                  }
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control login-form-control"
                  value={newUserData.password}
                  onChange={(event) =>
                    onInputChange("password", event.target.value)
                  }
                />
              </div>
              {ownData.role === admin &&
                newUserData.role === admin &&
                ownData.username !== userData.username && (
                  <div className="form-group">
                    <input
                      type="password"
                      placeholder="Superuser Key"
                      className="form-control login-form-control"
                      value={newUserData.superuserKey}
                      onChange={(event) =>
                        onInputChange("superuserKey", event.target.value)
                      }
                    />
                  </div>
                )}
              {!(ownData.username === userData.username && editFlag) &&
                (role === admin || role === librarian) && (
                  <div className="form-group">
                    <label htmlFor="cars" className="pr-4">
                      User Role:
                    </label>
                    <select
                      name="cars"
                      id="cars"
                      className="text-muted"
                      value={newUserData.role}
                      onChange={(event) =>
                        onInputChange("role", event.target.value)
                      }
                    >
                      <option value={student}>Student</option>
                      <option value={faculty}>Faculty</option>
                      {role === admin && (
                        <React.Fragment>
                          <option value={librarian}>Librarian</option>
                          <option value={admin}>Admin</option>
                        </React.Fragment>
                      )}
                    </select>
                  </div>
                )}
              <div className="form-group text-center">
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-sm btn-info"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSubmit();
                  }}
                />
              </div>
            </form>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default ManageUser;
