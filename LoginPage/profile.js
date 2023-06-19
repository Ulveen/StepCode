import * as userController from "../userController/userController.js"

const button = document.getElementById("logout")
button.addEventListener("click", (e)=>{
    e.preventDefault();
    userController.onSignOut();
    window.location = "../LoginPage/login-page.html"
})