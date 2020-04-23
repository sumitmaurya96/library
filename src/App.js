import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";

//Routes
import LandingPage from "views/LandingPage/LandingPage";
import AboutPage from "views/AboutPage/AboutPage";
import CardStatusPage from "views/CardStatusPage/CardStatusPage";
import TeamPage from "views/TeamPage/TeamPage";
import ResourcesPage from "views/ResourcesPage/ResourcesPage";
import SearchPage from "views/SearchPage/SearchPage";
import ServicesPage from "views/ServicesPage/ServicesPage";
import NoticePage from "views/NoticePage/NoticePage";
import LoginPage from "views/LoginPage/LoginPage";
import ProfilePage from "views/ProfilePage/ProfilePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/home"
          component={(props) => <LandingPage {...props} />}
        />
        <Route
          exact
          path="/about"
          component={(props) => <AboutPage {...props} />}
        />
        <Route
          exact
          path="/card-status"
          component={(props) => <CardStatusPage {...props} />}
        />
        <Route
          exact
          path="/team"
          component={(props) => <TeamPage {...props} />}
        />
        <Route
          exact
          path="/resources"
          component={(props) => <ResourcesPage {...props} />}
        />
        <Route
          exact
          path="/search"
          component={(props) => <SearchPage {...props} />}
        />
        <Route
          exact
          path="/services"
          component={(props) => <ServicesPage {...props} />}
        />
        <Route
          exact
          path="/notice"
          component={(props) => <NoticePage {...props} />}
        />
        <Route
          exact
          path="/login"
          component={(props) => <LoginPage {...props} />}
        />
        <Route
          exact
          path="/profile"
          component={(props) => <ProfilePage {...props} />}
        />
        <Route
          exact
          path="*"
          component={() => (
            <div>
              <p>Page Not Found</p>
            </div>
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
