import React from "react";
import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Navbar = () => {
  const { user, setUser } = useContext(UserContext)
    const navigate = useNavigate();
    const handleLogout = async (e) => {
    e.preventDefault()
    try {
      const res=await axios.get("https://todeploy.onrender.com/logout",{withCredentials:true})
      setUser(null);
      console.log(res);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
  <header>
    <nav className=" bg-gray-500 h-10 text-white flex justify-around ">
      <div className=" text-xl"> <a href="/">VE3</a></div>
      <div className=" text-xl ">
        <ul className=" flex gap-5">
          {/* <li className=" hover:text-blue-950 "> <a href="" >Home</a> </li>
          <li className="  hover:text-blue-950"> <Link to={'/register'}>logout</Link></li> */}
           {(!user)&& (
          <Link to="/login">
            <h2>Login</h2>
          </Link>
        )}

        {(!user) &&(
          <Link to="/register">
            <h2>SignUp</h2>
          </Link>
        )}

        {user && (
          <button onClick={ handleLogout} className=" cursor-pointer">
            Logout
          </button>
        )}
        </ul>
      </div>
    </nav>
  </header>
)};

export default Navbar;
