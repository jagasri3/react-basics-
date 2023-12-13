import React, { useState } from "react";
import DefaultProps from './DefaultProps'
import Parent from './ParentChildComunication'

export default function DyanamicRendering()  

{
    const[x, setx]=useState(10);
   
        let func1;
        if(x > 10)
        {
            func1=<Parent/>
        }  
    else
    {
        func1=<DefaultProps/>
    }

    return(
    <div>
        <p>func1</p>
    </div>
    )
}
