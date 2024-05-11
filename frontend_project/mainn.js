function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");}

    function validateForm() {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        phone = document.getElementById("phone").value;
        var message = document.getElementById("message").value;
    
        if (name == "") {
            alert("Name must be filled out");
            return false;
        }
    
        if (email == "") {
            alert("Email must be filled out");
            return false;
        }
        if (phone == "") {
            alert("Phone must be filled out");
            return false;
        }
    
        if (message == "") {
            alert("Message must be filled out");
            return false;
        }
    
        return true;
    }

    function saveUsername(){
        var username = document.getElementById('name').value;
        localStorage.setItem('username',username);
        if(localStorage.getItem('username')){
            alert('username saved successfully !');
        }
        else{
            alert("username not saved");
        }
    }
    function returnName(){
        if(localStorage.getItem('username')){
            document.getElementById('savedUsername').innerText = 'username' + localStorage.getItem('username');
        }
        else{
            return false;
        }
    }

const filterLi = document.querySelectorAll(".content .sidebar ul li");
const filterableCards = document.querySelectorAll(".content .products .img");

const filterCards = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    
    filterableCards.forEach(card => {
        card.classList.add("hide");
        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
            card.classList.remove("hide");
        }
    })
}

filterLi.forEach(li => li.addEventListener("click",filterCards));