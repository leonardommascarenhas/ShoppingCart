import React, { useState } from "react";

export const AuthContext = React.createContext(0);

export const AuthProvider = ({ props }) => {
  const [onCart, setOnCart] = useState(0);

  return <AuthContext.Provider value={{ onCart, setOnCart }}>{props.children}</AuthContext.Provider>;
};
