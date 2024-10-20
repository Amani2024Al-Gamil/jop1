
let userInfo = document.querySelector('#userinfo');
let userData = document.querySelector('#user');
let links = document.querySelector('.links');
let linkss = document.querySelector('.linkss')

if(localStorage.getItem('username')){
    links.remove()
    linkss.remove()
    userInfo.style.display = 'block'
    userData.innerHTML = localStorage.getItem('username')
};
///////////////////////////////////////////////////////
let logOutBtn = document.querySelector("#logout")
logOutBtn.addEventListener("click", function (){
    localStorage.clear();
    setTimeout(() => {
        window.location = "contact.html";
    } , 1500)
})