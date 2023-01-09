var btn1 = document.getElementById("btn1")
var btn2 = document.getElementById("btn2")
var body = document.getElementById("body")
var div = document.getElementById("div")


btn1.addEventListener('click',ToggleThemeColor)
   

function ToggleThemeColor(){
    if(btn1.innerText == "Dark"){
        body.classList.toggle('dark')
        div.classList.toggle('gray')
        btn1.classList.toggle('light')
        btn2.classList.toggle('dark')
      
    }

}



