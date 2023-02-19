import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import List from './components/List'
import RicoPic from './assets/Rico.avif'
import JuliusPic from './assets/Julius.avif'
import CornflakePic from './assets/Cornflake.avif'

function App() {
  const [count, counterSetter] = useState(0);
  const pets = [
    {name: 'Julius', image: JuliusPic, caption:'savoring the aftertaste of his last meal.'},
    {name: 'Rico', image: RicoPic, caption: 'gazing suspiciously at you. What do you want?'},
    {name: 'Cornflake', image: CornflakePic, caption: 'forlornly wondering when he can lounge somewhere he can call home. Can you help?'}
  ];
  return (
    
    <div className="App">
      <List items={pets}/>
    </div>
  )
}

export default App
