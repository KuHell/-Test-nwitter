import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDERID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyBjkekDCHndXENDHnkatG-2YhtHm0GTl1s",
//   authDomain: "launcher-fec2b.firebaseapp.com",
//   projectId: "launcher-fec2b",
//   storageBucket: "launcher-fec2b.appspot.com",
//   messagingSenderId: "154900869681",
//   appId: "1:154900869681:web:896235ecbd93a976e51b10",
// };

export default firebase.initializeApp(firebaseConfig);
