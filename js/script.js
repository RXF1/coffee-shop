// Toggel class active
const navbarNav= document.querySelector('.navbar-nav');
// Ketika hamburger di klik
document.querySelector('#hamburger-menu').onclick=()=>{
    navbarNav.classList.toggle('active');
};
// toggle kelas active search
const seacrhForm = document.querySelector('.search-form');
const searchBox =document.querySelector('#search-box');

document.querySelector('#search-button').onclick=(e)=>{
    seacrhForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
}
//klik diluar hamburger
const hamburger=document.querySelector('#hamburger-menu');
const sb=document.querySelector('#search-button');
document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target)&& !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
})
document.addEventListener('click', function(e){
    if(!sb.contains(e.target)&& !seacrhForm.contains(e.target)){
        seacrhForm.classList.remove('active');
    }
})

