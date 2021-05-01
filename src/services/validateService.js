export const validateEmail = email => {
    let emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegEx.test(email)) 
        return false;
    else    
        return true;
};

export const validatePassword = password => {
    let passwordRegEx = /^(?=.*[0-9])(?=.*[A-Z]).{8,10}$/;
    if (!passwordRegEx.test(password)) 
        return false;
    else
        return true;
}
export const validateUsername = username => {
    let usernameRegEx = /^(?=.*[A-Za-z\u0590-\u05fe])+[A-Za-z0-9\u0590-\u05fe]+(?:[_-][A-Za-z0-9\u0590-\u05fe]+)*$/
    if (!usernameRegEx.test(username) || username.length<4 || username.length>10) 
        return false;
    else
        return true;
}

export const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

export const loadFromLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
}

export const removeFromLocalStorage = (key) => {
    localStorage.removeItem(key)
}