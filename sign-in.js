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
let signin_btn= document.querySelector('#signin-btn');
let signup_email= document.querySelector('#signup-email');
let signin_email= document.querySelector('#signin-email');
let signup_user= document.querySelector('#signup-user');
let signup_password= document.querySelector('#signup-Password');
let signin_password= document.querySelector('#signin_password');
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

signup_btn.addEventListener('click', function(e) {
    e.preventDefault();
    let credientails_storage = localStorage.getItem('credientails_storage');
    let credientails_list;
    let add_user = {
      "email": signup_email.value,
      "password": signup_password.value
    };
  
    if (credientails_storage === null) {
      credientails_list = [];
    } 
    else {
      credientails_list = JSON.parse(credientails_storage);
    }
  
    let userExists = credientails_list.some(user => {
      return user.email === add_user.email && user.password === add_user.password;
    });

   
    if (userExists) {
      console.log('User already exists.');
    } else {
      credientails_list.push(add_user);
      localStorage.setItem("credientails_storage", JSON.stringify(credientails_list));
      console.log('New user added.');
    }
  });



//   sign in btn
signin_btn.addEventListener('click',function(e){
     e.preventDefault;

    let credientails_storage = localStorage.getItem('credientails_storage');
    let credientails_list;
    let login_user = {
      "email": signin_email.value,
      "password": signin_password.value
    };
  
    if (credientails_storage === null) {
      credientails_list = [];
    } 
    else {
      credientails_list = JSON.parse(credientails_storage);
    }
  
    let userExists = credientails_list.some(user => {
      return user.email === login_user.email && user.password === login_user.password;
    });

   
    if (userExists) {
      console.log('login sucess.');
      signin_btn.href= "https://www.w3schools.com/jsref/jsref_some.asp";
    }
    else {
        console.log('login sucess faild');
        
      }
})

  