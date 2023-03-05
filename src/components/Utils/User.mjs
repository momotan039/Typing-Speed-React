export default class User{
    constructor(){
      
    }
}

export const LogOut=(setUser)=>{
    setUser(null)
}

export const LogIn=(user,setUser,setError)=>{
    const u=users.find(f=>f.email===user.email)
    if(!u)
    {
        setError("User not found")
        return
    }
    setUser(user)
}

const users=[
    {
        name:"mohammed",
        email:'momotaha039@gmail.com',
        passowrd:'123456',
        topRank:0,
        rank:0
    }
]