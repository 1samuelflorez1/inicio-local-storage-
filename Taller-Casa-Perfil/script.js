    // Definir el Objeto Perfil
    const perfil = 
    {
      nombre: "Juan Pérez",
      edad: 23,
      email: "juanperez@gmail.com",
      foto: "https://randomuser.me/api/portraits/men/3.jpg",
      hobbies: ["Leer", "Programar", "Ir a cine"]
    };

    // Almacenar el objeto en localStorage como cadena JSON
    localStorage.setItem('perfil', perfil)
    
    let perfilJSON = JSON.stringify(perfil)
    localStorage.setItem('perfilJSON', perfilJSON)

    // Recuperar el objeto desde localStorage
    let perfilGuardado = JSON.parse(localStorage.getItem('perfilJSON'))

    // Mostrar los datos recuperados en la consola
    console.log(perfilGuardado)

    // Mostrar los datos en el div con id="perfil"
    const miDiv = document.getElementById('contenido-perfil')

    let nombreJS = localStorage.getItem("nombre")
    const nombre = document.createElement('h1')
    h1.perfil = nombre
    miDiv.appendChild('h1')