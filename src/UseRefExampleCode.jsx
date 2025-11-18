import {useRef} from "react"

function UseRefExampleCode() {
    
const inputref = useRef(null);
const h1Ref = useRef(null);
 
function inputHandler(){
    console.log(inputref);
    inputref.current.focus();
    inputref.current.style = "background-color : yellow; color: red ;  font-family : cursive";
    // inputref.current.style["background-color"] =  "yellow";
    // inputref.current.style["color"] = "red";
    // inputref.current.style["font-family"] = "cursive";
}
function toggleHandler(){
    console.log("Toggle button clicked");
    // inputref.current.style.display="none"
    if( inputref.current.style.display==="none"){
        inputref.current.style.display="inline"
    }else{
        inputref.current.style.display="none"
    }
}
function h1Handler(){
    h1Ref.current.innerText="This is updated using useRef hook"
    h1Ref.current.style.color="green"
}
  return (
    <div>
      <h2>UseRef Example Code Component</h2>
      <p>This is an example of using useRef in React.</p>
       <button  onClick={toggleHandler}>Toggle</button>
       <input ref = {inputref} type="text" placeholder="Enter user name"/>
      <button onClick={inputHandler}>Focus on input field</button>
      <h1 ref={h1Ref}>This is component for useref moduel</h1>
      <button onClick={h1Handler}>Update</button>
    </div>
  );
}
export default UseRefExampleCode;