/* Script Actividad 2 */

let villano = 'Voldemort'

const arrayintentos = []

alert("Vamos a jugar a una adivinanza. Cuidado con lo que ingreses, distingue mayúsculas y minúsculas");

let villanoingresado = prompt('en qué villano de Harry Potter estoy pensado')

while (villano !== villanoingresado) {
	arrayintentos.push(villanoingresado)
	alert("Ese no era, prueba otro")
	villanoingresado = prompt('Prueba otra vez')
	console.log(typeof villano, typeof villanoingresado, villano !==villanoingresado);
}

alert("¡Correcto!")

alert("Estos fueron tus intentos " +  arrayintentos + ", " + villano)
