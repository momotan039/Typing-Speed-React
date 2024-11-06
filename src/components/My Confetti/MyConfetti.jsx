import { useContext, useEffect } from 'react'
import Confetti from 'react-confetti'
import { SettingsContext } from '../Root'
import { playConfettiSound } from '../Utils/Sounds.mjs'
import './MyConfetti.css'
export default function MyConfetti({ playAgain, speed }) {
  const settings = useContext(SettingsContext)
  useEffect(() => {
    playConfettiSound(settings.enableSound)
  })
  return (
    <div className="confetti layer">
      <Confetti />
      <div className="card">
        <h1>Congratulations!!</h1>
        <h3>Your typing speed incresed to {speed}WPM</h3>
        <button onClick={playAgain}>Complete Joy</button>
      </div>
    </div>
  )
}
