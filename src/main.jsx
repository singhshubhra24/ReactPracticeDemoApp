import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import User from './User.jsx'
import Counter from './Counter.jsx'
import Skill from './Skill.jsx'
import RadioDropdown from './Radio&dropdown.jsx'
import LoopExample from './Loop.jsx'
import Reusecomponent from './Reusecomponent.jsx'
import Clock from './clock.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App/>

      {/* <User/> */}
      <Counter/>
      <Skill/>
      <RadioDropdown/>
      <LoopExample/>
      <Reusecomponent/>
  </StrictMode>
)
