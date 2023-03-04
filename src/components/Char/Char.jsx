import { useContext, useEffect, useRef, useState } from "react"
import { ParagraphContext } from "../Paragraph/Paragraph"
import './Char.css'
export const Char = ({c}) => {
    const paragraph=useContext(ParagraphContext)
    const charRef=useRef()
    const [focused,setFocused]=useState(false)

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
        paragraph.jumbTONextChar(c)
    }

    useEffect(()=>{
        if(c.now)
        {
            charRef.current.focus()
            paragraph.setFocuesdChar(true)
        }
    })

    return (
        <span 
            onBlur={()=>{paragraph.setFocuesdChar(false)}}
            onFocus={()=>paragraph.setFocuesdChar(true)}
            tabIndex={c.now?0:null}
            ref={charRef}
            onKeyUp={handleKeyUp}
            className={`char ${c.now} ${c.done}`}>
            {c.value}
        </span>
    )
}
