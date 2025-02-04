const input = document.getElementById("userInput");
const messageArea = document.getElementById("messageArea");

function reverseString(str) {
    // convert str to array & reverse, to string & compare
    return str.split("").reverse().join("")
}

function check() {
    const value = input.value;
    // alert(value);
    const reverse = reverseString(value);
    // alert(reverse);

    // clear previous message and class
    messageArea.textContent = "";
    messageArea.className = ""; 

    // check if reverse is same
    if (value === reverse) {
        showMessage("Palindrome!", "true", input.value);
    } else {
        showMessage("Not a Palindrome.", "false", input.value);
    } 
    // clear input field
    input.value = ""; 
}


function showMessage(message, type, inputValue) {
    messageArea.textContent = `${inputValue}: ${message}`;
    messageArea.className = type;
}