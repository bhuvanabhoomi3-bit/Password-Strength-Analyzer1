const passwordInput = document.getElementById("password");

passwordInput.addEventListener("input", checkPassword);

function checkPassword() {

    const password = passwordInput.value;

    const length = document.getElementById("length");
    const uppercase = document.getElementById("uppercase");
    const lowercase = document.getElementById("lowercase");
    const number = document.getElementById("number");
    const special = document.getElementById("special");

    const strengthText = document.getElementById("strength-text");
    const strengthProgress = document.getElementById("strength-progress");
    const suggestion = document.getElementById("suggestion");

    let score = 0;

    // Check password length
    if (password.length >= 8) {
        length.textContent = "✅ At least 8 characters";
        score++;
    } else {
        length.textContent = "❌ At least 8 characters";
    }

    // Check uppercase letter
    if (/[A-Z]/.test(password)) {
        uppercase.textContent = "✅ Contains uppercase letter";
        score++;
    } else {
        uppercase.textContent = "❌ Contains uppercase letter";
    }

    // Check lowercase letter
    if (/[a-z]/.test(password)) {
        lowercase.textContent = "✅ Contains lowercase letter";
        score++;
    } else {
        lowercase.textContent = "❌ Contains lowercase letter";
    }

    // Check number
    if (/[0-9]/.test(password)) {
        number.textContent = "✅ Contains a number";
        score++;
    } else {
        number.textContent = "❌ Contains a number";
    }

    // Check special character
    if (/[^A-Za-z0-9]/.test(password)) {
        special.textContent = "✅ Contains special character";
        score++;
    } else {
        special.textContent = "❌ Contains special character";
    }

    // Calculate strength
    if (password.length === 0) {

        strengthText.textContent = "Not Checked";
        strengthProgress.style.width = "0%";
        strengthProgress.style.backgroundColor = "#ddd";
        suggestion.textContent =
        "Enter a password to get suggestions.";

    } else if (score <= 1) {

        strengthText.textContent = "Very Weak";
        strengthProgress.style.width = "20%";
        strengthProgress.style.backgroundColor = "red";

        suggestion.textContent =
            "Use more characters, uppercase letters, numbers and special characters.";

    } else if (score === 2) {

        strengthText.textContent = "Weak";
        strengthProgress.style.width = "40%";
        strengthProgress.style.backgroundColor = "orange";

        suggestion.textContent =
            "Try adding uppercase letters, numbers and special characters.";

    } else if (score === 3) {

        strengthText.textContent = "Medium";
        strengthProgress.style.width = "60%";
        strengthProgress.style.backgroundColor = "gold";

        suggestion.textContent =
            "Good start! Add more characters and a special character.";

    } else if (score === 4) {

        strengthText.textContent = "Strong";
        strengthProgress.style.width = "80%";
        strengthProgress.style.backgroundColor = "green";

        suggestion.textContent =
            "Strong password! Consider making it longer for better security.";

    } else {

        strengthText.textContent = "Very Strong";
        strengthProgress.style.width = "100%";
        strengthProgress.style.backgroundColor = "darkgreen";

        suggestion.textContent =
            "Excellent! Your password meets all the basic strength requirements.";
    }
}


// Show / Hide password
function togglePassword() {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";

    } else {

        passwordInput.type = "password";
    }
}


// Generate strong password
function generatePassword() {

    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const special = "!@#$%^&*";

    const allCharacters =
        uppercase + lowercase + numbers + special;

    let password = "";

    // Make sure the password contains all required types
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += special[Math.floor(Math.random() * special.length)];

    // Add more random characters
    for (let i = 4; i < 14; i++) {

        password += allCharacters[
            Math.floor(Math.random() * allCharacters.length)
        ];
    }

    // Put generated password into the input box
    passwordInput.value = password;

    // Check the generated password
    checkPassword();
}