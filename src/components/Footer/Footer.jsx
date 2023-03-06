import { useEffect } from "react"
import './Footer.css'
export default function Footer() {
    const year=new Date()
  return (
    <footer>
        <h2>© {year.getFullYear()} Typing Speed</h2>
    </footer>
  )
}
