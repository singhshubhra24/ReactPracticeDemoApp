function PropExamCom({user}){
    return(
    <div>
        <hr/>
        <h1> This is Prop Example Component </h1>
        <h1> My name is {user.name} </h1>
        <h1> My age is {user.age} </h1>
        <h1> My Address is {user.address} </h1>
    </div>
    )
}
export default PropExamCom;