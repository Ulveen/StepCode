import * as userController from "../userController/userController.js"

const hide = document.getElementById("popularwrapper")
const hide1 = document.getElementById("popularwrapper2")
const hide2 = document.getElementById("popularwrapper3")
const hide3 = document.getElementById("activetext")
if(!userController.checkLogin()){
    hide1.style.display="none"
    hide2.style.display="none"
    hide3.style.display="none"
}else{
    hide.style.display="none"
}