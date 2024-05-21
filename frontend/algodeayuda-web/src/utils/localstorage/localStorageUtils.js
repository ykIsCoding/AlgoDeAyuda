const defaultObj = {
    callsLeft: 10,
    history:[]
}
const keyName = 'algodeayuda'


function addToLocalStorage(obj){
    let mainObj = localStorage.getItem(keyName)
    if(!mainObj){
        mainObj = defaultObj
    }
    mainObj.callsLeft = mainObj.callsLeft-1
    mainObj.history.push(obj)
    localStorage.setItem(keyName,mainObj)
    return true
}

function removeFromLocalStorage(uid){
    let mainObj = localStorage.getItem(keyName)
    if(!mainObj){
        mainObj = defaultObj
    }
    mainObj.history = mainObj.history.filter(x=>x.id!=uid)
    localStorage.setItem(keyName,mainObj)
    return true
}

function getAllFromLocalStorage(){
    let mainObj = localStorage.getItem(keyName)
    if(!mainObj){
        mainObj = defaultObj
    }
    return mainObj.history 
}

function clearLocalStorage(){
    localStorage.removeItem(keyName)
}

export {addToLocalStorage,clearLocalStorage,getAllFromLocalStorage,removeFromLocalStorage}