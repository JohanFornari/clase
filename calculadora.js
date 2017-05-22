function suma(){

  var n1 = parseInt(document.getElementById("n1").value);
  var n2 = parseInt(document.getElementById("n2").value);
  document.getElementById("resultado").innerHTML = "La suma es:  "+ (n1+n2);
}

function resta(){
  var n1 = parseInt(document.getElementById("n1").value);
  var n2 = parseInt(document.getElementById("n2").value);
  document.getElementById("resultado").innerHTML = "La resta es:  "+ (n1-n2);
}

function multiplicacion(){
  var n1 = parseInt(document.getElementById("n1").value);
  var n2 = parseInt(document.getElementById("n2").value);
  document.getElementById("resultado").innerHTML = "La multiplicacion es:  "+ (n1*n2);
}

function division(){
  var n1 = parseInt(document.getElementById("n1").value);
  var n2 = parseInt(document.getElementById("n2").value);
  document.getElementById("resultado").innerHTML = "La division es:  "+ (n1/n2);
}
