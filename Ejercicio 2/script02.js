
/**
 * EJERCICIO 2:
 * ------------
 * Definir un Objeto ej: Libro
 * Ver que pasa  si se Guadar sin serializarlo
 * Serializar un Objeto para almacenarlo
 * Abrir y cerrar el navegador para ver que pasa en el Local Storage
 *  Abrir el enlace con otro navegador ¿Que pasa?
 * */ 
 
let libro = {
    Nombre: "Zaratrustra",
    Año: 2006,
    Autor: "Nietzsche",
    Genero: "Filosofia"
}
localStorage.setItem('libro', libro)    //se guarda con la clave del libro y el elemento del libro
                                        //si se guerda de esta forma, no aparece el contenido del objeto
                                        //aparece la palabra (objeto)
console.log(libro)


let libroJSON = JSON.stringify(libro)
localStorage.setItem('libroJSON', libroJSON) //para que aparezca el contenido del objeto, se serializa de esta forma
console.log(libroJSON)

