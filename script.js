 var myFunction = function myFunction(){
    alert("welcome😎👌🤩😍😁😂😁 enjoy clicking")
     window.location.href ="login.html"
    }
function myFunction(){
    var data = document.forms["login"]["uName"];
    var email = document.forms["login"]["email"];
    var passWord = document.forms["login"]["pass"];
    if(data.value == ""){
        data.focus()
        document.querySelector('#txt-1').innerHTML="Please enter userName"
        return false;
    }
    if(email.value == ""){
        email.focus()
        document.querySelector('#txt-2').innerHTML="Please enter a valid Email address"
        return false;
    }
    if(email.value.indexOf('@',0)<0 ){
        email.focus()
        document.querySelector('#txt-2').innerHTML="Please enter a Email address must contain '@' "
        return false;
    }
    if(email.value.indexOf('.com',0)<0 ){
        email.focus()
        document.querySelector('#txt-2').innerHTML="Please enter a Email address must contain '.com' "
        return false;
    }
    if(passWord.value == ""){
        PassWord.focus()
        document.querySelector('#txt-3').innerHTML="Please enter a passWord"
        return false;
    }
    if(passWord.value < 8){
        passWord.focus()
        document.querySelector('#txt-3').innerHTML="Please password must not be less than 8 character"
        return false;
    }
    return true;
}