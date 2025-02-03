const input = document.getElementById("userInput");
const messageArea = document.getElementById("messageArea");

function reverseString(str) {
    // convert str to array & reverse, to string & compare
    return str.split("").reverse().join("")
}

function check() {
    // clear input field, previous message, and class
    messageArea.textContent = "";
    messageArea.className = "";

    const value = input.value;
    // alert(value);
    const reverse = reverseString(value);
    // alert(reverse);

    // check if reverse is same
    if (value === reverse) {
        showMessage("Palindrome!", "success");
    } else {
        showMessage("Not a Palindrome.", "error");
    }
        
}

function showMessage(message, type) {
    messageArea.textContent = message;
    messageArea.className = type;
}