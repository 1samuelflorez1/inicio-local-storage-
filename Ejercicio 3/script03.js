
/** 
 * EJERCICIO 3:
 * ------------
 *  Recupera  el objeto guardado y Verlo por  consola
 *  DeSerializar un Objeto almacenado y Verlo por consola
 *  Eliminar el Objeto y volvera consultar (si no esite devuelve null)
 *  Validar antes de mostrar el objeto recuperado
 *  Mostrar los datos recuperado en el contenedor html
 **/ 

let libro = JSON.parse(localStorage.getItem('libroJSON'))
if (libro == null){
    
    console.log("No hay libros!!!")

}

else{

    console.log(libro.Autor)
    console.log(libro.Año)
    console.log(libro.Nombre)
    console.log(libro.Genero)
    const contenedor = document.querySelector('#contenedor')
    contenedor.innerHTML = `
        <h1>libro: ${libro.Nombre}</h1>
        <p>Autor: ${libro.Autor}</p>
        <p>Genero: ${libro.Genero}</p>
        <p>Año: ${libro.Año}</p>
    `
}
