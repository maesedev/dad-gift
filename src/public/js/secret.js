let tiempo = 8;
const pistas = [
    {
        content: "1. Es una tecnologia que se itiliza para hacer paginas web, esta presente en todas y se especializa en la interactividad del sitio."
    },
    {
        content: "2. Valentina lo intento aprender en un curso de platzi con Freddy Vega.",
    },
    {
        content: "3. Son tres tecnologia en todo sitio web, HTML, CSS y ...",
    },
    {
        content: "4. Si presionas F12 en un computador la contraseña estara en la sección de la consola",
    }
]
console.log("JAVASCRIPT :3")

const $minutos = document.querySelector('.minutos')

let tiempoRestante = localStorage.getItem("mRest")

if(tiempoRestante == null){
    localStorage.setItem("mRest",tiempo)
}

$minutos.textContent = localStorage.getItem("mRest")

function updatetime(){
    let minutosRestantes = localStorage.getItem("mRest") -1
    localStorage.setItem("mRest", minutosRestantes )
    
    $minutos.textContent =  minutosRestantes 
    if(     minutosRestantes  <= 0  ){
        localStorage.setItem("mRest",tiempo)
        nextPista()
    }

}

let pistaIterator = 1;
let $ulPistas = document.querySelector(".ul-pistas")

if(localStorage.getItem("pistas-mostradas") == null ||localStorage.getItem("pistas-mostradas") == 0 ){
    let pistasMostradas = localStorage.setItem("pistas-mostradas",1)
}else pistaIterator = parseInt(localStorage.getItem("pistas-mostradas"))

loadPistas()


function nextPista(){
    if(pistaIterator < 4)    pistaIterator++
    $ulPistas.textContent = " "
    loadPistas()
}

function loadPistas(){
    localStorage.setItem("pistas-mostradas",pistaIterator)

    for(i= 0 ; i < pistaIterator;i++){
        $ulPistas.innerHTML += "<li class='li-pista'>" + pistas[i].content  +  "</li>"
    }
}



let pistasMostradas = (parseInt(localStorage.getItem("pistas-mostradas") )  ) ??  false;

if( pistasMostradas <  4 ) setInterval(updatetime, 60000)




/*validacion contraseña*/

let contraseña = "javascript"

let $input = document.getElementById("input")
let userpass;
let $submit = document.getElementById("submit")

$submit.addEventListener("click",()=>{
    console.log("hello")
    userpass = $input.value.toLowerCase()


    if ($input.value.includes(contraseña)){
        alertify.alert("contraseña correcta", "puedes pasar")
    }else{ 
        alertify.alert("contraseña incorrecta 3:)")
        $input.value = ""
    }
})


