// const feedback =document.querySelector(".feedback-container");
// one-blur.addEventlistener("click",()=>{
//     feedback.innerhtml='<h3>thank you for your feedback</h3>';
// });

const feedback =document.getElementById("feedback");
const submitbutton =document.getElementById("b-button");
feedback.addEventListener("submit",function(event){


    event.preventDefault();
    alert("feedback is submitted successfuly")
});