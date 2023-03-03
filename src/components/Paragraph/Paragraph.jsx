import { createContext, useEffect, useRef, useState } from "react"
import HiddenInput from "../Hidden Input/HiddenInput"
import { Word } from "../Word/Word"
import './Paragraph.css'

const paragraphObj = {
  jumbTOPreviousChar:null,
  jumbTONextChar:null,
  wordIndex:0,
  charIndex:0
}

export const ParagraphContext = createContext(paragraphObj)
export function Paragraph({ paragraph }) {
  
  function getWords(wordIndex,charIndex) {
    return paragraph.split(' ').map((w, i) => {
      const isCurrentWord=wordIndex===i;
      return {
        chars: w.split('').map((c,j)=>{
          return {
            value:c,
            now:isCurrentWord&&charIndex===j?'now':'',
            done:'',
          }
        }),
        isCurrent: wordIndex===i?true:false
      }
    })
  }

  const [indexCurrentWord, setIndexCurrentWord] = useState(0)
  const [indexCurrentChar, setindexCurrentChar] = useState(0)
  const [lastChar,setLastChar]=useState(null)
  const words=getWords(indexCurrentWord,indexCurrentChar)  
  return (
    <ParagraphContext.Provider value={{
      ...paragraphObj,
      jumbTONextChar:(char)=>{
        const lengthWord=words[indexCurrentWord].chars.length
        setindexCurrentChar((i)=>++i)
        if(lengthWord-1===indexCurrentChar)
          {
            setIndexCurrentWord((i)=>++i)
            setindexCurrentChar(0)
          }
      },
      jumbTOPreviousChar:()=>{
        if(!indexCurrentChar&&!indexCurrentWord)
        return
        setindexCurrentChar((i)=>--i)
        // check if on start of word
        if(indexCurrentChar===0)
          {
            setIndexCurrentWord((i)=>{
              const lengthWord=words[i-1].chars.length
              //puted this here not outside, to solve the delay
              setindexCurrentChar(()=>lengthWord-1)
              return i-1
            })
          }
      }
    }}>
      <h1>{indexCurrentChar}</h1>
      <div className="paragraph">
        {
          
          words.map((w, i) => {
            return <Word word={w} key={i} />
          })
        }
      </div>
    </ParagraphContext.Provider>
  )
}

