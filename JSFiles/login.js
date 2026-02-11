
function gotoLogin(){
    window.location.href="pages/login.html";
}

function validateForm(){
    let username = document.getElementById("username").value;
    document.getElementById("usernameError").innerText="";
    if(username==""){
        document.getElementById("usernameError").innerText="Username is required";
        return false;
    }
}