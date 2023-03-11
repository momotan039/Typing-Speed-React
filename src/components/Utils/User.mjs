import { postUser } from "./Crud.mjs"
import {
    saveUserToSorage
} from "./LocalStorage.mjs"

export default class User {
    constructor({
        email,
        name,
        password
    }) {
        this.name = name
        this.email = email
        this.password = password
        this.topRank = 0
        this.avgSpeed = 0
        this.level = getLevel(this.avgSpeed)
        this.rounds = []
        this.settings={
            enableSound:true,
            isDarkTheme:true
        }
    }

    static update(user, speed,acc,errors) {
        //add this round
        user.rounds.push({
            speed: speed,
            date: new Date(),
            acc:acc,
            errors:errors
        })

        //calculate avg speed
        const sum = user.rounds.reduce((p, c) => p + c.speed, 0)
        user.avgSpeed = Math.round(sum / user.rounds.length)

        //refresh top Rank
        if (user.topRank < speed)
            user.topRank = speed
        debugger
        //refresh level
        user.level = getLevel(user.avgSpeed)
    }

    static isTopRank(user, speed) {
        return user.topRank < speed
    }

}

export const LogOut = (setUser) => {
    saveUserToSorage(null)
    setUser(null)
}

export const LogIn = (user, setUser,users) => {
    
    return new Promise((res, rej) => {
        setTimeout(() => {
            const u = users.find(f => f.email === user.email && f.password === user.password)
            if (!u) {
                return rej('One of the fileds is incorrect!!')
            }
            setUser(u)
            return res(u)
        }, 2000);
    })
}

export const createAccount = async (user,users) => {
            const u = users.find(f => f.email === user.email)
            if (u)
                return rej('This User Already Exist')
            const temp = new User(user)
            debugger
            const data=await postUser(temp)
            debugger
            users.push(data)
            return res(data)
    }

export const levels=[
    {
        name:'Beginner',
        img:'/images/level1.png',
        range:[0,24]
    },
    {
        name:'Intermediate',
        img:'/images/level2.png',
        range:[25,30]
    },
    {
        name:'Amazing',
        img:'/images/level3.png',
        range:[31,41]
    },{
        name:'Pro',
        img:'/images/level4.png',
        range:[42,55]
    },
    {
        name:'Expert',
        img:'/images/level5.png',
        range:[56,79]
    },
    {
        name:'Typemaster',
        img:'/images/level6.png',
        range:[80,Number.MAX_VALUE]
    }
]
const getLevel = (speed) => {
    //Beginner 0-24
    //Intermediate 25-30
    //Average 31-41
    //Pro 42-54
    //Expert 55-79
    //Typemaster 80+
    return levels.find(l=>speed>=l.range[0]&&speed<=l.range[1])
}
