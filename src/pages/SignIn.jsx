import { useState } from "react";
import codingLogo from "../assets/coding.png";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("All fields are required");
      return;
    }
    setError("");
  };

  return (
    <div className="flex flex-col-2 w-full h-screen  bg-light-MainBg  overflow-hidden shadow-lg">
      <div className="flex items-center justify-center bg-[#23155B] w-1/2  p-4">
        <img
          src={codingLogo}
          alt="Red hair guy looking in his laptop"
          className="w-3/5"
        />
      </div>
      <div className="flex flex-col justify-center bg-white w-[400px] h-[350px] my-60 mx-24 rounded-lg p-6">
        <h1 className="text-2xl font-bold text-[#8053FF] mb-4">
          Join Coders Now!
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full  p-3 bg-[#23155B] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#8053FF]"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-3 bg-[#23155B] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#8053FF]"
          />
          {error && <p className="text-red-600 my-0">{error}</p>}
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Login
          </button>
          <p className="text-center text-sm text-gray-600 mt-0">
            New to CodeCLA?
            <a href="./SignUp" className="text-[#8053FF] hover:underline">
              Signup
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signin;
