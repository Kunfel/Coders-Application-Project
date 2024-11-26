import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./_components/Navbar";
import { Routes, Route } from "react-router-dom";
import LeaderBoard from "./pages/LeaderBoard";
import SignUp from "./pages/SignUp";
import Signin from "./pages/SignIn";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/leaderboard" element={<LeaderBoard />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </>
  );
}

export default App;
