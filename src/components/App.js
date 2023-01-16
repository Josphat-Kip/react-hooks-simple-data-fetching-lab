// create your App component here

import React from "react";
import { useState, useEffect } from "react";

function App(){

    const[dogImage, setDogImage] = useState("")
    const[imageLoading, setImageLoading] = useState(true)

    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((resp)=>resp.json())
        .then((data)=>{

            setImageLoading (data.message)
            setDogImage(false)
        })
    },[])

    if(dogImage) return <p>Loading....</p>

return(
    <div>
        <img src={imageLoading} alt="random dog"></img>
    </div>
)
}
export default App;