
let listaAmigoSecreto=[];
let listaAmigosSorteados=[];

function limpiarCaja(selector){
   return document.querySelector(selector).value='';
}
function publicar(idpublicar,texto){
return document.querySelector(idpublicar).innerHTML=texto ;
}
function agregarAmigo() {
   let NombreAmigo=document.getElementById("amigo").value;
   console.log(NombreAmigo)
   if(NombreAmigo==""){
    alert(" casilla vacia ");
   }else{
      listaAmigoSecreto.push(NombreAmigo);
      //document.querySelector('#listaAmigos').innerHTML=listaAmigoSecreto.join("<br>");
      publicar('#listaAmigos',listaAmigoSecreto.join("<br>"));
      limpiarCaja('#amigo');
   }
    return;
}
function sortearAmigo(){
 let numero=listaAmigoSecreto.length
 console.log(numero)
 let NumeroGenerado= Math.floor(Math.random()*numero)

 console.log(NumeroGenerado) ;
 if(listaAmigoSecreto.length==listaAmigosSorteados.length){
   alert("ya se han sorteado todos los nombres");
 }else{
   if(listaAmigosSorteados.includes(listaAmigoSecreto[NumeroGenerado])){
    return sortearAmigo();
   }else {
    listaAmigosSorteados.push(listaAmigoSecreto[NumeroGenerado])
     publicar('#resultado',listaAmigoSecreto[NumeroGenerado]);
     limpiarCaja('#listaAmigos');
    
   }

 }
}