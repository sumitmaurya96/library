import React from "react";

import { admin, librarian, student, faculty } from "Helpers/Roles";
import Axios from "axios";
import { MdArrowBack } from "react-icons/md";

const AddNewUser = (props) => {
  const { role } = props.userData;
  const [newUserData, setNewUserData] = React.useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    role: student,
  });

  const onInputChange = (field, value) => {
    setNewUserData((state) => {
      const NewUserData = { ...state };
      NewUserData[field] = value;
      return NewUserData;
    });
  };

  const handleSubmit = () => {
    const token = localStorage.getItem("token");
    console.log(newUserData);
    Axios.post(`http://localhost:5000/users/add`, newUserData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="row m-0">
      <div
        className="col-md-8 offset-md-2 shadow-lg"
        style={{ position: "relative" }}
      >
        <a
          style={{ position: "absolute", top: "5%", left: "5%" }}
          className="text-info"
          onClick={() => props.newUserPageVisible(false)}
        >
          <MdArrowBack size="40px" />
        </a>
        <div className="text-center pt-3 pb-2">
          <p className="h3 text-info">Add New User</p>
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
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              className="form-control login-form-control"
              value={newUserData.email}
              onChange={(event) => onInputChange("email", event.target.value)}
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
          <div className="form-group">
            <label htmlFor="cars" className="pr-4">
              User Role:
            </label>
            <select
              name="cars"
              id="cars"
              className="text-muted"
              value={newUserData.role}
              onChange={(event) => onInputChange("role", event.target.value)}
            >
              <option value={student}>Student</option>
              <option value={faculty}>Faculty</option>
              <option value={librarian}>Librarian</option>
              {role === admin && <option value={admin}>Admin</option>}
            </select>
          </div>
          <div className="form-group text-center">
            <input
              type="submit"
              value="Add"
              className="btn btn-sm btn-info"
              onClick={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewUser;
