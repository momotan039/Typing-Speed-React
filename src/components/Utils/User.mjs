import {
    saveUserToSorage
} from "./LocalStorage.mjs"

export default class User {
    constructor({email,name,password}) {
        this.name=name
        this.email=email
        this.passowrd=password
        this.topRank= 0
        this.avgSpeed= 0
        this.level=getLevel(this.avgSpeed)
        this.rounds=[]
        debugger
    }
    static update(user,speed){
        //add this round
        user.rounds.push(speed)

        //calculate avg speed
        const sum=user.rounds.reduce((p,c)=>p+c,0)
        user.avgSpeed=sum/user.rounds.length

        //refresh top Rank
        if(user.topRank<speed)
        user.topRank=speed

        //refresh level
        user.level=getLevel(user.avgSpeed)
    }

    static isTopRank(user,speed){
        return user.topRank<speed
    }

}

export const LogOut = (setUser) => {
    saveUserToSorage(null)
    setUser(null)
}

export const LogIn = (user, setUser,navigator) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            debugger
            const u = users.find(f => f.email === user.email && f.password===user.password)
            if (!u) {
                return rej('One of the fileds is incorrect!!')
            }
            setUser(u)
            return res(u)
        }, 2000);
    })
}

export const createAccount=(user)=>{
    debugger
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            const u = users.find(f => f.email === user.email)
            if (u)
                return rej('This User Already Exist')
            const temp=new User(user)
            users.push(temp)
            return res(temp)
        },2000)
    })
}


const getLevel = (speed) => {
    //Beginner 0-24
    //Intermediate 25-30
    //Average 31-41
    //Pro 42-54
    //Expert 55-79
    //Typemaster 80+
        switch (speed) {
            case speed < 25:
                return 'Beginner'
            case speed < 31:
                return 'Intermediate'
            case speed < 42:
                return 'Average'
            case speed < 55:
                return 'Pro'
            case speed < 80:
                return 'Expert'
            default:
                return 'Typemaster'
        }
}

const users = [{
    name: "mohammed",
    email: 'momotaha039@gmail.com',
    password: '123456',
    topRank: 0,
    avgSpeed: 0,
    level: 'Begginer',
    rounds:[]
}]