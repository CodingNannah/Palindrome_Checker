const input = document.getElementById("userInput")
const messageArea = document.getElementById("messageArea")

function reverseString(str) {
    // convert str to array & reverse, to string & compare
    return str.split("").reverse().join("")
}

function check() {
    // clear previous message and class
    messageArea.textContent = "";
    messageArea.className = "";

    const value = input.value;
    // alert(value);
    const reverse = reverseString(value);
    // alert(reverse);

    // check if reverse is same
    if (value === reverse) {
        showMessage("success", "Palindrome!")
    } else {
        showMessage("error", "Not a Palindrome.")
    }
        
}

function showMessage(type, message) {
    messageArea.className = type;
    messageArea.textContent = message;
}