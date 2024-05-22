import { v4 as uuidv4 } from 'uuid';
const defaultObj = {
    callsLeft: 10,
    history:[]
}
const keyName = 'algodeayuda'

function createObj(problem,error,content){
    const queryId = uuidv4()
    const obj = {
        created: new Date(),
        id:queryId,
        title: problem,
        queryContent:{
            error,
            content
        }
    }
    return obj
}

function addToLocalStorage(obj){
    let mainObj = localStorage.getItem(keyName)
    if(!mainObj){
        mainObj = defaultObj
    }else{
        mainObj = JSON.parse(mainObj)
    }
    mainObj.callsLeft = mainObj.callsLeft-1
    mainObj.history.push(obj)
    localStorage.setItem(keyName,JSON.stringify(mainObj))
    return true
}

function removeFromLocalStorage(uid){
    let mainObj = localStorage.getItem(keyName)
    if(!mainObj){
        mainObj = defaultObj
    }else{
        mainObj = JSON.parse(mainObj)
    }
    mainObj.history = mainObj.history.filter(x=>x.id!=uid)
    localStorage.setItem(keyName,JSON.stringify(mainObj))
    return true
}

function getAllFromLocalStorage(){
    let mainObj = localStorage.getItem(keyName)
    
    if(!mainObj){
        mainObj = defaultObj
    }else{
        mainObj = JSON.parse(mainObj)
    }
    return mainObj.history 
}

function clearLocalStorage(){
    localStorage.removeItem(keyName)
}

export {createObj,addToLocalStorage,clearLocalStorage,getAllFromLocalStorage,removeFromLocalStorage}