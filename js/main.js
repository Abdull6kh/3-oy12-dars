var form = document.querySelector(".form")
var input = document.querySelector(".input")
var list = document.querySelector(".list")
var rbtn = document.querySelector(".btn")
var text = document.querySelector(".title")
var alerrt = document.querySelector(".alert")
var boddy = document.querySelector(".body")

var record = new webkitSpeechRecognition()
record.lang  = 'uz-UZ'
var count = ""
rbtn.addEventListener("click", function(){
    record.start()
    record.onresult = function(evf){
        count = evf.results[0][0].transcript
    }
})
record.onend = function(){
    alerrt.classList.add("on")
    console.log("END");   
}
form.addEventListener("submit", function(evt){
    evt.preventDefault()
    var val = input.value
    var el = document.createElement("li")
    list.appendChild(el)
    if(count == "background green" || count == "fon yashil"){
        boddy.classList.add("bg-success")
        el.classList.add("text-light")
    }
    if(count == "background red" || count == "fon qizil"){
        boddy.classList.add("bg-danger")
        el.classList.add("text-light")
    }
    if(count == "background blue" || count == "fon kok"){
        boddy.classList.add("bg-primary")
        el.classList.add("text-light")
    }
    if(count != ""){
        el.textContent = count
        el.style.color = "darkcyan"
        count = ""
        alerrt.classList.add("off")
    }else{
        alerrt.classList.remove("alert-success")
        alerrt.classList.add("alert-danger")
        alerrt.textContent = "Please say something"
    }
    if(val != ""){
        el.textContent = val
        el.style.color = "darkgreen"
    }
    count = null    
    input.value = ""
})