import React from "react";
import { Route, Redirect } from "react-router-dom";

export const LoginRoute = ({ component: Component, loggedIn, ...rest }) => {
  console.log(loggedIn);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (loggedIn) {
          console.log("Logged True");
          return (
            <Redirect
              to={{
                pathname: "/home",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        } else {
          console.log("Logged False");
          return <Component {...props} />;
        }
      }}
    />
  );
};
