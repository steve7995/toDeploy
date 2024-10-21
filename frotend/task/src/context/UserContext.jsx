import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";


export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    getUser();
  }, []);

  const getUser=async()=>{
      try{
        const res=await axios.get("http://localhost:8000/refetch",{withCredentials:true})
        console.log("this is the response",res)
        setUser(res.data)
      }
      catch(err){
        console.log(err)
      }
    }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}




