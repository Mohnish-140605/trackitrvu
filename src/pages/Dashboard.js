import React from "react";
import PostForm from "../components/Posts/PostForm";
import Home from "./Home";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <PostForm />
      <Home />
    </div>
  );
};

export default Dashboard;
