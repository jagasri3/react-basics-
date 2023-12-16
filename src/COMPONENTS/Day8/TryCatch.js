import React from 'react'

export default function TryCatch({fruit}) {
    try{
        if(fruit==="Onion")
        {
            throw new Error("not a fruit")
        }
    }
    catch(error)
    {
        document.write(error)
    }

    finally{
      document.write("Successfully executed")
    }
  return (
    <div>
      {fruit}
    </div>
  )
}
