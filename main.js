// Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: Nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

const griglia = document.getElementById("griglia")
const bottone = document.getElementById("genera")
let listaBombe = []

bottone.addEventListener("click", function(){
    griglia.innerHTML = ""
    console.clear();
    griglia.style.pointerEvents = "auto"
    document.getElementsByClassName("vola")[0].style.display = "none"
    document.getElementsByClassName("vola")[1].style.display = "none"
    
    let punteggio=0
    

    // assegnazione del numero di caselle da generare in base alla difficoltà scelta

    const modeHTML = document.getElementById("mode").value
    console.log(modeHTML)
    let maxbox=100
  
    if(modeHTML=="medium"){
        maxbox=81  
    }else if(modeHTML=="hard"){
        maxbox=49
    }



for(i=0;i<16;i++){
    let random = Math.floor(Math.random()*((maxbox+1)-1)+1)
    
    if(listaBombe.includes(random)){
    i--
    }else{
        listaBombe[i]=random
    }
    
    }
    console.log(listaBombe)

    
    // controllo difficolta


    for(let i=1;i<=maxbox;i++){
        let listaSelezione = []
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
            if((listaBombe.includes(i))&&(listaSelezione.length!=maxbox-16)){
                this.classList.add("bomba")
                griglia.style.pointerEvents = "none"
                document.getElementsByClassName("vola")[0].style.display = "block"
                document.getElementsByClassName("vola")[1].style.display = "block"

                return document.getElementsByClassName("vola2")[0].innerHTML = `il tuo punteggio è di : ${punteggio}`
            }else if(listaSelezione.length-1 == maxbox-16){
                alert("hai vinto")
            }else{
                listaSelezione[i]= i
                punteggio++
            }

            this.classList.toggle("colore", console.log(i))
            this.style.pointerEvents="none"

        })

        const newContent = document.createTextNode(`${i}`) 
        newdiv.appendChild(newContent)
        griglia.appendChild(newdiv) 
        
    }



})