export function getUsers(){
    const rawData = localStorage.getItem("users");
    if(rawData == null){
        return null;
    }
    const parsedData = JSON.parse(rawData);
    if(Array.isArray(parsedData)){
        let temp = [];
        parsedData.forEach((data)=>{
            temp.push(data);
        })
        return temp;
    }
    return parsedData;
}

export function addUser(newUser){
    const userList = getUsers();
    if(userList == null){
        localStorage.setItem("users", JSON.stringify(newUser));
        return;
    }
    let temp = [];
    if(Array.isArray(userList)){
        userList.forEach((user)=>{
            temp.push(user);
        })
        temp.push(newUser);
        localStorage.setItem("users", JSON.stringify(temp))
        return;
    }
    temp.push(newUser)
    temp.push(userList)
    localStorage.setItem("users", JSON.stringify(temp))
}

export function checkEmail(email){
    let emailTaken = false;
    const userList = getUsers();
    if(userList != null){
        if(Array.isArray(userList)){
            userList.forEach(user => {
                if(user.email == email){
                    emailTaken =  true
                }
            })
        }
        else if(userList.email == email){
            emailTaken = true
        }
    }
    return emailTaken;
}

export function updatePassword(email, password){
    let userList = getUsers();
    if(Array.isArray(userList)){
        userList.forEach((user)=>{
            if(user.email == email){
                user.password = password;
            }
        })
    }
    else if(userList.email == email){
        userList.password = password;
    }
    localStorage.setItem("users", userList);
}

export function onLogin(user){
    localStorage.setItem("logged", JSON.stringify(user));
}

export function onSignOut(){
    console.log("HOHOHOHOHO");
    localStorage.removeItem("logged")
}

export function checkLogin(){
    const logged = localStorage.getItem("logged")
    if(logged === null){
        return false;
    }
    return true;
}

export function getCurrentUser(){
    const user = localStorage.getItem("logged")
    return JSON.parse(user);
}

export function login(account, password){
    const userList = getUsers();
    if(userList == null){
        return false;
    }
    if(Array.isArray(userList)){
        userList.forEach((user)=>{
            console.log(user);
            if(user.email == account || user.phoneNumber == account){
                if(password == user.password){
                    console.log("hai");
                    onLogin(user)
                    return true;
                }
                console.log("incorrect password");
            }
        })
    }
    if((userList.email == account) || (userList.phonenumber == account)){
        if(password == userList.password){
            onLogin(userList)
            return true;
        }
    }
    return false;
}