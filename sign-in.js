console.log("hello world");

let title_container= document.querySelector('#title-container');
let form_container= document.querySelector('#form-container');
let title_inner= document.querySelector('.signIn_title');
let signup_form= document.querySelector('#signup-form');
let signIn_form= document.querySelector('#signIn_form');
let signin_content= document.querySelector('#signin-content');
let signup_content= document.querySelector('#signup-content');
// sign up input field
let signup_btn= document.querySelector('#signup-btn');
let signup_email= document.querySelector('#signup-email');
let signup_user= document.querySelector('#signup-user');
let signup_password= document.querySelector('#signup-Password');
let signup_confirm_password= document.querySelector('#signup-confirm-password');



function sign_up_click(){
    title_inner.classList.toggle("order-2");
    form_container.classList.replace('rounded-start','rounded-end');
    title_container.classList.replace('rounded-end','rounded-start');
    signIn_form.classList.toggle('d-none');
    signup_form.classList.toggle('d-none');
    signin_content.classList.toggle('d-none');
    signup_content.classList.toggle('d-none');
    
}

signup_btn.addEventListener('click',function(e){
    e.preventDefault();
    let credientails_storage=localStorage.getItem('credientails_storage');
    if(credientails_storage === null){
        let credientails_list=[];
    }
    else{
        credientails_list = JSON.parse(credientails_storage); 
    }

    valid(signup_email.value,signup_password.value);  
 
})

function valid(email,password){
    
}