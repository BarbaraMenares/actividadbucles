/* Script Actividad 3*/

/*
Solicitar al usuario un (1) número de forma
consecutiva, hasta que se ingrese “ESC”.
Generar una única salida compuesta por los
siguientes productos, según el valor
ingresado en cada ciclo:
“Tomate” si es 1.
“Papa” si es 2.
“Carne” si es 3.
“Pollo” si es 4.
*/

/*
let numero = prompt("ingresa un número del 1 al 4 o la tecla escape (ESC) para salir")
console.log(numero)
const productos = ['Tomate','Carne','Papa','Pollo']
const ingresados = []

while (numero != null) {
	if (numero == 1) { 
		ingresados.push(productos[0])
	} else if (numero == 2) {
		ingresados.push(productos[1])
	} else if (numero == 3) {
		ingresados.push(productos[2])
	} else if (numero == 4) {
		ingresados.push(productos[3])
	}
	numero = prompt("ingresa un número del 1 al 4 o ESC para salir")
} 

console.log(ingresados)
alert("Tu lista es " + ingresados) 
*/

let numero = prompt("ingresa un número del 1 al 4 o ESC")
console.log(numero)
const productos = ['Tomate','Carne','Papa','Pollo']
const ingresados = []

while (numero !== "ESC" && numero != null) {
	if (numero == 1) { 
		ingresados.push(productos[0])
	} else if (numero == 2) {
		ingresados.push(productos[1])
	} else if (numero == 3) {
		ingresados.push(productos[2])
	} else if (numero == 4) {
		ingresados.push(productos[3])
	}
	numero = prompt("ingresa un número del 1 al 4 o ESC para salir")
} 

console.log(ingresados)
alert("Tu lista es " + ingresados) 
