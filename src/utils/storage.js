export const setStorage=(key, data)=>{
    let dataType = typeof data;
    if(dataType === 'object'){
        window.localStorage.setItem(key, JSON.stringify(data));
    }
    else if(['number','string','boolean'].indexOf(dataType) >= 0){
        window.localStorage.setItem(key, data);
    }
    else{
        return null;
    }
}

export const getStorage=(key)=>{
    let data = window.localStorage.getItem(key);
    if(data){
        return data;
    }
    else{
        return null;
    }
}

export const removeStorage=(key)=>{
    window.localStorage.removeItem(key);
}