import React, { useState } from "react";
import { Auth } from "aws-amplify";

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await Auth.signUp({
        username,
        password,
        attributes: {
          email,
        },
      });
      alert("Sign-up successful! Please check your email to verify your account.");
    } catch (error) {
      console.error("Error signing up:", error);
      alert("Sign-up failed. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSignUp}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
