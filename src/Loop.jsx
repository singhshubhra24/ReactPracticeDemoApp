import Reusecomponent from './Reusecomponent.jsx';
function LoopExample(){
//   const person = [John,lucy,mary,james];
  const userData =[{
    name: "Anil",
    age: 29,
    email: "anil@test.com",
    id: 1,
  },
  {
    name: "Sam",
    age: 36,
    email: "sam@test.com",
    id: 2,
  },
  {
    name: "Peter",
    age: 20,
    email: "peter@test.com",
    id: 3,
  },
  {
    name: "Bruce",
    age: 50,
    email: "bruce@test.com",
    id: 4,
  },
] 
  return(
    <div>
        <h1>Loop Example in React js</h1>
        {/* {person.map((item, index)=> <h2 key={index}> {index} : {item} </h2>) */}
        {/* } */}
        {userData
        // .filter((user) => user !== null && user !== undefined)
        .filter(Boolean) // Remove null/undefined values
        .map((item)=>{
          return (
            <Reusecomponent key={item?.id||index} name={item?.name} age={item?.age} email={item?.email} id={item.id} />
          )
        }
      )    // userData.map()
            // (item)=> <h2 key={item.id}> 
            // {item.id} : {item.name} : {item.age} : {item.profession} </h2>)/
    }
  </div>
  )
}
export default LoopExample;