function LiftingStateChild1({setUserName}) {
  return (
    <div>
      <h2>Lifting State Child Component 1</h2>
      <input type="text" placeholder="Enter User Name" onChange = {(event)=>{setUserName(event.target.value)} }/>
      {/* <button onClick={props.onIncrement}>Increment Counter</button> */}
    </div>
  );
}
export default LiftingStateChild1;