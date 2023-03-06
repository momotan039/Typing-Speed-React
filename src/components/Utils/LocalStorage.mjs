
export function saveUserToSorage(user){
localStorage.setItem('user',JSON.stringify(user))
}

export function getUserFromSorage(){
    return JSON.parse(localStorage.getItem('user'))
}