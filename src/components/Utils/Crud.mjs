//temp mail bikomo3441@terkoer.com
//pass:B123456
const API='https://640b209a81d8a32198da9453.mockapi.io/users'

export const getUsers=async ()=>{
return await fetch(API).then(data=>data.json())
}


export const getUser=async (id)=>{
    return  await fetch(API+'/'+id).then(data=>data.json())
}

    
export const putUser=async(id,user)=>{
    return  await fetch(API+'/'+id,{
        method:'PUT',
        body:JSON.stringify(user),
        headers:{
        'Content-Type':'application/json'
     }
    }).then(data=>data.json())
}

export const postUser=async(user)=>{
    return await fetch(API,{
        method:'POST',
        body:JSON.stringify(user),
        headers:{
        'Content-Type':'application/json'
     }
    }).then(data=>data.json())
}

export const deleteUser=async (id)=>{
    return await fetch(API+'/'+id,{
        method:'DELETE',
    }).then(data=>data.json())
}
