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

    
    function mostrarPerfil(){
      const contenido = document.getElementById('contenido-perfil')
      contenido.innerHTML = ''

        const miDiv = document.createElement('div')
          miDiv.innerHTML = `
          
          <p>${perfil.nombre}</p>
          <p>${perfil.nombre}</p>

          `
        contenido.appendChild(miDiv)
    }