import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Paragraph } from './components/Paragraph/Paragraph'

function App() {
  const [count, setCount] = useState(0)
  // const par="life is short, cherish moments, love deeply, laugh often."
  const par="life"
  return (
    <div className="App">
        <Paragraph paragraph={par} />
    </div>
  )
}

export default App
