import { createContext, useEffect, useRef, useState } from "react"
import HiddenInput from "../Hidden Input/HiddenInput"
import { Word } from "../Word/Word"
import './Paragraph.css'


const paragraphObj = {
  jumbToNextChar:null,
  jumbToNextWord:null,
}

// export const ParagraphContext = createContext(paragraphObj)
export function Paragraph({ paragraph }) {

  function getWords(wordIndex,charIndex) {
    return paragraph.split(' ').map((w, i) => {
      const isCurrentWord=wordIndex===i;
      return {
        chars: w.split('').map((c,i)=>{
          return {
            value:c,
            now:isCurrentWord&&charIndex===i?'now':'',
            done:'',
            tabIndex:isCurrentWord&&i===charIndex?0:null,
          }
        }),
        isCurrent: wordIndex===i?true:false
      }
    })
  }

  const [indexCurrent, setIndexCurrent] = useState(0)
  const [indexCurrentChar, setindexCurrentChar] = useState(0)
  const [words, setWords] = useState(getWords(indexCurrent,indexCurrentChar))
  
  // return <div className="paragraph">
  //   {
  //     words.map((w, i) => {
  //       return <Word  word={w} key={i} />
  //     })
  //   }
  // </div>
  return (
    <ParagraphContext.Provider value={}>
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

