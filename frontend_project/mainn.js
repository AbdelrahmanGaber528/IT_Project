function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");}
    function validateForm() {
        // Get form inputs
        var name = document.forms["myForm"]["name"].value;
        var email = document.forms["myForm"]["email"].value;
        var message = document.forms["myForm"]["message"].value;
    
        // Validate name
        if (name == "") {
            alert("Name must be filled out");
            return false;
        }
    
        // Validate email
        if (email == "") {
            alert("Email must be filled out");
            return false;
        }
    
        // Validate message
        if (message == "") {
            alert("Message must be filled out");
            return false;
        }
    
        // If all validations pass, return true
        return true;
    }