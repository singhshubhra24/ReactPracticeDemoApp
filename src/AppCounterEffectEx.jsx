import {useState} from 'react';
import CounterEffect from './CounterEffectExample.jsx' ;     


function AppCounterEffectEx(){
    const [count, setCount] = useState(0)
    const [data, setData] = useState(0)
    const[display,setDisplay] = useState(true)  
    
return (
    <div>
        {/* <h1>This is App Counter Effect Example Component</h1> */}
        {
            display ? <CounterEffect count={count} data={data}/> : null

        }
        <button onClick={()=>{setCount(count+1)}}>Counter</button>
        <button onClick={()=>{setData(data+1)}}>Data</button>
        <button onClick={()=>{setDisplay(!display)}}>Toggle</button>

    </div>
)
}
export default AppCounterEffectEx;