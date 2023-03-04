import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Paragraph } from './components/Paragraph/Paragraph'

function App() {
  const quotes = [
    "The best way to predict the future is to invent it.",
    "Don't let yesterday take up too much of today.",
    "If you want to achieve greatness stop asking for permission.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "You miss 100% of the shots you don't take.",
    "Believe you can and you're halfway there.",
    "I have not failed. I've just found 10,000 ways that won't work.",
    "JavaScript is a programming language that is characterized as dynamic, weakly typed, prototype-based and multi-paradigm."
  ];

  const par=quotes[Math.floor(Math.random()*quotes.length)]
  return (
    <div className="App">
        <Paragraph paragraph={par} />
    </div>
  )
}

export default App
