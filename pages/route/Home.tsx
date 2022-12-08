import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/Profile">Profile</Link>
      </li>
    </ul>
  );
};

export default Home;
