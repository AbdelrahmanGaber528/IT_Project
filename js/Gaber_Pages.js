/* 
**************************
Abdelrahman Gaber Pages Start<<
**************************
*/
function closeModal(id){
    document.getElementById(id).style.display='none';
}
function openModal(id){
    document.getElementById(id).style.display='block';
}
function change_to_column(id){
    document.getElementById(id).style.flexDirection='column';
    document.getElementById(id).style.marginLeft='580px';
    document.getElementById('change_Gaber').textContent=' Double Click Down';
document.getElementById('change_Gaber').style.width='180px';
document.getElementById('change_Gaber').style.marginLeft='62.3em';

}
function change_to_row(id){
document.getElementById(id).style.flexDirection='row';
    document.getElementById(id).style.marginLeft='150px';
    document.getElementById('change_Gaber').textContent='Click Down';
    document.getElementById('change_Gaber').style.width='120px';
document.getElementById('change_Gaber').style.marginLeft='64em';
}
function check(){
    let num=document.getElementById('phone_electronic').value;
    let email=document.getElementById('email_electronic').value;
    let name=document.getElementById('Name_electronic').value;  
    if(num < 999999999 || email == '' || name == '')
    {
        alert('Invalid Information');
    }
    else
    {
        alert("You are Welcome.");
        document.getElementById('form').action='Electronic.html';
    }  
    
}
/* 
**************************
Abdelrahman Gaber Pages End <<
**************************
*/

/************************************************************************************************************************************* */



/* 
**************************
Omar Ashraf Pages Start <<
**************************
*/
//first bage

function changeColor()
{
  var colors = ["red", "blue", "green", "yellow", "purple", "orange"];
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}


//next bage


function validateEmail() 
{
  var emailInput = document.getElementById("email");
  var email = emailInput.value;
  var atpos = email.indexOf("@");
  if (atpos < 1 ) {
    alert("please enter a working email address");
    return false;
  }
  return true;
}
/* 
**************************
Omar Ashraf Pages End <<
**************************
*/


/************************************************************************************************************************************* */

/* 
**************************
Abdelrahman Ashraf Pages Start <<
**************************
*/
let listProductHTML = document.querySelector('.listProduct');
let listCartHTML = document.querySelector('.listCart');
let iconCart = document.querySelector('.icon-cart');
let iconCartSpan = document.querySelector('.icon-cart span');
let body = document.querySelector('body');
let closeCart = document.querySelector('.close');
let products = [];
let cart = [];
iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})
closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})

    const addDataToHTML = () => {
    // remove datas default from HTML

        // add new datas
        if(products.length > 0) // if has data
        {
            products.forEach(product => {
                let newProduct = document.createElement('div');
                newProduct.dataset.id = product.id;
                newProduct.classList.add('item');
                newProduct.innerHTML = 
                `<img src="${product.image}" alt="">
                <h2>${product.name}</h2>
                <div class="price">$${product.price}</div>
                <button class="addCart">Add To Cart</button>`;
                listProductHTML.appendChild(newProduct);
            });
        }
    }
    listProductHTML.addEventListener('click', (event) => {
        let positionClick = event.target;
        if(positionClick.classList.contains('addCart')){
            let id_product = positionClick.parentElement.dataset.id;
            addToCart(id_product);
        }
    })
const addToCart = (product_id) => {
    let positionThisProductInCart = cart.findIndex((value) => value.product_id == product_id);
    if(cart.length <= 0){
        cart = [{
            product_id: product_id,
            quantity: 1
        }];
    }else if(positionThisProductInCart < 0){
        cart.push({
            product_id: product_id,
            quantity: 1
        });
    }else{
        cart[positionThisProductInCart].quantity = cart[positionThisProductInCart].quantity + 1;
    }
    addCartToHTML();
    addCartToMemory();
}
const addCartToMemory = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
}
const addCartToHTML = () => {
    listCartHTML.innerHTML = '';
    let totalQuantity = 0;
    if(cart.length > 0){
        cart.forEach(item => {
            totalQuantity = totalQuantity +  item.quantity;
            let newItem = document.createElement('div');
            newItem.classList.add('item');
            newItem.dataset.id = item.product_id;

            let positionProduct = products.findIndex((value) => value.id == item.product_id);
            let info = products[positionProduct];
            listCartHTML.appendChild(newItem);
            newItem.innerHTML = `
            <div class="image">
                    <img src="${info.image}">
                </div>
                <div class="name">
                ${info.name}
                </div>
                <div class="totalPrice">$${info.price * item.quantity}</div>
                <div class="quantity">
                    <span class="minus"><</span>
                    <span>${item.quantity}</span>
                    <span class="plus">></span>
                </div>
            `;
        })
    }
    iconCartSpan.innerText = totalQuantity;
}

listCartHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('minus') || positionClick.classList.contains('plus')){
        let product_id = positionClick.parentElement.parentElement.dataset.id;
        let type = 'minus';
        if(positionClick.classList.contains('plus')){
            type = 'plus';
        }
        changeQuantityCart(product_id, type);
    }
})
const changeQuantityCart = (product_id, type) => {
    let positionItemInCart = cart.findIndex((value) => value.product_id == product_id);
    if(positionItemInCart >= 0){
        let info = cart[positionItemInCart];
        switch (type) {
            case 'plus':
                cart[positionItemInCart].quantity = cart[positionItemInCart].quantity + 1;
                break;
        
            default:
                let changeQuantity = cart[positionItemInCart].quantity - 1;
                if (changeQuantity > 0) {
                    cart[positionItemInCart].quantity = changeQuantity;
                }else{
                    cart.splice(positionItemInCart, 1);
                }
                break;
        }
    }
    addCartToHTML();
    addCartToMemory();
}

const initApp = () => {
    // get data product
    fetch('products.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        addDataToHTML();

        // get data cart from memory
        if(localStorage.getItem('cart')){
            cart = JSON.parse(localStorage.getItem('cart'));
            addCartToHTML();
        }
    })
}
initApp();


/* 
**************************
Abdelrahman Ashraf Pages End <<
**************************
*/


//**************************************************************************************************************************************** */


