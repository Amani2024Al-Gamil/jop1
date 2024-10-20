let username = document.querySelector('#user')
let email = document.querySelector('#email');
let password = document.querySelector('#pwd');
let comment = document.querySelector('#comment')
let btn =document.querySelector('#btn')

btn.addEventListener("click",function(e){
    e.preventDefault()
if(username.value===''||email.value===''||password.value===''||comment.value===''){
    alert('please,fill data')
}else{
    localStorage.setItem('username',username.value);
    localStorage.setItem('email',email.value);
    localStorage.setItem("password",password.value);
    localStorage.setItem('comment',comment.value);
    
    setTimeout(()=>{
    window.location='login.html'
},1500)}})
