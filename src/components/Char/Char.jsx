import { useContext, useEffect, useRef, useState } from "react"

export const Char = ({c,goToNextChar}) => {
    const [char,setChar]=useState(c)
    const charRef=useRef()
    
    function handleKeyUp(event) {
        const key=event.key
        if(key===c.value)
            c.done='done'
            
        else
            c.done='wrong'
        
        setChar({...c})
        
        goToNextChar()
    }

    useEffect(()=>{
        if(c.now)
        {
            debugger
            charRef.current.focus()
        }

    })

    return (
        <span 
           tabIndex={c.tabIndex}
            ref={charRef}
            onKeyUp={handleKeyUp}
            className={`char ${c.now} ${c.done}`}>
            {c.value}
        </span>
    )
}
