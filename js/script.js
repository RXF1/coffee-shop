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
// shoppingcart
const sc=document.querySelector('.shopping-cart');

document.querySelector('#shopping-cart-button').onclick=(e)=>{
    sc.classList.toggle('active');
    e.preventDefault();
};
//klik diluar hamburger
const hamburger=document.querySelector('#hamburger-menu');
const sb=document.querySelector('#search-button');
const scb=document.querySelector('#shopping-cart-button');

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

document.addEventListener('click', function(e){
    if(!scb.contains(e.target)&& !sc.contains(e.target)){
        sc.classList.remove('active');
    }
})

// modal box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailbutton= document.querySelectorAll('.item-detail-button')

itemDetailbutton.forEach((btn) => {
    btn.onclick = (e) =>{
    itemDetailModal.style.display ='flex';
    e.preventDefault();
    };
});

// click tombol close
document.querySelector('.modal .close-icon').onclick = (e) =>{
    itemDetailModal.style.display= 'none';
    e.preventDefault();
}

// click diluar modal
window.onclick = (e) => {
    if (e.target === itemDetailModal) {
        itemDetailModal.style.display = 'none';
    }
}


