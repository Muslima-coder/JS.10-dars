let elTitle = document.querySelector(".title")
let dumaloq = document.querySelector(".dumaloq-content")
let kvadrat = document.querySelector(".kvadrat-content")

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



     if (result.includes("dumaloq")) {
        dumaloq.style.display = "block"; 
    } else if (result.includes("kvadrat")) {
        kvadrat.style.display = "block"; 
    }


}