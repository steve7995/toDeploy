import React from "react";
import { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import axios from "axios";
const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
    const {setUser}  =useContext(UserContext)
  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/login",
        { 
          email,
          password,
        },
        { withCredentials: true }
      );
      console.log(response);
       setUser(response.data)
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex flex-col items-center min-w-[25vw]  min-h-[75vh] max-w-[75vw] m-auto w-1/4">
        <h1 className="text-2xl font-bold mb-6 mt-4 text-gray-500">
          Enter Your login credentials!
        </h1>
        <input
          className="w-full p-4 m-4 border  border-zinc-900 rounded"
          type="text"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full p-4 m-4  border  border-zinc-900 rounded"
          type="password"
          placeholder="enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-gray-100 rounded p-2 hover:bg-gray-200 "
          onClick={handleLogin}
        >
          LogIn
        </button>
      </div>
    </>
  );
};

export default LogIn;
