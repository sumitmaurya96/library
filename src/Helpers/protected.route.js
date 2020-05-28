import React from "react";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({ component: Component, loggedIn, ...rest }) => {
  console.log(loggedIn);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (loggedIn) {
          console.log("Authenticated!");
          return <Component {...props} />;
        } else {
          console.log("Not Authenticated!");
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};
