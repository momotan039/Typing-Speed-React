import { useState } from "react";
import { Paragraph } from "../Paragraph/Paragraph";
import './Home.css'
export default function Home() {
  const [paragraphKey,setParagraphKey]=useState(0)
    
  return (
   <div className="home">
   <Paragraph playAgain={()=>setParagraphKey(k=>k+1)} key={paragraphKey}/>
   </div>
  )
}
