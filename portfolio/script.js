
active = false
function thememode(){
    
let home = document.querySelector(".home")
let body = document.querySelector("body")
let html = document.querySelector("html")
let text =document.querySelector(".text")
let texta =document.querySelector(".texta")
let h4 =document.querySelector("h4")
if(active==false){


    
    home.style.backgroundColor ="white"
    home.style.color = "black"
    body.style.backgroundColor ="white"
    html.style.backgroundColor ="white"
    text.style.color = "black"
    texta.style.color = "black"
    h4.style.color = "black"

    active=true
}
else{



    home.style.backgroundColor ="black"
    body.style.backgroundColor ="black"
    html.style.backgroundColor ="black"
    text.style.color = "white"
    texta.style.color = "white"
    h4.style.color = "white"


    active= false
}














}

