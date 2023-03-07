
export const playCorrectSound=(enabledSound)=>{
    if(!enabledSound)
    return
    const audio=new Audio('/sounds/type1.mp3')
    audio.volume=0.3
    audio.play()
}

export const playWrongSound=(enabledSound)=>{
    if(!enabledSound)
    return
    const audio=new Audio('/sounds/error.wav')
    audio.volume=0.3
    audio.play()
}

export const playConfettiSound=(enabledSound)=>{
    if(!enabledSound)
    return
    const audio=new Audio('/sounds/confetti2.mp3')
    // audio.volume=0.3
    audio.play()
}