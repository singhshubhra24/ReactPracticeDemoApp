import { useState } from "react";
import {useEffect} from "react";
function UseEffectPropUsedCase(){
    const [count, setCount] = useState(0);
    const [data,setData] = useState(0);
function callCounter(){
    console.log("This function is called only once when the component's counter is mounted callOnce")
}
function callOnData(){
    console.log("This function is called everytime when the component'data is rendered callEverytime")
}
useEffect(()=>{
    callOnData();
},[data]) 
useEffect(()=>{
    callCounter();
},[data,count]) 

// useEffect(()=>{
//     callOnData();
// },[]) 

useEffect(()=>{
    callOnData();
}) 

return(
    <div>
        <h1>This is UseEffect Prop Used Case Component</h1>
        <h2>Open Console to see the output</h2>
        <button onClick={()=>{setCount(count+1)}}>Counter{count}</button>
        <button onClick={()=>{setData(data+1)}}>Data{data}</button>

    </div>
)
}
export default UseEffectPropUsedCase;