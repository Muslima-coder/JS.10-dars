let elTitle = document.querySelector(".title")
let dumaloq = document.querySelector(".dumaloq-content")
let kvadrat = document.querySelector(".kvadrat-content")
let music = document.getElementById("Music")
let music2 = document.getElementById("Music2")
let rasm = document.getElementById("rasm")
let rasm2 = document.getElementById("rasm2")
dumaloq.style.display = "none"; 
kvadrat.style.display = "none";

let speech = new webkitSpeechRecognition()
speech.lang = "uz-UZ"

function handleBtnClick(){
    speech.start()
}

speech.onresult = function(evt){
    let result = evt.results[0][0].transcript
    elTitle.textContent = result
    if(result.includes("ko'k")){
        document.body.style = "background-color: blue"
    }
    else if(result.includes("qizil")){
        document.body.style = "background-color: red"
    }
    else if( result.includes("yashil")){
        document.body.style = "background-color: green"
    }
    else if(result.includes("pushti")){
        document.body.style = "background-color: pink"
    }
    else if(result.includes("sariq")){
        document.body.style = "background-color: yellow"
    }
    else if(result.includes("qora")){
        document.body.style = "background-color: black"
    }
    else if(result.includes("kulrang")){
        document.body.style = "background-color: gray"
    }
    else if(result.includes("feruza")){
        document.body.style = "background-color: aquamarine"
    }
    else if(result.includes("jigarrang")){
        document.body.style = "background-color: brown"
    }
    else if(result.includes("jigar rang")){
        document.body.style = "background-color: brown"
    }
    else if(result.includes("olov")){
        document.body.style = "background-color: chocolate"
    }

    //shakllar
     if (result.includes("dumaloq")) {
        dumaloq.style.display = "block"; 
    } else if (result.includes("kvadrat")) {
        kvadrat.style.display = "block"; 
    }

    //Musiqa
     if (result.includes("mushukcha") || result.includes("music")) {
        music.play()
    } else {
        music.pause()
        music.currentTime = 0
    }

    
    //Musiqa2
     if (result.includes("katta mushuk") || result.includes("music2")) {
        music2.play()
    } else {
        music.pause()
        music.currentTime = 0
    }
    
    //rasm
    if (result.includes("rasm 1")) {
    rasm.src = "./images/cat1.jfif";
    rasm.style.display = "block";
    }

       
    //rasm2
    if (result.includes("rasm 2")) {
    rasm.src = "./images/cat2.webp";
    rasm.style.display = "block";
    }
}