import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LeaderBoard from "./pages/LeaderBoard";
import SignUp from "./pages/register/SignUp";
import Signin from "./pages/register/SignIn";
import Home from "./pages/Home";
import Challenges from "./pages/challenges/Challenges";
import Workspace from "./pages/workspacePage/Workspace";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/workspace/:challengeId" element={<Workspace />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
