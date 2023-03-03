import { useContext, useEffect, useState } from 'react'
import { Char } from '../Char/Char'
import './Word.css'
export function  Word  ({word})  {
 
  return (
    <div className="word">
        {
            word.chars.map((c,i)=>{
                return <Char c={c} key={i}/>
            })
        }
    </div>
  )
}
