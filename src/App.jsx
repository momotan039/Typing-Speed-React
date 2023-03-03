import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Paragraph } from './components/Paragraph/Paragraph'

function App() {
  const par="life is short"
  return (
    <div className="App">
        <Paragraph paragraph={par} />
    </div>
  )
}

export default App
