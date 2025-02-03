function reverseString(str) {
    // convert str to array & reverse, to string & compare
    return str.split("").reverse().join("")
}

function check() {
    // moving definition elements inside the function
    const input = document.getElementById("userInput");
    const messageArea = document.getElementById("messageArea");

    // clear input field, previous message, and class
    input.value = "";
    messageArea.textContent = "";
    messageArea.className = "";

    const value = input.value;
    // alert(value);
    const reverse = reverseString(value);
    // alert(reverse);

    // check if reverse is same
    if (value === reverse) {
        showMessage("Palindrome!", "success", messageArea);
    } else {
        showMessage("Not a Palindrome.", "error", messageArea);
    }
        
}

function showMessage(message, type, messageArea) {
    messageArea.textContent = message;
    messageArea.className = type;
}
