import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import 'bootstrap/dist/css/bootstrap.min.css';


// import User from './User.jsx'
import Counter from './Counter.jsx'
import Skill from './Skill.jsx'
import RadioDropdown from './Radio&dropdown.jsx'
import LoopExample from './Loop.jsx'
import Reusecomponent from './Reusecomponent.jsx'
import UseEffectPropUsedCase from './UseEffectPropUsedCase.jsx'
import AppCounterEffectEx from './AppCounterEffectEx.jsx'
import CssStyleExample from './CssStyleExample.jsx'
import Userprofile from './Userprofile.jsx'
import BootstrapDemoExam from './BootstrapDemoExam.jsx'
import UseRefExampleCode from './UseRefExampleCode.jsx'
import UncontrolledComponent from './UncontrolledExample.jsx'
import LiftingStateParent from "./liftingStateParent.jsx"
import UpdatingObjectInState from './UpdatingObjecArraytInState.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App/>

      {/* <User/> */}
      <Counter/>
      <Skill/>
      <UseEffectPropUsedCase/>
      <RadioDropdown/>
      <LoopExample/>
      <Reusecomponent/>
      <AppCounterEffectEx/>
      <CssStyleExample/>
      <Userprofile/>
      <BootstrapDemoExam/>
      <UseRefExampleCode/>
      <UncontrolledComponent/>
      <LiftingStateParent/>/
      <UpdatingObjectInState/>
  </StrictMode>
)
