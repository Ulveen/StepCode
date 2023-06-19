import * as userController from "../userController/userController.js"

const loginForm = document.getElementById('login-form');
loginForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const account = document.getElementById("account").value;
    const password = document.getElementById("password").value;
    if(userController.login(account, password)){
        window.location = "../HomePage/index.html"
        console.log("login success");
    }
    else{
        console.log("login failed");
    }
});