import React from "react";

//views
import Navbar from "views/Components/Navbar/Navbar";
import Footer from "views/Components/Footer/Footer";

//Sections
import AddNewUser from "./Sections/AddNewUser";
import UserProfile from "./Sections/UserProfile";
import Favourites from "./Sections/Favourites";

//Icons
import { GoPlus } from "react-icons/go";

const ProfilePage = (props) => {
  const [fav, setFav] = React.useState(false);
  const [showNewUserPage, setShowNewUserPage] = React.useState(false);
  const { favourites, ...rest } = props.user.userData;

  const newUserPageVisible = (args) => {
    setShowNewUserPage(args);
  };

  const setFavouriteVisible = (args) => {
    setFav(args);
  };

  return (
    <React.Fragment>
      <Navbar user={props.user} {...props} />
      <div style={{ paddingTop: "80px", minHeight: "100vh" }}>
        {!fav ? (
          <div className="row" style={{ margin: "0" }}>
            <div
              className="col-md-10 p-3 offset-md-1"
              style={{
                marginBottom: "0",
                boxSizing: "border-box",
              }}
            >
              <UserProfile
                userData={rest}
                favourites={favourites}
                setFavouriteVisible={setFavouriteVisible}
              />
            </div>
          </div>
        ) : (
          <div className="row" style={{ margin: "0" }}>
            <div className="col-md-10 offset-md-1 my-3 text-center p-2 mb-0">
              <Favourites
                favourites={favourites}
                setFavouriteVisible={setFavouriteVisible}
              />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default ProfilePage;
