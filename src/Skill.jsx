
import {useState} from 'react';
function Skill(){
    const [skills, setSkills] = useState([]);
    const handleSkills =(event)=>{
        console.log(event.target.value, event.target.checked)
        if(event.target.checked){
            setSkills([...skills,event.target.value])
        }else{
            let newSkills = skills.filter((item)=> item !== event.target.value)
            console.log(newSkills);
            setSkills(newSkills)   
        }
    }
 return(
    <div>
     <h1>This is React Checkbox Component</h1>
    <input onChange={handleSkills} type ="checkbox" id="html" value="html"/>
        <label htmlFor="html">HTML</label>
    
    <input onChange={handleSkills} type ="checkbox" id="php" value="php"/>
        <label htmlFor="php">PHP</label>
    
    <input onChange={handleSkills} type ="checkbox" id="js" value="js"/>
        <label htmlFor="js">JS</label>

        <h1>{skills.join(", ") || "None"}</h1>
    </div>
)

}
export default Skill;