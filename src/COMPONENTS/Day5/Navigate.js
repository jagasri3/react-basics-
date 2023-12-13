import React from 'react';
import {useNavigate} from "react";
export default function Navigate() 
{
    const  Navigate = usNavigate();
    const loginButton=()=>{Navigate("/login")}
    const signUp=()=>{navigate("/signup")}
return(
    <div>
      <button onClick={loginButton}>Login page</button>
      <button onClick={signUp}>Signup page</button>
    </div>
  )
}
