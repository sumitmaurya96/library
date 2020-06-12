import React from "react";
import axios from "axios";

//views
import Footer from "views/Components/Footer/Footer.js";
import Navbar from "views/Components/Navbar/Navbar";

//Image
import Loading from "assets/img/loading/loading.gif";

//Sections
import Login from "./Sections/Login";

const LoginPage = (props) => {
  const { apiLink } = props;

  const [loading, setLoading] = React.useState(false);
  const [authFaild, setAuthFaild] = React.useState(false);

  const handleFormSubmit = (formData) => {
    setLoading(true);
    console.log(formData);
    axios
      .post(`${apiLink}/users/login`, {
        username: formData.username,
        password: formData.password,
      })
      .then((response) => {
        setLoading(false);
        console.log(response);
        localStorage.setItem("token", response.data.token);
        props.setUser(response.data.token);
        props.history.push("/home");
      })
      .catch((err) => {
        setLoading(false);
        console.log("err" + err);
        if (err.response && err.response.status === 401) {
          setAuthFaild(true);
        }
      });
  };

  React.useEffect(() => {
    if (props.user.loggedIn) {
      props.history.push("/home");
    }
  }, []);

  return (
    <React.Fragment>
      {!loading ? (
        <div>
          <Navbar
            user={props.user}
            logOut={props.logOut}
            apiLink={props.apiLink}
            {...props}
          />
          <div
            className="px-4"
            style={{ minHeight: "80vh", paddingTop: "80px" }}
          >
            <Login
              setUser={props.setUser}
              authFaild={authFaild}
              setAuthFaild={setAuthFaild}
              handleFormSubmit={handleFormSubmit}
              {...props}
            />
          </div>
          <Footer />
        </div>
      ) : (
        <div className="d-flex" style={{ height: "100vh" }}>
          <div className="align-self-center w-100 text-center">
            <img width="64px" height="64px" src={Loading} />
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default LoginPage;
