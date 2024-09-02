var nam=document.getElementById("name")
var phone=document.getElementById("phone")
var password=document.getElementById("password")
var err1=document.getElementById("name error");
var err2=document.getElementById("phone error");
var err3=document.getElementById("pass error");
var nameregex=/^([a-zA-z]+)$/
var phoneregex=/^([0-9]{10})$/
var passregex=/^([a-zA-Z0-9]+)$/
function namevalid(){
    if (nameregex.test(nam.value)){
        err1.innerText="Valid format"
        err1.style.color="green"
        return true
        
    }
    else{
        err1.innerText="Name must only contain alphabets."
        err1.style.color="red"
        return false
    }


}

function phonevalid(){
    if (phoneregex.test(phone.value)){
        err2.innerText="Valid format"
        err2.style.color="green"
        return true
        
    }
    else{
        err2.innerText="Phone number must only contain numbers."
        err2.style.color="red"
        return false
    }


}


function passvalid(){
    if (passregex.test(password.value)){
        err3.innerText="Valid format"
        err3.style.color="green"
        return true
        
    }
    else{
        err3.innerText="Password must only contain alphabets and numbers."
        err3.style.color="red"
        return false
    }


}