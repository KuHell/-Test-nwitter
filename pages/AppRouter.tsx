import React from "react";
import { authService } from "../firebase/firebase";
import Auth from "./auth";

interface AppProps {
  // refreshUser: any;
  isLoggedIn: boolean;
  // userObj: any;
}

const AppRouter: React.FC<AppProps> = ({ isLoggedIn }) => {
  return <>{isLoggedIn ? "Home" : <Auth />}</>;
};

export default AppRouter;
