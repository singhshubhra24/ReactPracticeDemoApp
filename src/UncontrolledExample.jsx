import {useRef} from "react";

function UncontrolledComponent(){

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);


    function handleForm(event){
        event.preventDefault();
        const email = document.querySelector("#email").value;
        const name = document.querySelector("#name").value;
        const password = document.querySelector("#password").value;
        console.log("Form submitted",email, name, password );
    }
    function handleFormRef(event){
          event.preventDefault();
          const emailR = emailRef.current.value;
          const nameR = nameRef.current.value;
          const passwordR = passwordRef.current.value; 
          console.log("Form submitted using useRef",nameR, emailR, passwordR);
    }
    return (
        <>
        <h2>Uncontrolled Component Example</h2>
        <p>In React, an uncontrolled component is a component that manages its own state internally rather than relying on React to handle state updates. Uncontrolled components are typically used for simple form inputs where you don't need to track the input's value in real-time.</p>
        <form action="" method="post" onSubmit={handleForm}>
            <input id="name" placeholder="enter your name" type = "text"/>
            <br/>
            <input id="email" placeholder="enter your email" type = "email"/>
            <br/>
            <input id="password" placeholder="enter your password" type = "password"/>
            <br/>
            <button>Submit</button> 
        </form>
        <br/>
        <h2>Uncontrolled Component Example with useRef</h2>
        <p>In React, an uncontrolled component is a component that manages its own state internally rather than relying on React to handle state updates. Uncontrolled components are typically used for simple form inputs where you don't need to track the input's value in real-time.</p>
        <form action="" method="post" onSubmit={handleFormRef}>
            <input ref = {nameRef}  placeholder="enter your name" type = "text"/>
            <br/>
            <input ref = {emailRef} placeholder="enter your email" type = "email"/>
            <br/>
            <input ref = {passwordRef} placeholder="enter your password" type = "password"/>
            <br/>
            <button>Submit</button> 
        </form>


        </>
    )

}
export default  UncontrolledComponent;