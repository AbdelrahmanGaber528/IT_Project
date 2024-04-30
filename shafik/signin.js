document.getElementById("forgetpass").addEventListener("click", function(event) {
    event.preventDefault();
    let userInput = prompt("Please enter your email here:");
    if (userInput != null) {
        alert("You password reset link has been sent to: " + userInput);
    } else {
        console.log("User cancelled the prompt.");
    }
});