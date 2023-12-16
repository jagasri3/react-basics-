import React from 'react';
export default function List()
{
    const animal=["rocky","leo","lexi","tiger"]
    const result=animal.map((ani)=><li>{ani}</li>)
    return(
        <div>
            <ol>
                
                {result}
            </ol>
        </div>
    )
}