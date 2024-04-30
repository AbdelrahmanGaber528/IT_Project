// const toggle= document.getElementById('toggleDark');
// const body= document.querySelector('body');
// toggle.addEventListener('click', function(){
//     this.classList.toggle('fa-moon');
//     if(this.classList.toggle('fa-su')){
//         body.style.background='white';
//         body.style.color='black';
//         body.style.transition='2s';
        
     

//     }else{
//         body.style.background= 'black';
//         body.style.color='white';
//         body.style.transition='2s';
        
//     }})

    

const toggle= document.getElementById('toggleDark');
const body= document.querySelector('body');
const textToChangeColor = document.getElementById('textToChangeColor');

toggle.addEventListener('click', function(){
    this.classList.toggle('fa-moon');
    if(this.classList.toggle('fa-su')){
        body.style.background='white';
        body.style.color='black';
        textToChangeColor.style.color='black'; // Change text color to black
        body.style.transition='2s';
    }else{
        body.style.background= 'black';
        body.style.color='white';
        textToChangeColor.style.color='white'; // Change text color to white
        body.style.transition='2s';
    }
});
