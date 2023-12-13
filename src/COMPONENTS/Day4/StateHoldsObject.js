import  { useState } from "react";
export default function StateHoldsObject()
{
    const[player,setPlayer]=useState({name:"VIRAT",num:18,sport:"CRICKET"});
    const ChangeName=()=>
    {
        setCollege((prevName)=>{return{...prevName,name:"BOULT"}})
    };
   
   
    return(
      <div>
        <p>Details: {player.name} {olayer.name} {player.sport}.</p>
        <button onClick={ChangeName}>CHANGE</button>
      </div>
    ) 
}
