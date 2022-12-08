import React, { useState } from "react";
import { authService } from "../firebase/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const Auth = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [newAccount, setNewAccount] = useState<boolean>(true);

  const onChange = (event: any) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = async (event: any) => {
    event.preventDefault();
    let data;
    try {
      if (newAccount) {
        data = await createUserWithEmailAndPassword(
          authService,
          email,
          password
        );
        // Create Account
      } else {
        data = await signInWithEmailAndPassword(authService, email, password);
        // Log In
      }
      console.log("data: ", data);
    } catch (err) {
      console.log(err);
    }
  };
  const toggleAccount = () => setNewAccount((prev) => !prev);
  return (
    <div>
      <>
        <form onSubmit={onSubmit}>
          <input
            name="email"
            type="text"
            placeholder="Email"
            required
            value={email}
            onChange={onChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={onChange}
          />
          <input
            type="submit"
            value={newAccount ? "Create Account" : "Sign In"}
          />
        </form>
        <span onClick={toggleAccount}>
          {newAccount ? "Sign In" : "Create Account"}
        </span>
      </>
    </div>
  );
};

export default Auth;
