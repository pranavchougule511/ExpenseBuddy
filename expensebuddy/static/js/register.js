const usernameField = document.querySelector("#floatingName");
const usernameFeedback = document.querySelector(".username-feedback");
const emailField = document.querySelector("#floatingEmail");
const emailFeedback = document.querySelector(".email-feedback");
const usernameSucessOutput  = document.querySelector(".usernameSucessOutput");
const submitBtn = document.querySelector(".submit-btn");



emailField.addEventListener("keyup", (e) => {
    const emailVal= e.target.value;
    console.log("emailVal", emailVal);
   
    emailField.classList.remove("is-valid");
    emailField.classList.remove("is-invalid");
    emailFeedback.style.display ="none";

    if (emailVal.length>0) {
       

        fetch("/authentication/validate-email",{
            body : JSON.stringify({email : emailVal}),
            method:"POST",
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.email_error) {
                submitBtn.disabled = true;
                emailField.classList.add("is-invalid");
                emailFeedback.style.display ="block";
                emailFeedback.innerHTML = `<p>${data.email_error}</p>`
            }
            else{
                submitBtn.removeAttribute("disabled");
                emailField.classList.add("is-valid");
            }
        }); 
    }

});




usernameField.addEventListener("keyup", (e) => {
    const usernameVal= e.target.value;
    console.log("usernameVal", usernameVal);

    usernameField.classList.remove("is-valid");
    usernameField.classList.remove("is-invalid");
    usernameFeedback.style.display ="none";

    if (usernameVal.length>0) {
        usernameSucessOutput.style.display = "block";
        usernameSucessOutput.textContent = `Checking ${usernameVal}`;
        
        fetch("/authentication/validate-username",{
            body : JSON.stringify({username : usernameVal}),
            method:"POST",
        })
        .then(res=>res.json())
        .then(data=>{
            usernameSucessOutput.style.display = "none";
            if (data.username_error) {
                submitBtn.disabled = true;
                usernameField.classList.add("is-invalid");
                usernameFeedback.style.display ="block";
                usernameFeedback.innerHTML = `<p>${data.username_error}</p>`
            }
            else{
                submitBtn.removeAttribute("disabled");
                usernameField.classList.add("is-valid");
            }
        }); 
    }

});