import { checkEmail } from "../userController/userController.js";

const registerForm = document.getElementById('forgot-password-form');
registerForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const errorMsg = document.getElementById('errorMsg')
    errorMsg.style.color = 'red'
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const confirmPassword = document.getElementById('confirm-password').value
    if(!validateEmail(email)){
        errorMsg.style.color = "red";
    }
    else if(password.length == 0){
        errorMsg.innerText = "Password must be filled";
        errorMsg.style.color = "red";
    }
    else if(confirmPassword.length == 0){
        errorMsg.innerText = "Confirm Password must be filled";
        errorMsg.style.color = "red";
    }
    else if(password != confirmPassword){
        errorMsg.innerText = "Password and confirm password does not match";
        errorMsg.style.color = "red";
    }
    else{
        errorMsg.style.color = "blue";
        errorMsg.innerText = "Successfully updated password";
    }
})

function validateEmail(email){
    if(email.length <= 0){
        errorMsg.innerText = "Email must be filled";
        return false;
    }
    else if(!checkEmail(email)){
        errorMsg.innerText = "Email doesn't exists";
        return false;
    }
    return true;
}