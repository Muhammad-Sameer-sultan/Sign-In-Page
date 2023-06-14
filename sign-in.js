console.log("hello world");

let title_container= document.querySelector('#title-container');
let form_container= document.querySelector('#form-container');
let title_inner= document.querySelector('.signIn_title');
console.log(title_inner);
function sign_up_click(){
    title_inner.classList.toggle("order-2");
    preventDefault();
}