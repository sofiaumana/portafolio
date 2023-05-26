  function encriptar() {

   var texto = document.getElementById("cajadetextoen").value.toLowerCase();
   var txtCifrado = texto.replace(/e/img, "enter");
   var txtCifrado = txtCifrado.replace(/o/igm, "ober");
   var txtCifrado = txtCifrado.replace(/i/igm, "imes");
   var txtCifrado = txtCifrado.replace(/a/igm, "ai");
   var txtCifrado = txtCifrado.replace(/u/igm, "ufat");
   document.getElementById("imgderecha").style.display = "none";
   document.getElementById("textoen").style.display = "none";
   document.getElementById("textoin").innerHTML = txtCifrado;
   document.getElementById("copiar").style.display = "show";
   document.getElementById("copiar").style.display = "inherit";
   }
   function desencriptar(){

       var texto = document.getElementById("cajadetextoen").value.toLowerCase();
       var txtCifrado = texto.replace(/enter/igm, "e");
       var txtCifrado = txtCifrado.replace(/ober/igm, "o");
       var txtCifrado = txtCifrado.replace(/imes/igm, "i");
       var txtCifrado = txtCifrado.replace(/ai/igm, "a");
       var txtCifrado = txtCifrado.replace(/ufat/igm, "u");
       document.getElementById("imgderecha").style.display = "none";
       document.getElementById("textoen").style.display = "none";
       document.getElementById("textoin").innerHTML = txtCifrado;
       document.getElementById("copiar").style.display = "show";
       document.getElementById("copiar").style.display = "inherit";
       }
function copy(){
  var contenido = document.querySelector("#textoin");
  contenido.select();
  document.execCommand("cut");
  alert("¡Se copio!");
}
