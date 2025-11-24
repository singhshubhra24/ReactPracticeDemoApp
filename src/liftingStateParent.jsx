import { useState } from 'react';
import LiftingStateChild1 from './liftingStateChild1.jsx';
import LiftingStateChild2 from './LiftingStateChild2.jsx';

function LiftingStateParent () {
    const [userName,setUserName] = useState("");
 return (
    <div>
        <h1>Lifting State Parent Component</h1>
       < LiftingStateChild1 setUserName = {setUserName} />
       <LiftingStateChild2 user = {userName}/>
    </div>
 )
}
export default LiftingStateParent;