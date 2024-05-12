
//variable que guarda el input
const resultado = document.querySelector(".screen");

//funcion para borrar el contenido de la caja o input
function reset(){
    resultado.value="";
}

//Declaramos variables
var operandoa;
var operandob;
var operacion;

function cargarCalculadora(){
    //variables
    const botonesO= document.getElementsByClassName("operator");
    const botonesN= document.getElementsByClassName("btn");
 

    var division = botonesO[0];
    var multiplicacion =botonesO[1];
    var resta = botonesO[2];
    var punto=botonesO[3];
    var suma=botonesO[4];
    
    var siete = botonesN[1];
    var ocho = botonesN[2];
    var nueve = botonesN[3];
    var cuatro = botonesN[4];
    var cinco = botonesN[5];
    var seis = botonesN[6];
    var uno = botonesN[7];
    var dos = botonesN[8]; 
    var tres = botonesN[9];
    var cero = botonesN[10];
    var igual = botonesN[11];

    
//Eventos de click
uno.onclick = function(e){
    resultado.value = resultado.value  + "1";
}
dos.onclick = function(e){
    resultado.value = resultado.value  + "2";
}
tres.onclick = function(e){
    resultado.value = resultado.value  + "3";
}
cuatro.onclick = function(e){
    resultado.value = resultado.value + "4";
}
cinco.onclick = function(e){
    resultado.value = resultado.value  + "5";
}
seis.onclick = function(e){
    resultado.value = resultado.value  + "6";
}
siete.onclick = function(e){
    resultado.value = resultado.value  + "7";
}
ocho.onclick = function(e){
    resultado.value = resultado.value  + "8";
}
nueve.onclick = function(e){
    resultado.value = resultado.value  + "9";
}
cero.onclick = function(e){
    resultado.value = resultado.value  + "0";
}
punto.onclick = function(e){
    resultado.value = resultado.value  + ".";
}

reset.onclick = function(e){
    reset();
}
suma.onclick = function(e){
    operandoa = resultado.value;
    operacion = "+";
    limpiar();
}

resta.onclick = function(e){
    operandoa = resultado.value;
    operacion = "-";
    limpiar();
}
multiplicacion.onclick = function(e){
    operandoa = resultado.value;
    operacion = "*";
    limpiar();
}
division.onclick = function(e){
    operandoa = resultado.value;
    operacion = "/";
    limpiar();
}
igual.onclick = function(e){
    operandob = resultado.value;
    resolver();
}

function limpiar(){
    resultado.value = "";
  }
  
  function resetear(){
    resultado.value = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
  }

  function resolver(){
    var res = 0;
    switch(operacion){
      case "+":
        res = parseFloat(operandoa) + parseFloat(operandob);
        break;
  
      case "-":
          res = parseFloat(operandoa) - parseFloat(operandob);
          break;
  
      case "*":
        res = parseFloat(operandoa) * parseFloat(operandob);
        break;
  
      case "/":
        res = parseFloat(operandoa) / parseFloat(operandob);
        break;
    }

    if (res.toString().length > 18) {
        resultado.value = "ERROR >18 DIGITOS";
    } else {
        resetear();
        resultado.value = res;
    }
  }
}
 

   
 
