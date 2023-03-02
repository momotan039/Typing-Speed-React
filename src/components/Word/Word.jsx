import { useContext, useEffect, useState } from 'react'
import { Char } from '../Char/Char'
import './Word.css'
export function  Word  ({word,jumbToNextChar})  {
  debugger
  function getChars(){
    return word.chars;
  }

  let [currentIndexChar,setCurrentIndexChar]=useState(0)
  const [chars,setChars]=useState(getChars(currentIndexChar))
 
  const jumbToNextChar=()=>{
  setCurrentIndexChar(++currentIndexChar)
  const chrs=getChars(currentIndexChar)
  debugger
  setChars(chrs)
 }
 
  return (
    <div className="word">
        {
            chars.map((c,i)=>{
                return <Char goToNextChar={jumbToNextChar} c={c} key={i}/>
            })
        }
    </div>
  )
}
