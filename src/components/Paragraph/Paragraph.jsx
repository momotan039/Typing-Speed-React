import { createContext, useContext, useEffect, useRef, useState } from "react"
import { Word } from "../Word/Word"
import { removePointerChar, cutsomizeWords, getMainWords, removeStyleChar, isFinishParagraph, calculateSpeed, isCorrectWord as countCorrectChars, isCorrectWord, calculateAccuracy, generateParagraph } from "./HelperParagraph.mjs"
import './Paragraph.css'

const paragraphObj = {
  jumbTOPreviousChar: null,
  jumbTONextChar: null,
  wordIndex: 0,
  charIndex: 0,
  lastChar: null,
  startTimer: false,
}

export const ParagraphContext = createContext(paragraphObj)
export function Paragraph() {
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
  
  const paragraph=quotes[Math.floor(Math.random()*quotes.length)]

  const [indexCurrentWord, setIndexCurrentWord] = useState(0)
  const [indexCurrentChar, setindexCurrentChar] = useState(0)
  // const [mainWords, setMainWords] = useState(getMainWords(paragraph))
  const [mainWords, setMainWords] = useState([])
  const words = cutsomizeWords(indexCurrentWord, indexCurrentChar, mainWords)
  const [idTimer, setTimer] = useState(-1)
  const [seconds, setSeconds] = useState(0)
  const [finishGame, setFinishGame] = useState(false)
  const [correctWords, setCorrectWords] = useState(0)
  useEffect(()=>{
    generateParagraph().then((res)=>{
      setMainWords(getMainWords(res))
    })
  },[])
  return (
    <ParagraphContext.Provider value={{
      ...paragraphObj,
      jumbTONextChar: (c) => {
        if (!indexCurrentChar && !indexCurrentWord) {
          setTimer(setInterval(() => {
            setSeconds((s) => s + 1)
          }, 1000))
        }

        //remove pointer from current char
        removePointerChar(c, mainWords[indexCurrentWord])
        const lengthWord = words[indexCurrentWord].chars.length
        setindexCurrentChar((i) => ++i)

        // check if the last char in word
        if (lengthWord - 1 === indexCurrentChar) {
          //check if the whole word is correct
          if (isCorrectWord(words[indexCurrentWord]))
            setCorrectWords(correctWords + 1)
          setIndexCurrentWord((i) => ++i)
          setindexCurrentChar(0)
        }
        //check finish Paragraph
        if (isFinishParagraph(words, indexCurrentChar, indexCurrentWord)) {
          clearInterval(idTimer)
          setFinishGame(true)
        }
      },
      jumbTOPreviousChar: (c) => {
        removeStyleChar(c, mainWords[indexCurrentWord])
        if (!indexCurrentChar && !indexCurrentWord) {
          setMainWords([...mainWords])
          return
        }
        setindexCurrentChar((i) => --i)
        // check if on start of word
        if (indexCurrentChar === 0) {
          setIndexCurrentWord((i) => {
            const lengthWord = words[i - 1].chars.length
            //puted this here not outside, to solve the delay
            setindexCurrentChar(() => lengthWord - 1)
            return i - 1
          })
        }
      }
    }}>
      <div>
        <h1>seconds:{seconds}</h1>
        <div className="paragraph">
          {
            words.map((w, i) => {
              return <Word word={w} key={i} />
            })
          }
        </div>
        <br /><br />
        {
          finishGame &&
          <>
            <h1>WPM:{calculateSpeed(correctWords, seconds)}</h1>
            <h1>Acc:{calculateAccuracy(correctWords, words.length)}%</h1>
          </>
        }
      </div>
    </ParagraphContext.Provider>
  )
}

