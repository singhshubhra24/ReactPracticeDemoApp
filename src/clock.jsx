import { useState } from "react";
import { useEffect } from "react";

function Clock({color}){
const [time, setTime]=useState(0)
useEffect(()=>{
    setInterval(()=>{
        setTime(new Date().toLocaleTimeString())
    },1000)
})
return(
    <div>
    <h1 style={{color:color,backgroundColor:'#000f',width:"1000px", textAlign:'center',padding:"20px", borderRadius:"20px"}}>Today's Time is :{time} </h1>
    {/* <button onClick={()=>{setTime(new Date().toLocaleTimeString())}}>Get Time</button> */}
    </div>

)
}
export default Clock;