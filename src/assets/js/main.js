   // Somente Numeros
function apenasNumeros(evt) {
   let theEvent = evt || window.event;
   let key = theEvent.keyCode || theEvent.which;
   key = String.fromCharCode(key);
   let regex = /^[0-9.]+$/;
   if (!regex.test(key)) {
      theEvent.returnValue = false;
      if (theEvent.preventDefault) theEvent.preventDefault();
   }
}

   // Declarando function
function calcular() {
   // Pegando os valores digitados
   let valorProjeto = document.getElementById("valorProjeto").value;
   let diasEfetivos = document.getElementById("diasEfetivos").value;
   let horasDiarias = document.getElementById("horasDiarias").value;
   let diasFerias = document.getElementById("diasFerias").value;

   //Calculo
   let valorHora = (valorProjeto / (diasEfetivos * 4 * horasDiarias)) + ((diasFerias * diasEfetivos * horasDiarias));

   //Imprimindo Resultado
   document.getElementById("valorHora").innerHTML = "R$ " + valorHora.toFixed();



}