import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './User';
import PropExamCom from './PropExamCom';
import College from './College';
import Student from './Student';
import Clock from './clock';


function App() {
  let userObject = {
    name: "Shubhra Singh",
    age: 30,
    address: "Delhi, India"
  }
  let userObject2 = {
    name: "John Doe",
    age: 25,
    address: "New York, USA"
  }
  let collegeNames = ["ABC College", "XYZ University", "LMN Institute"];
  const [student, setStudent] = useState("");
  // let studentNames = ["Shubhra Singh", "John Doe", "Jane Smith"];
  const [display, setDisplay] = useState(false);
  const [fruit, setFruit] = useState("Mango");
  const [val, setValue] = useState("Anil yadav")
  const[name, setName] = useState("")
  const[password, setPassword] = useState("")
  const[email, setEmail] = useState("")
  const [color,setColor] = useState("Red")

  const handleFruit = () => {
    setFruit("Orange");
}
  const handlevalue=()=>{
    setValue("Anil Yadav")
  }
  const handleColorChange=(event)=>{
    console.log(event.target.value)
    setColor(event.target.value)
  }
  return (
    <> 
    <div>
      <h1>This is my react component</h1>
      <h1> {fruit}</h1>
      <button onClick={handleFruit}>Change Fruit Name</button>
    </div>
    <h1>This is the Toggle in React js</h1>
    <h1>Shubhra Singh</h1>
    <button onClick={() => setDisplay(!display)}>Toggle</button>
    {
      display ? <User/>: null
    }
    <h1>Props component</h1>
    <PropExamCom user={userObject}/>
    <PropExamCom user={userObject2}/>

    { student && <Student name = {student}/>  }   

    <button onClick={()=>{setStudent("Shubhra Singh")}}>Update Student Name</button>
     <College name={collegeNames[0]}/>
    <College name={collegeNames[1]}/>
    <College name={collegeNames[2]}/>
    <input type="text" value={val} onChange={(event)=>{setValue(event.target.value)}} name="username" placeholder="Enter user name"/>
    <h1> {val} </h1>
    <button onClick={()=>{handlevalue}}> Clear Name </button>

    <h1>This is example of controlled component</h1>
    <form action="" method="get">
      <input onChange={(event)=>{setName(event.target.value)}} value={name} type="text" placeholder="enter user name"></input>
       <br/><br/>
      <input onChange={(event)=>{setPassword(event.target.value)}} value={password} type="password" placeholder="enter password"></input>
       <br/><br/>
      <input onChange={(event)=>{setEmail(event.target.value)}} value={email} type="email" placeholder="enter email"></input>
        <br/><br/>

        <h1>{name}</h1>
        <h1>{password}</h1>
        <h1>{email}</h1>

      <button>Submit</button>
      <button onClick={()=>{setName(""), setEmail(""), setPassword("")}}>Clear</button>
    </form>
    <div>
      <h1>Digital Clock in React JS</h1>
      <select onChange = {handleColorChange} defalutValue = {"Choose ur Color "}>
        <option value = {"red"} style={{ color: "red" }}>Red</option>
        <option value ={"green"} style={{ color: "green" }}>Green</option>
        <option value ={"blue"} style={{ color: "blue" }}>Blue</option>
        <option value ={"orange"} style={{ color: "orange" }}>Orange</option>
      </select>
      <Clock color={color}/>
    </div>
  </> 
  )
}

export default App
