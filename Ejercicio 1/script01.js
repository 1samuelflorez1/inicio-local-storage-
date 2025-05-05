
/**
 * EJERCICIO 1:
 * ------------
 * Guardar Datos en el Local Storage con setItem(llave,valor)
 * Guardar un usuario, una edad, un email en el Local Storage
 * Recuperar del Local Storage usuario y edad con getItem()
 * Actualizar la edad del usuario
 * ver la longitud de Localstorage con length
 * Ver la posicion de una  llave con key(index)
 * Remover un valor del LocalStorage con removeItem("llave")
 * Limpar Todo el LocalStorage con clear()
 */


// * Guardar un usuario, una edad, un email en el Local Storage
localStorage.setItem('usuario', 'Juan')
localStorage.setItem('edad', 34)
localStorage.setItem('email', 'juan@gmail.com')
localStorage.setItem('mascota', 'lupe')

//Recuperar del Local Storage usuario y edad con getItem()
const usuario = localStorage.getItem('usuario')
const edad = localStorage.getItem('edad')
const email = localStorage.getItem('email')
const mascota = localStorage.getItem('mascota')

console.log(usuario, edad, email, mascota)

localStorage.setItem('edad', 18)  //esto se hace patra cambiar el valor del localstoreage de un elemento especifico

//ver la longitud de localstorage con lenght
console.log(localStorage.length)

//Remover un valor del LocalStorage con removeItem("llave")
// localStorage.removeItem('edad')  // esto se hace para eliminar una llave o elemento del storage especifico

console.log(localStorage.length)

//Ver la posicion de una  llave con key(index)
const llave1 = localStorage.key(0)
const llave2 = localStorage.key(1)

console.log(llave1, llave2)

localStorage.clear()