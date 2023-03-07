import { useContext, useEffect } from 'react'
import Confetti from 'react-confetti'
import './MyConfetti.css'
export default function MyConfetti({playAgain,speed}) {
  return (
    <div className="confetti layer">
        <Confetti/>
        <h1>Congratulations!!</h1>
        <h3>Your typing speed incresed to {speed}WPM</h3>
        <button onClick={playAgain}>Complete Joy</button>
    </div>
  )
}
