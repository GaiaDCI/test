function validate() {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    // console.log(email.value);

    let errorMsg = document.getElementById("errorMessage");
    let alertRegisterError = '<div class="alert alert-danger alert-dismissible" role="alert">';

    // default style
    email.style.border = "2px solid green";
    password.style.border = "2px solid green";

    // check email
    if (email.value == "") {
        errorMsg.innerHTML = alertRegisterError + '<strong>Arg!</strong> check the email' + "</div>"
        email.focus(); //for sthe border style
        email.style.border = "3px solid red";
        return false;
    }

    // check password
    if (password.value == "") {
        errorMsg.innerHTML = alertRegisterError + '<strong>Arg!</strong> check the password' + "</div>"
        password.focus(); //for sthe border style
        password.style.border = "3px solid red";
        return false;
    }
    if (password.value.length < 8) {
        errorMsg.innerHTML = alertRegisterError + '<strong>Arg!</strong>password should be min 8 characters' + "</div>"
        password.focus(); //for sthe border style
        password.style.border = "3px solid red";
        return false;
    }
    // if is not empty return true
    return true;
}