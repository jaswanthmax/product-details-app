import React from "react";
import Navbar from "../Components/Navbar";
import Category from "./Category";

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1>Welcome to Home Page</h1>
      <p>This is the Home page content.</p>
      <Category/>
      <p> All product </p>
    </div>
  );
};

export default Home;
