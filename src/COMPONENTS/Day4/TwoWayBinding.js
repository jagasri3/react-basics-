import { useState } from "react";

export default function TwoWayBinding() 
{
    const[name,setName]=useState("")
    const ChangeName=(val)=>setName(val.target.value)
  
    return (
      <div> TwoWayBinding
        <input onChange={ChangeName} value={name}></input>
        <p>Name is{name}</p>
      </div>
    )
  
}
