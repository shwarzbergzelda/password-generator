const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOneEl = document.getElementById("passwordOne")
let passwordTwoEl = document.getElementById("passwordTwo")
let inputEl = document.getElementById("passwordInput")

function copyPassword(event) {
    let copyText = event.target.innerText
    
    navigator.clipboard.writeText(copyText)
    
    alert("Copied: " + copyText);
}

function generatePasswords() {
    passwordOneEl.textContent = generateRandomPassword()
    passwordTwoEl.textContent = generateRandomPassword()
}

function generateRandomPassword() {
    let passwordLength = inputEl.value
    let password = ""
    for (let i = 0; i < passwordLength; i++) {
        passwordLength = inputEl.value
        characterIndex = Math.floor (Math.random() * characters.length)
        password += characters[characterIndex];
    }
    return password;
}
