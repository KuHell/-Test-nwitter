import "../styles/globals.css";
import type { AppProps } from "next/app";
// import { useState, useEffect } from "react";
// import { authService } from "../firebase/firebase";
// import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function App({ Component, pageProps }: AppProps) {
  // const [init, setInit] = useState<boolean>(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // useEffect(() => {
  //   const auth = getAuth();
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setIsLoggedIn(true);
  //       const uid = user.uid;
  //     } else {
  //       setIsLoggedIn(false);
  //     }
  //     setInit(true);
  //   });
  // }, []);
  return <Component {...pageProps} />;
}
