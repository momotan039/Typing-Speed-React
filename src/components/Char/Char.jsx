import { useContext, useEffect, useRef, useState } from "react"
import { ParagraphContext } from "../Paragraph/Paragraph"
import './Char.css'
export const Char = ({c}) => {
    const paragraph=useContext(ParagraphContext)

    const charRef=useRef()
    
    function handleKeyUp(event) {
        const key=event.key
        if(key==='Shift')
        return
        if(key === "Backspace")
        {
            paragraph.jumbTOPreviousChar(c)
            return
        }
        if(key===c.value)
            c.done='done'
        else
            c.done='wrong'
        paragraph.lastChar=c
        paragraph.jumbTONextChar(c)
    }

    useEffect(()=>{
        if(c.now)
        {
            charRef.current.focus()
        }
    })

    return (
        <span 
            tabIndex={c.now?0:null}
            ref={charRef}
            onKeyUp={handleKeyUp}
            className={`char ${c.now} ${c.done}`}>
            {c.value}
        </span>
    )
}
