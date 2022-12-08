import { useState, useEffect } from "react";
import { authService } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import Route from "./route/index";
import Auth from "./auth";

import AppRouter from "./_app";

export default function Home() {
  const [init, setInit] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      if (user) {
        setIsLoggedIn(true);
        const uid = user.uid;
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      {init ? <Route isLoggedIn={isLoggedIn} /> : "Initializing."}
      <h1>kuhell</h1>
    </>
  );
}
