const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const output = document.getElementById("output");

form.addEventListener("submit", function (refresh) {
    refresh.preventDefault();

    emailError.textContent = "";
    passwordError.textContent = "";
    output.textContent = "";

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    let success = true;

    if (!email.includes("@")) {
        emailError.textContent = "В Email должен быть символ @";
        success = false;
    }

    if (password.length < 6) {
        passwordError.textContent = "Пароль должен быть длинее 6 символов";
        success = false;
    }
    if (!success) return
    output.textContent = "Форма отправлена";
    form.reset();
});