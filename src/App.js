import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

//Helper
import { ProtectedRoute } from "./Helpers/protected.route";
import { LoginRoute } from "./Helpers/login.route";

//Routes
import LandingPage from "views/LandingPage/LandingPage";
import AboutPage from "views/AboutPage/AboutPage";
import TeamPage from "views/TeamPage/TeamPage";
import ResourcesPage from "views/ResourcesPage/ResourcesPage";
import SearchPage from "views/SearchPage/SearchPage";
import ServicesPage from "views/ServicesPage/ServicesPage";
import NoticePage from "views/NoticePage/NoticePage";
import LoginPage from "views/LoginPage/LoginPage";
import ProfilePage from "views/ProfilePage/ProfilePage";

function App() {
  const apiLink = "http://localhost:5000"; //"https://ju-library-api.herokuapp.com";

  const initialUserState = {
    loggedIn: false,
    userData: {
      id: "",
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      role: "",
      favourites: [],
    },
  };

  const [user, setUser] = React.useState(initialUserState);

  const logUserOut = () => {
    setUser(initialUserState);
  };

  const setUserData = (tokenArgs) => {
    const token = tokenArgs ? tokenArgs : localStorage.getItem("token");
    axios
      .get(`${apiLink}/users/yourself`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        //console.log(data);

        setUser((state) => {
          const User = { ...state };
          User.loggedIn = true;
          User.userData.id = data._id;
          User.userData.firstname = data.firstname;
          User.userData.lastname = data.lastname;
          User.userData.username = data.username;
          User.userData.email = data.email;
          User.userData.profilePicUrl = data.profilePicUrl;
          User.userData.role = data.role;
          User.userData.favourites = data.favourites;
          return User;
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    setUserData(null);
  }, []);

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/home"
          component={(props) => (
            <LandingPage
              user={user}
              apiLink={apiLink}
              logOut={logUserOut}
              {...props}
            />
          )}
        />
        <Route
          exact
          path="/about"
          component={(props) => (
            <AboutPage
              user={user}
              apiLink={apiLink}
              logOut={logUserOut}
              {...props}
            />
          )}
        />
        <Route
          exact
          path="/team"
          component={(props) => (
            <TeamPage
              user={user}
              apiLink={apiLink}
              logOut={logUserOut}
              {...props}
            />
          )}
        />
        <Route
          exact
          path="/resources"
          component={(props) => (
            <ResourcesPage
              user={user}
              apiLink={apiLink}
              logOut={logUserOut}
              {...props}
            />
          )}
        />
        <Route
          exact
          path="/search"
          component={(props) => (
            <SearchPage
              user={user}
              apiLink={apiLink}
              logOut={logUserOut}
              {...props}
            />
          )}
        />
        <Route
          exact
          path="/services"
          component={(props) => (
            <ServicesPage
              user={user}
              apiLink={apiLink}
              logOut={logUserOut}
              {...props}
            />
          )}
        />
        <Route
          exact
          path="/notice"
          component={(props) => (
            <NoticePage
              user={user}
              apiLink={apiLink}
              logOut={logUserOut}
              {...props}
            />
          )}
        />
        <LoginRoute
          exact
          loggedIn={user.loggedIn}
          path="/login"
          component={(props) => (
            <LoginPage
              user={user}
              apiLink={apiLink}
              setUser={setUserData}
              logOut={logUserOut}
              {...props}
            />
          )}
        />
        <ProtectedRoute
          exact
          loggedIn={user.loggedIn}
          path="/profile"
          component={(props) => (
            <ProfilePage
              user={user}
              apiLink={apiLink}
              logOut={logUserOut}
              {...props}
            />
          )}
        />
        <Route
          exact
          path="*"
          component={(props) => (
            <Redirect
              to={{
                pathname: "/home",
                state: {
                  from: props.location,
                },
              }}
            />
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
