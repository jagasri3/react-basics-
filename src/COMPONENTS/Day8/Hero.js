
export default function Hero({heroName}) {
    if(heroName === "Vijaya")
    {
        throw new Error("NOT A PRINCE")
    }
  return (
    <div>
      <h1>{heroName}</h1>
    </div>
  )
}
