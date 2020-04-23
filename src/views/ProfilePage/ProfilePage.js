import React from "react";

//Images
import ProfilePic from "assets/img/faces/kendall.jpg";

//views
import Navbar from "views/Components/Navbar/Navbar";
import Footer from "views/Components/Footer/Footer";

//sections
import CardStatus from "./Sections/CardStatus";
import UserProfile from "./Sections/UserProfile";

export default function ProfilePage(props) {
  const userData = {
    cardNumber: "SL2069",
    name: "Ananya Sarkar",
  };

  return (
    <div>
      <Navbar {...props} />
      <div style={{ paddingTop: "80px", minHeight: "80vh" }}>
        <div className="row" style={{ margin: "0" }}>
          <div
            className="col-md-5 p-3"
            style={{
              marginBottom: "0",
              boxSizing: "border-box",
            }}
          >
            <UserProfile {...userData} />
          </div>
          <div
            className="col-md-7 my-3 text-center p-2 border-info"
            style={{ marginBottom: "0", borderLeft: "1px solid" }}
            // backgroundColor: "#4A71B0"
          >
            <CardStatus {...props} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
