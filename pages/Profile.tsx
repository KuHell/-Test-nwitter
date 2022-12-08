import Link from "next/link";
import React from "react";
import { authService } from "../firebase/firebase";

const Profile = () => {
  const onLogOutClick = () => authService.signOut();
  return (
    <>
      <button onClick={onLogOutClick}>Log Out</button>
      <Link href="/">Home</Link>
    </>
  );
};

export default Profile;
