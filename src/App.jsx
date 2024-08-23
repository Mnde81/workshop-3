import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App() {
  

  return (
    <>
    <div className='App'>
      <Card name="Ate pasauli" number={0} isActive={true}/>
      <Card name="Ate pasauli" number={30} isActive={true}/>
      <Card name="Ate pasauli" number={20} isActive={false} />
      <Card name="Ate pasauli" number={10} isActive={false} />
    </div>
      
        
    </>
  )
}

export default App
