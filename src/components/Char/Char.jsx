import { useContext, useEffect, useRef, useState } from "react"
import { ParagraphContext } from "../Paragraph/Paragraph"
import './Char.css'
export const Char = ({c}) => {
    const paragraph=useContext(ParagraphContext)
    const charRef=useRef()
    const [focused,setFocused]=useState(false)

    function handleKeyDown(event) {
        event.preventDefault()
        const key=event.key

        if( key==='Shift')
        return

        if(key === "Backspace")
        {
            paragraph.jumbTOPreviousChar(c)
            return
        }
        const allowedKeys = /[a-zA-Z0-9 !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
        debugger

        if(!allowedKeys.test(key) || event.ctrlKey || event.altKey ){
            return
        }

        if(key===c.value)
            c.done='done'
        else
            c.done='wrong jello'
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
            onKeyDown={handleKeyDown}
            className={`char ${c.now} ${c.done}`}>
            {c.value}
        </span>
    )
}
