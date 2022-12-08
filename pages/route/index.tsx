import React from "react";
import Auth from "../auth";
import Home from "./Home";

interface IndexProps {
  isLoggedIn: boolean;
}

const index: React.FC<IndexProps> = ({ isLoggedIn }) => {
  console.log("isLoggedIn: ", isLoggedIn);

  return <>{!isLoggedIn ? <Auth /> : <Home />}</>;
};

export default index;
