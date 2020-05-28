import React from "react";

const userContext = React.createContext({
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  role: "",
  profilePicUrl: "",
});

export default userContext;
