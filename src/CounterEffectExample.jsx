import {useState} from 'react';
import {useEffect} from 'react'


function CounterEffect({count, data}){

    const handlerCounter = ()=>{
        console.log("Button Clicked Again and Again on Counting")    
    }
     const handlerData = ()=>{
        console.log("Button Clicked Again and Again on Data Fetching")    
    }
//we can achieve life cycle of React by using useEffect hook in functional component
// we can reduce the side effect of props by using useEffect hook in functional component
useEffect(() => {
    handlerCounter();
}, [count]); // Only re-run the effect if count changes

useEffect(()=>{
    handlerData();
}, [data]); // Only re-run the effect if data changes

// life cycle demo in React via codes

useState(()=>{
    console.log("This is useState initial render, mounting data to render on DOM")
},[])   // Only run on the first render or on mounting the data on dom, similar to componentDidMount()

useState(()=>{
    console.log("Update count only")
},[count])   // run on the first render or on mounting the data on dom and also when count or data(update) changes, similar to componentDidUpdate()

useEffect(()=>{
    return()=>{
        console.log("This is unmounting phase, component will unmount now")
    }
},[])   // run on the unmounting phase, similar to componentWillUnmount(), run on toggle button click


return (
    <div>
        <h2>This is Counter Component using useEffect to reduce props sideEffect</h2>
        <h4>Counter Value {count}</h4>
        <h4>Data Value {data}</h4>
     </div>
 )
}
export default CounterEffect;