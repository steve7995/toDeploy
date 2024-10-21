import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const Signup = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:8000/register", {
        username,
        email,
        password,
      });
      setUserName(res.data.username);
      setPassword(res.data.password);
      setEmail(res.data.email);
      console.log(res);
      setError(false);
            navigate("/login");
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  return (
    <>

      <div className="flex flex-col items-center min-w-[25vw]  min-h-[75vh] max-w-[75vw] m-auto w-1/4">
        <h1 className="text-2xl font-bold mb-6 mt-4 text-gray-500">
          Create your new account
        </h1>
        <input
          className="w-full p-4 m-4 border  border-zinc-900 rounded"
          type="text"
          placeholder="Enter your Username"
            onChange={(e) => setUserName(e.target.value)}

        />
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
        <button className="bg-gray-100 rounded p-2" onClick={handleSubmit}>
          SignUp
        </button>
      </div>


      </>
  );
};

export default Signup;