//alert("esto es un alert");

var edad = prompt("Dime tu edad: ");
var conteo = 0;

console.log("La edad del usuario es: " + edad);
if(edad >= 18){
	alert("El usuario es mayor de edad");
} else {
	alert("El usuario no es mayor de edad");
	conteo++;
}