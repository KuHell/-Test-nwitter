import firebase from "../firebase/firebase";
export default function Home() {
  console.log("REACT_APP_APP_ID: ", process.env.NEXT_PUBLIC_APP_ID);
  console.log("firebase: ", firebase);
  return (
    <>
      <h1>kuhell</h1>
    </>
  );
}
