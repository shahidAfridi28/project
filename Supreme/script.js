var navbar = document.querySelector('.navbar');
var menubar = document.querySelector('#menu');
menubar.onclick=()=>{
    menubar.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}