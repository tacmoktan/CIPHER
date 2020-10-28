let cypherTextBox = document.getElementById('cypher');
let keyTextBox = document.getElementById('key');
let finishTextBox = document.getElementById('finish');
let decryptTextBox = document.getElementById('dec');

function encrypt() {
    let messageInput = cypherTextBox.value;
    let key = parseInt(keyTextBox.value);
    messageInput = messageInput.toUpperCase().replace(/ +/g, "");
    let result = "";

    for (let i = 0; i < messageInput.length; i++) {
        let text = messageInput.charAt(i);
        let asciiVal = text.charCodeAt();
        let pos = (asciiVal - 65 + key) % 26;
        let cipherText = String.fromCharCode(pos + 65);
        result += cipherText;   //each char is concatenated 
    }

    finishTextBox.value = result.toLowerCase()
    finishTextBox.style.textTransform = "capitalize";
}

function decrypt() {
    let cipherText = finishTextBox.value;
    cipherText = cipherText.toUpperCase().replace(/ +/g, "");
    let result = "";

    let key = parseInt(keyTextBox.value);

    for (let i = 0; i < cipherText.length; i++) {
        let text = cipherText.charAt(i);
        let ascii = text.charCodeAt();
        let Cipher = ascii - 65;
        let pos = (Cipher + 26 - key) % 26;
        let plainText = String.fromCharCode(pos + 65); //single char is printed at a time in loop
        console.log(plainText)
        result += plainText;
    }

    decryptTextBox.value = result.toLowerCase();
    decryptTextBox.style.textTransform = "capitalize";
}