export const cutsomizeWords = (wordIndex, charIndex,words) => {
        words.map((w,i)=>{
            w.chars.map((c,j)=>{
                if(i===wordIndex&&charIndex===j)
                    c.now='now'
            })
        })
        return words
    // return paragraph.split(' ').map((w, i) => {
    //   const isCurrentWord = wordIndex === i;
    //   return {
    //     chars: w.split('').map((c, j) => {
    //       return {
    //         value: c,
    //         now: isCurrentWord && charIndex === j ? 'now' : '',
    //         done: '',
    //       }
    //     }),
    //     isCurrent: wordIndex === i ? true : false
    //   }
    // })
  }

  export const getMainWords = (paragraph) => {
    return paragraph.split(' ').map((w, i) => {
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
    return Math.floor(correctWord / (s / 60))
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