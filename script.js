const pwf = document.querySelector("#password");
const pwvf = document.querySelector("#password-verify");
const submitButton = document.querySelector("button[type='submit']");
const pwdiv = document.querySelector(".password-f");
const err = document.createElement("div");
err.classList.add("error");
err.innerText = "* Passwords do not match";

function checkPWV() {
    return (pwf.value === pwvf.value);
}

submitButton.addEventListener("click", (e) => {
    if (!checkPWV()) {
        e.preventDefault();
        pwdiv.appendChild(err);
    }
});