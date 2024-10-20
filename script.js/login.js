let username = document.querySelector("#username")
let password = document.querySelector("#pwdd")
let comment = document.querySelector('#comment')
let loginBtn = document.querySelector("#login")

let getUsername = localStorage.getItem("username")
let getPassword = localStorage.getItem("password")
let getComment = localStorage.getItem('comment')

loginBtn.addEventListener ("click" , function(e){
    e.preventDefault()
    if (username.value==="" || password.value===""||comment.value===''){
        alert("please, fill data ")
    } else {
        if ( (getUsername && getUsername.trim() === username.value && getPassword && getPassword.trim() === password.value&&
    getComment&&getComment.trim()===comment.value )  )
        {
            setTimeout ( () => {
                window.location = "popularquestions.html"
            } , 1500)
        } else {
            console.log("username or password is wrong ")
        }
    }
})