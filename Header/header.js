import { checkLogin } from "../userController/userController.js"

document.addEventListener("DOMContentLoaded", function() {
    if(checkLogin()){
        fetch("../Header/Header_after.html").then(response => response.text()).then(data => {
            const headerElement = document.createElement("div");
            headerElement.innerHTML = data;
            document.body.insertBefore(headerElement, document.body.firstChild);
            document.dispatchEvent(new Event("headerLoaded"));
        })
    }
    else{
        fetch("../Header/Header_before.html").then(response => response.text()).then(data => {
            const headerElement = document.createElement("div");
            headerElement.innerHTML = data;
            document.body.insertBefore(headerElement, document.body.firstChild);
            document.dispatchEvent(new Event("headerLoaded"));
        });
    }
});