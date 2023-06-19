import * as userController from "../userController/userController.js"

const registerForm = document.getElementById('register-form');
registerForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const errorMsg = document.getElementById('errorMsg')
    errorMsg.style.color = 'red'
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const phonenumber = document.getElementById('phone-number').value
    const password = document.getElementById('password').value
    let valid = true
    if(!validateName(name)){
        errorMsg.style.color = 'red'
        valid = false
    }
    else if(!validateEmail(email)){
        errorMsg.style.color = 'red'
        valid = false
    }
    else if(!validatePhoneNumber(phonenumber)){
        errorMsg.style.color = 'red'
        valid = false
    }
    else if(!validatePassword(password)){
        errorMsg.style.color = 'red'
        valid = false
    }
    if(valid){
        errorMsg.style.color = 'blue'
        errorMsg.innerText = 'Successfully created account'
        const object = {name: name, email: email, phoneNumber: phonenumber, password: password
        }
        userController.addUser(object);
        delay("../HomePage/index.html");
        userController.onLogin(object);
    }
})

function delay (URL) {
    setTimeout( function() { window.location = URL }, 3000 );
    let hide = document.getElementById('back');
    let show = document.getElementById('loading')
    hide.style.display = 'none';
    show.style.display = 'block';
}

const validateName = (name)=>{
    if(name.length >= 5 && name.length <= 25){
        return true
    }
    errorMsg.innerText = 'Name length must be between 5-25 characters'
    return false
}

const validateEmail = (email)=>{
    if(email.length <= 0){
        errorMsg.innerText = 'Invalid email'
        return false
    }
    if(userController.checkEmail(email)){
        errorMsg.innerText = 'Email already taken'
        return false
    }
    return true
}
    
const validatePhoneNumber = (phoneNumber)=>{
    if(phoneNumber.length < 12 || phoneNumber.length > 14){
        errorMsg.innerText = 'Phone number must have 10-12 digits'
        return false
    }
    
    if(phoneNumber.substring(0, 3) != "+62"){
        errorMsg.innerText = 'Phone number must start with +62'
        return false
    }
    for(let i = 1; i < phoneNumber.length; i++){
        if(phoneNumber[i] < '0' || phoneNumber[i] > '9'){
            errorMsg.innerText = 'Phone number must be numeric'
            return false
        }
    }
    return true
}

const validatePassword = (password)=>{
    if(password.length < 8){
        errorMsg.innerText = 'Password must be at least 8 characters'
        return false
    }
    let alpha = false
    let numeric = false
    for(let i = 0; i < password.length; i++){
        if(password[i].toUpperCase() >= 'A' && password[i].toUpperCase() <= 'Z'){
            alpha = true
        }
        else if(password[i] >= '0' && password[i] <= '9'){
            numeric = true
        }
    }
    if(!alpha || !numeric){
        errorMsg.innerText = 'Password must be alphanumeric'
        return false
    }
    return true
}