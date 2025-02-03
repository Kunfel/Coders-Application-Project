import React from "react";
import Navbar from "../_components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1 className="flex text-6xl text-purple-700 bg-light-MainBg dark:bg-dark-MainBg dark:text-purple-200 font-semibold h-screen justify-center items-center ">
        Welcome to Code CLA!
      </h1>
    </div>
  );
}