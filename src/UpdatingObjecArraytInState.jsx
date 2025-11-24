import { useState } from "react";
import { useRef } from "react";

function UpdatingObjectInState(){
    const [data, setData] = useState(
        { 
        name: "John",
            address: {
                city: "varanasi", 
                state: "UP"
            } 
        }
    );
    const [dataArry, setDataArray] = useState([
        "Seema",
        "Anil",
        "Ravi"  
    ]);
    const [item,setItem] = useState("");

    const inputRef = useRef(null);
    
    const handleName = (val)=>{
        console.log(val)
        data.name = val;
        setData({...data});
        // setUser({ ...user, name: val });
    }
    const handleCity = (val) =>{
        console.log(val)
        data.address.city =  val;
        // data.address.city = val;  // This is incorrect as it mutates the state directly
        setData({
            ...data,
            // address: {...data.address}  if we already set city value then dont need this line
        });
    }  
    const setDisplayArray = (val)=>{
        console.log(val)
        dataArry.push(val);
        setDataArray([...dataArry]);

        // dataArry[dataArry.length-1]= val;
        // dataArry.push(val);  // This is incorrect as it mutates the state directly
        // setDataArray([...dataArry]);
    } 
 
    return(
        <div>
            <div>
                <h1>Updating Object in State Example</h1>
                <p>In this example, we will demonstrate how to update an object in the state using the useState hook in React. 
                    When updating an object, it's important to create a new object with the updated properties instead of mutating the existing object directly. 
                    This ensures that React can properly detect changes and re-render the component as needed.
                </p>
                <input placeholder="Update name" type="text" onChange={(event)=>{handleName(event.target.value)}}/>
                <input placeholder="Update City" type="text" onChange={(event)=>{handleCity(event.target.value)}}/>
                <h3>Name: {data.name}</h3>
                <h3>City: {data.address.city}</h3>
                <h3>State: {data.address.state}</h3>
            </div>
            <div>
                <h1>Updating Array in State Example</h1>
                <p>In this example, we will demonstrate how to update an array in the state using the useState hook in React. 
                    When updating an array, it's important to create a new array with the updated elements instead of mutating the existing array directly.
                    This ensures that React can properly detect changes and re-render the component as needed.
                </p>
                {/* <input placeholder="Add item to array" type="text" onChange={(event)=>{setDisplayArray(event.target.value)}}/> */}
                {/* <input placeholder="Add item to array" type="text" onChange={(event)=>{setItem(event.target.value)}}/> */}
                <input ref={inputRef} placeholder="Add item to array" type="text" />
                <button onClick={()=>{setDisplayArray(inputRef.current.value)}}>Update Name</button>
                {/* <h3>Display Array Items: {dataArry.join(", ")}</h3> */}

                {
                    dataArry.map((item)=>(<h3>Display User Names:-{item}</h3>))
                    
                }            
            </div>
        </div>
    )
}
export default UpdatingObjectInState;