// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
const griglia = document.getElementById("griglia")
const bottone = document.getElementById("genera")

bottone.addEventListener("click", function(){
    griglia.innerHTML = ""


    // assegnazione del numero di caselle da generare in base alla difficoltà scelta

    const modeHTML = document.getElementById("mode").value
    console.log(modeHTML)
    let maxbox=100
  
    if(modeHTML=="medium"){
        maxbox=81  
    }else if(modeHTML=="hard"){
        maxbox=49
    }



    
    // controllo difficolta


    for(let i=0;i<maxbox;i++){
        const newdiv = document.createElement("div");  

        newdiv.classList.add("box")
        if(modeHTML=="easy"){

        }else if(modeHTML=="medium"){
            newdiv.setAttribute("style", "flex-basis: calc(100%/9);");   
        }else if(modeHTML=="hard"){
            newdiv.setAttribute("style", "flex-basis: calc(100%/7);"); 
        }else{
            return alert("errore imprevisto")
        }
        
        
        // aggiunta classe quando la casella cliccata
        
        newdiv.addEventListener("click",function(){
            this.classList.toggle("colore", console.log(i+1))

        })

        const newContent = document.createTextNode(`${i+1}`) 
        newdiv.appendChild(newContent)
        griglia.appendChild(newdiv) 
    }



})