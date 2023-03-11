import { putUser } from "../Utils/Crud.mjs"
import { saveUserToSorage } from "../Utils/LocalStorage.mjs"
import User from "../Utils/User.mjs"

export const cutsomizeWords = (wordIndex, charIndex,words) => {
        words.map((w,i)=>{
            w.chars.map((c,j)=>{
                if(i===wordIndex&&charIndex===j)
                    c.now='now'
            })
        })
        return words
  }

  export const getMainWords = (paragraph) => {
   const words=paragraph.split(' ')
    return words.map((w, i) => {
      if(i<words.length-1)
      w+=' '
      return {
        chars: w.split('').map((c, j) => {
          return {
            value: c,
            now:'',
            done: '',
          }
        }),
      }
    })
  }

 export const removePointerChar=(c,word)=>{
    const char=word.chars.find((f)=>f===c)
    char.now=""    
 }

 
 export const removeStyleChar=(c,word)=>{
    const char=word.chars.find((f)=>f===c)
    char.now=''
    char.done=''   
 }

 export const isFinishParagraph=(words,indexCurrentChar,indexCurrentWord)=>{
if(indexCurrentWord===words.length-1 
    && indexCurrentChar===words[indexCurrentWord].chars.length-1)
return true
return false
 }

 export const calculateSpeed=(correctWord,s)=>{
    return Math.round(correctWord / (s / 60))
 }

 export const isCorrectWord=(word)=>{
    let isCorrect=true
    word.chars.forEach(c => {
        if(c.done!=='done')
        isCorrect=false
    });
    return isCorrect
 }

 export const calculateAccuracy=(correctWord,words)=>{
    return Math.floor((correctWord/words)*100)
 }

 export const onFinishGame=(user,speed,words,correctWords)=>{
    const errors=words.length-correctWords
    const acc=calculateAccuracy(correctWords,words.length)
   User.update(user,speed,acc,errors)
 }


 export const generateParagraph=async()=>{
   //   const quotes = [
   //      "The best way to predict the future is to invent it.",
   //      "Don't let yesterday take up too much of today.",
   //      "If you want to achieve greatness stop asking for permission.",
   //      "The only limit to our realization of tomorrow will be our doubts of today.",
   //      "You miss 100% of the shots you don't take.",
   //      "Believe you can and you're halfway there.",
   //      "I have not failed. I've just found 10,000 ways that won't work.",
   //      "JavaScript is a programming language that is characterized as dynamic, weakly typed, prototype-based and multi-paradigm."
   //    ];
      
   //    const paragraph=quotes[Math.floor(Math.random()*quotes.length)]
   //    return paragraph

    const res=await fetch('https://api.quotable.io/random').then((r)=>r.json())
    return res.content
 }