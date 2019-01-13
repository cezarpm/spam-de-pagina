var botao = document.getElementById("botao");


function spamar (paginas){

    for(var i = 0; i < paginas; i++){
        
        window.open("https://www.google.com")
   
    }
}

var resposta = prompt("Responda 50 + 50");

botao.addEventListener("click",spamar);

if(resposta == 50){

    alert("Voce acertou!!!");

} else{
      
    spamar(resposta);  

}