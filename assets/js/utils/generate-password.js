const initPassword = () => {
    const passwordLengthInput = document.getElementById("passwordLength");
    const btnGeneratePassword = document.getElementById("btnGeneratePassword");
    const containerPassword = document.getElementById("container-password");
    if (!passwordLengthInput) {
        throw new Error("Password length input not found");
        return;
    } else if (!btnGeneratePassword) {
        throw new Error("Generate password button not found");
        return;
    } else if (!containerPassword) {
        throw new Error("Container for password not found");
        return;
    }
    btnGeneratePassword.addEventListener("click", () => {
        try {
            validatePasswordLength(passwordLengthInput.value);
            const password = generatePassword(passwordLengthInput.value);
            if (!password) {
                throw new Error("Error to generate password");
            }
            containerPassword.innerHTML = `
                <h2 class="password-result-title">Your generated password is:</h2>
                <p class="generated-password">${password}</p>    
            `
        } catch(error) {
            alert(error.message);
        }
        containerPassword.classList.remove("hidden");
    });
}


const generatePassword = (length) => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+";
    let password = "";
    for (let i=0; i< length; i++) {
        const index = Math.floor(Math.random() * characters.length);
        password += characters[index];
    }
    return password;
}
const validatePasswordLength = (length) => {
    if (length <= 0) {
        throw new Error("Password length must be greater than 0");
    }
};

initPassword();