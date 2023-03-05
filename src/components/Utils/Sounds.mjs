
export const playCorrectSound=(enabledSound)=>{
    if(!enabledSound)
    return
    const audio=new Audio('/src/assets/sounds/type1.mp3')
    audio.volume=0.3
    audio.play()
}

export const playWrongSound=(enabledSound)=>{
    if(!enabledSound)
    return
    const audio=new Audio('/src/assets/sounds/error.wav')
    audio.volume=0.3
    audio.play()
}