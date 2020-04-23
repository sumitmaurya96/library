import React from "react";

//views
import Footer from "views/Components/Footer/Footer.js";
import Navbar from "views/Components/Navbar/Navbar";

//Sections
import Login from "./Sections/Login";

const LoginPage = (props) => {
  return (
    <div>
      <Navbar {...props} />
      <div className="px-4" style={{ minHeight: "80vh", paddingTop: "80px" }}>
        <Login />
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
