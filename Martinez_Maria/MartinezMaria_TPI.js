/*1. Estructura de Datos
A) Crear un array de objetos llamado libros que contenga al menos 10
libros. Cada libro debe tener las siguientes propiedades:
✓ id (número)
✓ título (string),
✓ autor (string),
✓ año (número),
✓ género (string),
✓ disponible (booleano).*/

const libros = [
    {
        id:"1",
        titulo:"Noticia de un Secuestro",
        autor:"Gabriel Garcia Marquez",
        anio:"1996",
        genero:"No -Ficcion",
        disponible:true,
        describir: function() {
            return`El libro ${this.id} con titulo ${this.titulo} de ${this.autor} del anio ${this.anio} es de genero ${this.genero} y esta ${this.disponible ? 'disponible' : 'prestado'}`;

        }
    
    },

    {
        id:"2",
    titulo:"Marque la Diferencia y Triunfe",
    autor:"Jim Champy",
    anio:"2009",
    genero:"Crecimiento Personal",
    disponible:true,
    describir: function() {
        return`El libro ${this.id} con titulo ${this.titulo} de ${this.autor} del anio ${this.anio} es de genero ${this.genero} y esta ${this.disponible ? 'disponible' : 'prestado'}`;

    }
    },

    {
        id:"3",
        titulo:"Diccionario Amoroso del Psicoanalisis",
        autor:"Elizabeth Roudinesco",
        anio:"2017",
        genero:"psicologia",
        disponible:true,
        describir: function() {
            return`El libro ${this.id} con titulo ${this.titulo} de ${this.autor} del anio ${this.anio} es de genero ${this.genero} y esta ${this.disponible ? 'disponible' : 'prestado'}`;

        }
    },
    {
        id:"4",
        titulo:"La Casa de los Espiritus",
        autor:"Isabel Allende",
        anio:"1982",
        genero:"Novela",
        disponible:true,
        describir: function() {
            return`El libro ${this.id} con titulo ${this.titulo} de ${this.autor} del anio ${this.anio} es de genero ${this.genero} y esta ${this.disponible ? 'disponible' : 'prestado'}`;

        }
    },
    {
        id:"5",
        titulo:"Las 48 Leyes del Poder",
        autor:"Robert Greene",
        anio:"1998",
        genero:"Autoayuda",
        disponible:true,
        describir: function() {
            return`El libro ${this.id} con titulo ${this.titulo} de ${this.autor} del anio ${this.anio} es de genero ${this.genero} y esta ${this.disponible ? 'disponible' : 'prestado'}`;

        }
    },
    {
        id:"6",
        titulo:"El Sutil Arte de que (casi todo) te Importe una Mierda",
        autor:"Mark Manson",
        anio:"2016",
        genero:"Autoayuda",
        disponible:true,
        describir: function() {
            return`El libro ${this.id} con titulo ${this.titulo} de ${this.autor} del anio ${this.anio} es de genero ${this.genero} y esta ${this.disponible ? 'disponible' : 'prestado'}`;

        }

    },
    {
        id:"7",
        titulo:"Hamlet Macbeth",
        autor:"William Shakespeare",
        anio:"1980",
        genero:"Dramatico",
        disponible:true,
        describir: function() {
            return`El libro ${this.id} con titulo ${this.titulo} de ${this.autor} del anio ${this.anio} es de genero ${this.genero} y esta ${this.disponible ? 'disponible' : 'prestado'}`;

        }

    },
    {
        id:"8",
        titulo:"El Nombre de la Rosa",
        autor:"Umberto Eco",
        anio:"1980",
        genero:"Novela",
        disponible:true,
        describir: function() {
            return`El libro ${this.id} con titulo ${this.titulo} de ${this.autor} del anio ${this.anio} es de genero ${this.genero} y esta ${this.disponible ? 'disponible' : 'prestado'}`;

        }

    },
    {
        id:"9",
        titulo:"Memoria de Adriano",
        autor:"Marguerite Yourcenar",
        anio:"1951",
        genero:"Novela",
        disponible:true,
        describir: function() {
            return`El libro ${this.id} con titulo ${this.titulo} de ${this.autor} del anio ${this.anio} es de genero ${this.genero} y esta ${this.disponible ? 'disponible' : 'prestado'}`;

        }

    },
    {
        id:"10",
        titulo:"Los Iluminados",
        autor:"Marcos Aguini",
        anio:"2000",
        genero:"Ficcion",
        disponible:true,
        describir: function() {
            return`El libro ${this.id} con titulo ${this.titulo} de ${this.autor} del anio ${this.anio} es de genero ${this.genero} y esta ${this.disponible ? 'disponible' : 'prestado'}`;

        }

    }



]

libros.forEach(libro => console.log(libro.describir()));


/*B) Crear un array de objetos llamado usuarios con al menos 5 usuarios.
Cada usuario debe tener:
✓ id (número)
✓ nombre (string)
✓ email (string)
✓ librosPrestados (array de ids de libros).*/

const usuarios = [
    {
        id: 1,
        nombre: "Juan Perez",
        email: "juan.perez@example.com",
        librosPrestados: ["1", "3"]
    },
    {
        id: 2,
        nombre: "Ana Garcia",
        email: "ana.garcia@example.com",
        librosPrestados: ["2"]
    },
    {
        id: 3,
        nombre: "Luis Rodriguez",
        email: "luis.rodriguez@example.com",
        librosPrestados: ["1", "2", "3"]
    },
    {
        id: 4,
        nombre: "Marina Paredes",
        email: "marina.paredes@example.com",
        librosPrestados: ["4", "5"]
    },
    {
        id: 5,
        nombre: "Pedro Sanchez",
        email: "pedro.sanchez@example.com",
        librosPrestados: ["1"]
    }
];

console.log(usuarios);


/*2. Funciones de Gestión de Libros
A) Implementar una función agregarLibro(id, titulo, autor, anio, genero)
que agregue un nuevo libro al array libros.*/

function agregarLibro(id, titulo, autor, anio, genero) {
    const nuevoLibro = {
        id: id,
        titulo: titulo,
        autor: autor,
        anio: anio,
        genero: genero
    };
    libros.push(nuevoLibro);
    console.log(`${nuevoLibro.titulo} - Agregado a la biblioteca`);
}

agregarLibro(11, "Cien años de soledad", "Gabriel García Márquez", 1967, "Realismo mágico"); 

console.log(libros);



    /*B)- Crear una función buscarLibro(criterio, valor) que permita buscar
libros por título, autor o género utilizando el algoritmo de búsqueda
lineal.*/

function buscarLibro(criterio, valor) {
    const resultados = []; // Inicializar un array vacío para los resultados
    for (let i = 0; i < libros.length; i++) { // Iterar sobre el array libros
        const libro = libros[i]; // Obtener el libro actual
        if (criterio === "titulo" && libro.titulo === valor) {
            resultados.push(libro);
        } else if (criterio === "autor" && libro.autor === valor) {
            resultados.push(libro);
        } else if (criterio === "genero" && libro.genero === valor) {
            resultados.push(libro);
        }
    }
    return resultados; // Retornar el array de resultados
}
// Llamar a la función buscarLibro y mostrar los resultados
const resultados = buscarLibro("genero", "Fantasía"); 
console.log(resultados);

/* C) Desarrollar una función ordenarLibros(criterio) que ordene los libros 
por título o año utilizando el algoritmo de ordenamiento burbuja 
(bubble sort) y luego muestre los libros ordenados en la consola.*/

function ordenarLibros(libros, criterio) {
    // Validar el criterio
    if (criterio !== "titulo" && criterio !== "anio") {
      console.error("Criterio inválido. Debe ser 'titulo' o 'anio'.");
      return;
    }
  
    // Función auxiliar para comparar dos libros según el criterio
    function compararLibros(libroA, libroB) {
      if (criterio === "titulo") {
        return libroA.titulo.localeCompare(libroB.titulo, undefined, { sensitivity: 'base' });
      } else {
        return libroA.anio - libroB.anio;
      }
    }
  
    // Ordenar los libros usando el algoritmo de ordenamiento burbuja
    let n = libros.length;
    let intercambiado;
    do {
      intercambiado = false;
      for (let i = 0; i < n - 1; i++) {
        if (compararLibros(libros[i], libros[i + 1]) > 0) {
          // Intercambiar libros[i] y libros[i + 1]
          [libros[i], libros[i + 1]] = [libros[i + 1], libros[i]];
          intercambiado = true;
        }
      }
    } while (intercambiado);
  
    // Mostrar los libros ordenados en la consola
    console.log("Libros ordenados por " + criterio + ":");
    libros.forEach(libro => {
      console.log("- " + libro.titulo + "(" + libro.anio + ")");
    });
  }
// Llamar a la función para ordenar por título
ordenarLibros(libros, "titulo");

// Llamar a la función para ordenar por año
ordenarLibros(libros, "anio");
 
/*D) Desarrollar una función borrarLibro(id) que elimine el libro que se le 
pase por parámetro.*/

let libro = [
    {
        id: 1,
        titulo: "Noticia de un Secuestro",
        autor: "Gabriel Garcia Marquez",
        anio: 1996,
        genero: "No-Ficcion",
        disponible: true,
        describir: function () {
            return `El libro ${this.id} con titulo ${this.titulo} de ${this.autor} del anio ${this.anio} es de genero ${this.genero} y esta ${this.disponible ? 'disponible' : 'prestado'}`;
        }
    },
    {
        id: 2,
        titulo: "Marque la Diferencia y Triunfe",
        autor: "Jim Champy",
        anio: 2009,
        genero: "Crecimiento Personal",
        disponible: true,
        describir: function () {
            return `El libro ${this.id} con titulo ${this.titulo} de ${this.autor} del anio ${this.anio} es de genero ${this.genero} y esta ${this.disponible ? 'disponible' : 'prestado'}`;
        }
    },
    {
        id: 3,
        titulo: "Diccionario Amoroso del Psicoanalisis",
        autor: "Elizabeth Roudinesco",
        anio: 2017,
        genero: "psicologia",
        disponible: true,
        describir: function () {
            return `El libro ${this.id} con titulo ${this.titulo} de ${this.autor} del anio ${this.anio} es de genero ${this.genero} y esta ${this.disponible ? 'disponible' : 'prestado'}`;
        }
    },
    {
        id: 4,
        titulo: "La Casa de los Espiritus",
        autor: "Isabel Allende",
        anio: 1982,
        genero: "Novela",
        disponible: true,
        describir: function () {
            return `El libro ${this.id} con titulo ${this.titulo} de ${this.autor} del anio ${this.anio} es de genero ${this.genero} y esta ${this.disponible ? 'disponible' : 'prestado'}`;
        }
    },
    {
        id: 5,
        titulo: "Las 48 Leyes del Poder",
        autor: "Robert Greene",
        anio: 1998,
        genero: "Autoayuda",
        disponible: true,
        describir: function () {
            return `El libro ${this.id} con titulo ${this.titulo} de ${this.autor} del anio ${this.anio} es de genero ${this.genero} y esta ${this.disponible ? 'disponible' : 'prestado'}`;
        }
    },
    {
        id: 6,
        titulo: "El Sutil Arte de que (casi todo) te Importe una Mierda",
        autor: "Mark Manson",
        anio: 2016,
        genero: "Autoayuda",
        disponible: true,
        describir: function () {
            return `El libro ${this.id} con titulo ${this.titulo} de ${this.autor} del anio ${this.anio} es de genero ${this.genero} y esta ${this.disponible ? 'disponible' : 'prestado'}`;
        }
    },
    {
        id: 7,
        titulo: "Hamlet Macbeth",
        autor: "William Shakespeare",
        anio: 1980,
        genero: "Dramatico",
        disponible: true,
        describir: function () {
            return `El libro ${this.id} con titulo ${this.titulo} de ${this.autor} del anio ${this.anio} es de genero ${this.genero} y esta ${this.disponible ? 'disponible' : 'prestado'}`;
        }
    },
    {
        id: 8,
        titulo: "El Nombre de la Rosa",
        autor: "Umberto Eco",
        anio: 1980,
        genero: "Novela",
        disponible: true,
        describir: function () {
            return `El libro ${this.id} con titulo ${this.titulo} de ${this.autor} del anio ${this.anio} es de genero ${this.genero} y esta ${this.disponible ? 'disponible' : 'prestado'}`;
        }
    },
    {
        id: 9,
        titulo: "Memoria de Adriano",
        autor: "Marguerite Yourcenar",
        anio: 1951,
        genero: "Novela",
        disponible: true,
        describir: function () {
            return `El libro ${this.id} con titulo ${this.titulo} de ${this.autor} del anio ${this.anio} es de genero ${this.genero} y esta ${this.disponible ? 'disponible' : 'prestado'}`;
        }
    },
    {
        id: 10,
        titulo: "Los Iluminados",
        autor: "Marcos Aguini",
        anio: 2000,
        genero: "Ficcion",
        disponible: true,
        describir: function () {
            return `El libro ${this.id} con titulo ${this.titulo} de ${this.autor} del anio ${this.anio} es de genero ${this.genero} y esta ${this.disponible ? 'disponible' : 'prestado'}`;
        }
    }
];

  
  function borrarLibro(id) {
    const indice = libros.findIndex(libro => libro.id === id);
    if (indice > -1) {
      libros.splice(indice, 1);
      console.log("Libro con ID " + id + " eliminado.");
    } else {
      console.log("No se encontró ningún libro con ID " + id + ".");
    }
  }
  
  console.log("Libros antes de borrar:", libros);
  borrarLibro(3); // Elimina el libro con ID 3
  console.log("Libros después de borrar:", libros);

 /* 3. Gestión de Usuarios
A) Implementar una función registrarUsuario(nombre, email) que 
agregue un nuevo usuario al array usuarios.*/

const usuarios2 = [
    {
        id: 1,
        nombre: "Juan Perez",
        email: "juan.perez@example.com",
        librosPrestados: ["1", "3"]
    },
    {
        id: 2,
        nombre: "Ana Garcia",
        email: "ana.garcia@example.com",
        librosPrestados: ["2"]
    },
    {
        id: 3,
        nombre: "Luis Rodriguez",
        email: "luis.rodriguez@example.com",
        librosPrestados: ["1", "2", "3"]
    },
    {
        id: 4,
        nombre: "Marina Paredes",
        email: "marina.paredes@example.com",
        librosPrestados: ["4", "5"]
    },
    {
        id: 5,
        nombre: "Pedro Sanchez",
        email: "pedro.sanchez@example.com",
        librosPrestados: ["1"]
    }
];
function registrarUsuario(nombre, email) {
    const nuevoId = usuarios.length > 0 ? Math.max(...usuarios.map(usuario => usuario.id)) + 1 : 1;
    const nuevoUsuario = {
      id: nuevoId,
      nombre: nombre,
      email: email,
      librosPrestados: []
    };
    usuarios.push(nuevoUsuario);
    console.log("Nuevo usuario registrado:", nuevoUsuario);
  }
  
  registrarUsuario("Michelle Aveiro", "michelle.aveiro@example.com"); 

  /*B) Implementar una función mostrarTodosLosUsuarios() que me 
devuelva el array completo de usuarios*/

let usuarios3 = [
    {
        id: 1,
        nombre: "Juan Perez",
        email: "juan.perez@example.com",
        librosPrestados: ["1", "3"]
    },
    {
        id: 2,
        nombre: "Ana Garcia",
        email: "ana.garcia@example.com",
        librosPrestados: ["2"]
    },
    {
        id: 3,
        nombre: "Luis Rodriguez",
        email: "luis.rodriguez@example.com",
        librosPrestados: ["1", "2", "3"]
    },
    {
        id: 4,
        nombre: "Marina Paredes",
        email: "marina.paredes@example.com",
        librosPrestados: ["4", "5"]
    },
    {
        id: 5,
        nombre: "Pedro Sanchez",
        email: "pedro.sanchez@example.com",
        librosPrestados: ["1"]
    }
];
function mostrarTodosLosUsuarios() {
    usuarios.forEach(usuario => {
      console.log(`ID: ${usuario.id}`);
      console.log(`Nombre: ${usuario.nombre}`);
      console.log(`Email: ${usuario.email}`);
      console.log(`Libros Prestados: ${usuario.librosPrestados.join(', ')}`);
      console.log("--------------------"); 
    });
  }
  mostrarTodosLosUsuarios();

  /*C) Crear una función buscarUsuario(email) que devuelva la información 
de un usuario dado su email.*/

function buscarUsuarioEmail(email) {
    const usuario = usuarios.find(usuario => usuario.email === email);
    if (usuario) {
      return usuario;
    } else {
      console.log("No se encontró ningún usuario con el email " + email);
      return null; 
    }
  }
  const usuarioEncontrado = buscarUsuarioEmail("ana.garcia@example.com");
console.log(usuarioEncontrado);

/*D) Implementar una función borrarUsuario(nombre, email) que elimine el 
usuario seleccionado.*/

function borrarUsuario(nombre, email) {
    let indice = -1;
  
    // Buscar el índice del usuario por nombre y email
    for (let i = 0; i < usuarios.length; i++) {
      if (usuarios[i].nombre === nombre && usuarios[i].email === email) {
        indice = i;
        break;
      }
    }
  
    // Si se encuentra el usuario, eliminarlo
    if (indice > -1) {
      usuarios.splice(indice, 1);
      console.log(`Usuario ${nombre} con email ${email} eliminado.`);
    } else {
      console.log(`No se encontró ningún usuario con nombre ${nombre} y email ${email}.`);
    }
  }
  borrarUsuario("Ana Garcia", "ana.garcia@example.com");

  /*4. Sistema de Préstamos
A) Desarrollar una función prestarLibro(idLibro, idUsuario) que marque 
un libro como no disponible y lo agregue a la lista de libros prestados 
del usuario.*/

(function () {
const libros5 = [
    {
        id:1,
        titulo:"Noticia de un Secuestro",
        autor:"Gabriel Garcia Marquez",
        anio:"1996",
        genero:"No -Ficcion",
        disponible:true,
        describir: function() {
            return`El libro ${this.id} con titulo ${this.titulo} de ${this.autor} del anio ${this.anio} es de genero ${this.genero} y esta ${this.disponible ? 'disponible' : 'prestado'}`;

        }
    
    },

    {
        id:2,
    titulo:"Marque la Diferencia y Triunfe",
    autor:"Jim Champy",
    anio:"2009",
    genero:"Crecimiento Personal",
    disponible:true,
    describir: function() {
        return`El libro ${this.id} con titulo ${this.titulo} de ${this.autor} del anio ${this.anio} es de genero ${this.genero} y esta ${this.disponible ? 'disponible' : 'prestado'}`;

    }
    },

    {
        id:3,
        titulo:"Diccionario Amoroso del Psicoanalisis",
        autor:"Elizabeth Roudinesco",
        anio:"2017",
        genero:"psicologia",
        disponible:true,
        describir: function() {
            return`El libro ${this.id} con titulo ${this.titulo} de ${this.autor} del anio ${this.anio} es de genero ${this.genero} y esta ${this.disponible ? 'disponible' : 'prestado'}`;

        }
    },
    {
        id:4,
        titulo:"La Casa de los Espiritus",
        autor:"Isabel Allende",
        anio:"1982",
        genero:"Novela",
        disponible:true,
        describir: function() {
            return`El libro ${this.id} con titulo ${this.titulo} de ${this.autor} del anio ${this.anio} es de genero ${this.genero} y esta ${this.disponible ? 'disponible' : 'prestado'}`;

        }
    },
    {
        id:5,
        titulo:"Las 48 Leyes del Poder",
        autor:"Robert Greene",
        anio:"1998",
        genero:"Autoayuda",
        disponible:true,
        describir: function() {
            return`El libro ${this.id} con titulo ${this.titulo} de ${this.autor} del anio ${this.anio} es de genero ${this.genero} y esta ${this.disponible ? 'disponible' : 'prestado'}`;

        }
    },
    {
        id:6,
        titulo:"El Sutil Arte de que (casi todo) te Importe una Mierda",
        autor:"Mark Manson",
        anio:"2016",
        genero:"Autoayuda",
        disponible:true,
        describir: function() {
            return`El libro ${this.id} con titulo ${this.titulo} de ${this.autor} del anio ${this.anio} es de genero ${this.genero} y esta ${this.disponible ? 'disponible' : 'prestado'}`;

        }

    },
    {
        id:7,
        titulo:"Hamlet Macbeth",
        autor:"William Shakespeare",
        anio:"1980",
        genero:"Dramatico",
        disponible:true,
        describir: function() {
            return`El libro ${this.id} con titulo ${this.titulo} de ${this.autor} del anio ${this.anio} es de genero ${this.genero} y esta ${this.disponible ? 'disponible' : 'prestado'}`;

        }

    },
    {
        id:8,
        titulo:"El Nombre de la Rosa",
        autor:"Umberto Eco",
        anio:"1980",
        genero:"Novela",
        disponible:true,
        describir: function() {
            return`El libro ${this.id} con titulo ${this.titulo} de ${this.autor} del anio ${this.anio} es de genero ${this.genero} y esta ${this.disponible ? 'disponible' : 'prestado'}`;

        }

    },
    {
        id:9,
        titulo:"Memoria de Adriano",
        autor:"Marguerite Yourcenar",
        anio:"1951",
        genero:"Novela",
        disponible:true,
        describir: function() {
            return`El libro ${this.id} con titulo ${this.titulo} de ${this.autor} del anio ${this.anio} es de genero ${this.genero} y esta ${this.disponible ? 'disponible' : 'prestado'}`;

        }

    },
    {
        id:10,
        titulo:"Los Iluminados",
        autor:"Marcos Aguini",
        anio:"2000",
        genero:"Ficcion",
        disponible:true,
        describir: function() {
            return`El libro ${this.id} con titulo ${this.titulo} de ${this.autor} del anio ${this.anio} es de genero ${this.genero} y esta ${this.disponible ? 'disponible' : 'prestado'}`;

        }

    }



];
const usuarios5 = [
    {
        id: 1,
        nombre: "Juan Perez",
        email: "juan.perez@example.com",
        librosPrestados: ["1", "3"]
    },
    {
        id: 2,
        nombre: "Ana Garcia",
        email: "ana.garcia@example.com",
        librosPrestados: ["2"]
    },
    {
        id: 3,
        nombre: "Luis Rodriguez",
        email: "luis.rodriguez@example.com",
        librosPrestados: ["1", "2", "3"]
    },
    {
        id: 4,
        nombre: "Marina Paredes",
        email: "marina.paredes@example.com",
        librosPrestados: ["4", "5"]
    },
    {
        id: 5,
        nombre: "Pedro Sanchez",
        email: "pedro.sanchez@example.com",
        librosPrestados: ["1"]
    }
];

function buscarLibro(idLibro) {
    const libro = libros5.find(libro => libro.id === idLibro);
    if (!libro) {
      console.log(`No se encontró ningún libro con ID ${idLibro}.`);
      return null;
    }
    return libro;
  }
  
  function buscarUsuario(idUsuario) {
    const usuario = usuarios5.find(usuario => usuario.id === idUsuario);
    if (!usuario) {
      console.log(`No se encontró ningún usuario con ID ${idUsuario}.`);
      return null;
    }
    return usuario;
  }
  
  function prestarLibro(idLibro, idUsuario) {
    const libro = buscarLibro(idLibro);
    const usuario = buscarUsuario(idUsuario);
  
    if (!libro || !usuario) {
      return;
    }
  
    if (!libro.disponible) {
      console.log(`El libro ${libro.titulo} no está disponible.`);
      return;
    }
  
    if (usuario.librosPrestados.includes(idLibro)) {
      console.log(`El usuario ${usuario.nombre} ya tiene prestado el libro ${libro.titulo}.`);
      return;
    }
  
    libro.disponible = false;
    usuario.librosPrestados.push(idLibro);
  
    console.log(`El libro ${libro.titulo} ha sido prestado al usuario ${usuario.nombre}.`);
  }
  

  prestarLibro(1, 2);
})();
//Hice de todo para poder hacer este ejercicio pero nada funcionaba por eso lo ultimo que me quedaba por hacer es; Encapsular todo el codigo en una funcion autoejecutable.//

/*B) Implementar una función devolverLibro(idLibro, idUsuario) que 
marque un libro como disponible y lo elimine de la lista de libros 
prestados del usuario.*/

(function () {
     const libros5 = [
        {
            id:1,
            titulo:"Noticia de un Secuestro",
            autor:"Gabriel Garcia Marquez",
            anio:"1996",
            genero:"No -Ficcion",
            disponible:true,
            describir: function() {
                return`El libro ${this.id} con titulo ${this.titulo} de ${this.autor} del anio ${this.anio} es de genero ${this.genero} y esta ${this.disponible ? 'disponible' : 'prestado'}`;
    
            }
        
        },
    
        {
            id:2,
        titulo:"Marque la Diferencia y Triunfe",
        autor:"Jim Champy",
        anio:"2009",
        genero:"Crecimiento Personal",
        disponible:true,
        describir: function() {
            return`El libro ${this.id} con titulo ${this.titulo} de ${this.autor} del anio ${this.anio} es de genero ${this.genero} y esta ${this.disponible ? 'disponible' : 'prestado'}`;
    
        }
        },
    
        {
            id:3,
            titulo:"Diccionario Amoroso del Psicoanalisis",
            autor:"Elizabeth Roudinesco",
            anio:"2017",
            genero:"psicologia",
            disponible:true,
            describir: function() {
                return`El libro ${this.id} con titulo ${this.titulo} de ${this.autor} del anio ${this.anio} es de genero ${this.genero} y esta ${this.disponible ? 'disponible' : 'prestado'}`;
    
            }
        },
        {
            id:4,
            titulo:"La Casa de los Espiritus",
            autor:"Isabel Allende",
            anio:"1982",
            genero:"Novela",
            disponible:true,
            describir: function() {
                return`El libro ${this.id} con titulo ${this.titulo} de ${this.autor} del anio ${this.anio} es de genero ${this.genero} y esta ${this.disponible ? 'disponible' : 'prestado'}`;
    
            }
        },
        {
            id:5,
            titulo:"Las 48 Leyes del Poder",
            autor:"Robert Greene",
            anio:"1998",
            genero:"Autoayuda",
            disponible:true,
            describir: function() {
                return`El libro ${this.id} con titulo ${this.titulo} de ${this.autor} del anio ${this.anio} es de genero ${this.genero} y esta ${this.disponible ? 'disponible' : 'prestado'}`;
    
            }
        },
        {
            id:6,
            titulo:"El Sutil Arte de que (casi todo) te Importe una Mierda",
            autor:"Mark Manson",
            anio:"2016",
            genero:"Autoayuda",
            disponible:true,
            describir: function() {
                return`El libro ${this.id} con titulo ${this.titulo} de ${this.autor} del anio ${this.anio} es de genero ${this.genero} y esta ${this.disponible ? 'disponible' : 'prestado'}`;
    
            }
    
        },
        {
            id:7,
            titulo:"Hamlet Macbeth",
            autor:"William Shakespeare",
            anio:"1980",
            genero:"Dramatico",
            disponible:true,
            describir: function() {
                return`El libro ${this.id} con titulo ${this.titulo} de ${this.autor} del anio ${this.anio} es de genero ${this.genero} y esta ${this.disponible ? 'disponible' : 'prestado'}`;
    
            }
    
        },
        {
            id:8,
            titulo:"El Nombre de la Rosa",
            autor:"Umberto Eco",
            anio:"1980",
            genero:"Novela",
            disponible:true,
            describir: function() {
                return`El libro ${this.id} con titulo ${this.titulo} de ${this.autor} del anio ${this.anio} es de genero ${this.genero} y esta ${this.disponible ? 'disponible' : 'prestado'}`;
    
            }
    
        },
        {
            id:9,
            titulo:"Memoria de Adriano",
            autor:"Marguerite Yourcenar",
            anio:"1951",
            genero:"Novela",
            disponible:true,
            describir: function() {
                return`El libro ${this.id} con titulo ${this.titulo} de ${this.autor} del anio ${this.anio} es de genero ${this.genero} y esta ${this.disponible ? 'disponible' : 'prestado'}`;
    
            }
    
        },
        {
            id:10,
            titulo:"Los Iluminados",
            autor:"Marcos Aguini",
            anio:"2000",
            genero:"Ficcion",
            disponible:true,
            describir: function() {
                return`El libro ${this.id} con titulo ${this.titulo} de ${this.autor} del anio ${this.anio} es de genero ${this.genero} y esta ${this.disponible ? 'disponible' : 'prestado'}`;
    
            }
    
        }
    
    
    
    ];
    const  usuarios5 = [
        {
            id: 1,
            nombre: "Juan Perez",
            email: "juan.perez@example.com",
            librosPrestados: ["1", "3"]
        },
        {
            id: 2,
            nombre: "Ana Garcia",
            email: "ana.garcia@example.com",
            librosPrestados: ["2"]
        },
        {
            id: 3,
            nombre: "Luis Rodriguez",
            email: "luis.rodriguez@example.com",
            librosPrestados: ["1", "2", "3"]
        },
        {
            id: 4,
            nombre: "Marina Paredes",
            email: "marina.paredes@example.com",
            librosPrestados: ["4", "5"]
        },
        {
            id: 5,
            nombre: "Pedro Sanchez",
            email: "pedro.sanchez@example.com",
            librosPrestados: ["1"]
        }
    ];
    function devolverLibro(idLibro, idUsuario) {
        const libro = libros5.find(libro => libro.id === idLibro);
        if (!libro) {
          console.log(`No se encontró ningún libro con ID ${idLibro}.`);
          return;
        }
    
        const usuario = usuarios5.find(usuario => usuario.id === idUsuario);
        if (!usuario) {
          console.log(`No se encontró ningún usuario con ID ${idUsuario}.`);
          return;
        }
    
        const indiceLibro = usuario.librosPrestados.indexOf(idLibro);
        if (indiceLibro === -1) {
          console.log(`El usuario ${usuario.nombre} no tiene prestado el libro ${libro.titulo}.`);
          return;
        }
    
        libro.disponible = true;
        usuario.librosPrestados.splice(indiceLibro, 1);
    
        console.log(`El libro ${libro.titulo} ha sido devuelto por el usuario ${usuario.nombre}.`);
      }
  devolverLibro(1, 2);  
})();

/*5. Reportes
A) Crear una función generarReporteLibros() que utilice métodos 
avanzados de arrays (.map(), .filter(), .reduce()) para generar un 
reporte con la siguiente información:
✓ Cantidad total de libros.
✓ Cantidad de libros prestados.
✓ Cantidad de libros por género.
✓ Libro más antiguo y más nuevo*/

function generarReporteLibros() {
    // Cantidad total de libros
    const totalLibros = libros.length;
  
    // Cantidad de libros prestados
    const librosPrestados = libros.filter(libro => !libro.disponible).length;
  
    // Cantidad de libros por género
    const librosPorGenero = libros.reduce((acc, libro) => {
      acc[libro.genero] = (acc[libro.genero] || 0) + 1;
      return acc;
    }, {});
  
    // Libro más antiguo y más nuevo
    const librosOrdenadosPorAnio = libros.sort((a, b) => a.anio - b.anio);
    const libroMasAntiguo = librosOrdenadosPorAnio[0];
    const libroMasNuevo = librosOrdenadosPorAnio[librosOrdenadosPorAnio.length - 1];
  
    // Generar el reporte
    const reporte = {
      totalLibros: totalLibros,
      librosPrestados: librosPrestados,
      librosPorGenero: librosPorGenero,
      libroMasAntiguo: libroMasAntiguo,
      libroMasNuevo: libroMasNuevo
    };
  
    return reporte;
  }
  const reporte = generarReporteLibros();
console.log(reporte);

/*6. Identificación Avanzada de libros
A) Implementar una función librosConPalabrasEnTitulo() que identifique 
y muestre todos los libros cuyo título contiene más de una palabra
(no títulos que contengan números ni otros caracteres).*/

function librosConPalabrasEnTitulo() {
    const librosConVariasPalabras = libros.filter(libro => {
      const palabras = libro.titulo.split(" ");
      // Verifica si hay más de una palabra y que todas las palabras solo contengan letras
      return palabras.length > 1 && palabras.every(palabra => /^[a-zA-Z]+$/.test(palabra));
    });
  
    if (librosConVariasPalabras.length > 0) {
      console.log("Libros con más de una palabra en el título:");
      librosConVariasPalabras.forEach(libro => console.log("- " + libro.titulo));
    } else {
      console.log("No hay libros con más de una palabra en el título.");
    }
  }
  librosConPalabrasEnTitulo();

  /*B) La función debe devolver un array con los títulos de esos libros y 
mostrarlo en la consola.*/

function librosConPalabrasEnTitulo() {
    const librosConVariasPalabras = libros.filter(libro => {
      const palabras = libro.titulo.split(" ");
      return palabras.length > 1 && palabras.every(palabra => /^[a-zA-Z]+$/.test(palabra));
    });
  
    if (librosConVariasPalabras.length > 0) {
      console.log("Libros con más de una palabra en el título:");
      librosConVariasPalabras.forEach(libro => console.log("- " + libro.titulo));
    } else {
      console.log("No hay libros con más de una palabra en el título.");
    }
  }
  librosConPalabrasEnTitulo();

 /* 7. Cálculos Estadísticos
a) Desarrollar una función calcularEstadisticas() que utilice el objeto 
Math para calcular y mostrar:
✓ Promedio de años de publicación de los libros.
✓ Año de publicación más frecuente.
✓ Diferencia en años entre el libro más antiguo y el más nuevo*/

function calcularEstadisticas() {
    // Calcular el promedio de años de publicación
    const promedioAnios = libros.reduce((suma, libro) => suma + libro.anio, 0) / libros.length;
  
    // Encontrar el año de publicación más frecuente
    const anios = libros.map(libro => libro.anio);
    const conteoAnios = {};
    let anioMasFrecuente;
    let maxFrecuencia = 0;
    for (const anio of anios) {
      conteoAnios[anio] = (conteoAnios[anio] || 0) + 1;
      if (conteoAnios[anio] > maxFrecuencia) {
        anioMasFrecuente = anio;
        maxFrecuencia = conteoAnios[anio];
      }
    }
  
    // Calcular la diferencia en años entre el libro más antiguo y el más nuevo
    const aniosOrdenados = anios.sort((a, b) => a - b);
    const diferenciaAnios = aniosOrdenados[aniosOrdenados.length - 1] - aniosOrdenados[0];
  
    // Mostrar las estadísticas
    console.log(`Promedio de años de publicación: ${promedioAnios}`);
    console.log(`Año de publicación más frecuente: ${anioMasFrecuente}`);
    console.log(`Diferencia en años entre el libro más antiguo y el más nuevo: ${diferenciaAnios}`);
  }
  calcularEstadisticas();

  /*8. Manejo de Cadenas
A) Crear una función normalizarDatos() que utilice métodos de strings 
para:
✓ Convertir todos los títulos a mayúsculas.
✓ Eliminar espacios en blanco al inicio y final de los nombres de 
autores.
✓ Formatear los emails de los usuarios a minúsculas.*/

function normalizarDatos() {
    
    libros.forEach(libro => {
      libro.titulo = libro.titulo.toUpperCase();
      libro.autor = libro.autor.trim();
    });
  
    usuarios.forEach(usuario => {
      usuario.email = usuario.email.toLowerCase();
    });
  
    console.log("Datos normalizados:");
    console.log("Libros:", libros);
    console.log("Usuarios:", usuarios);
  }
  normalizarDatos();

 /* 9. Interfaz de Usuario por Consola
A) Implementar una función menuPrincipal() que muestre un menú de 
opciones al usuario y permita interactuar con el sistema utilizando 
prompt().*/

function menuPrincipal() {
    let opcion;
  
    do {
      // Mostrar el menú de opciones
      opcion = prompt(`
        Menú Principal:
  
        1. Agregar libro
        2. Buscar libro
        3. Ordenar libros
        4. Borrar libro
        5. Mostrar todos los libros
        6. Agregar usuario
        7. Buscar usuario
        8. Borrar usuario
        9. Mostrar todos los usuarios
        10. Prestar libro
        11. Devolver libro
        12. Generar reporte de libros
        13. Libros con varias palabras en el título
        14. Calcular estadísticas de libros
        15. Normalizar datos
        16. Salir
  
        Ingrese el número de la opción deseada:
      `);
  
      // Procesar la opción seleccionada
      switch (opcion) {
        case "1":
          // Obtener los datos del nuevo libro
          const id = prompt("Ingrese el ID del libro:");
          const titulo = prompt("Ingrese el título del libro:");
          const autor = prompt("Ingrese el autor del libro:");
          const anio = parseInt(prompt("Ingrese el año de publicación del libro:"));
          const genero = prompt("Ingrese el género del libro:");
          // Agregar el libro
          agregarLibro(id, titulo, autor, anio, genero);
          break;
        case "2":
          // Obtener el criterio y valor de búsqueda
          const criterio = prompt("Ingrese el criterio de búsqueda (titulo, autor o genero):");
          const valor = prompt("Ingrese el valor de búsqueda:");
          // Buscar el libro
          const librosEncontrados = buscarLibro(criterio, valor);
          // Mostrar los resultados
          if (librosEncontrados.length > 0) {
            console.log("Libros encontrados:");
            librosEncontrados.forEach(libro => console.log(libro));
          } else {
            console.log("No se encontraron libros.");
          }
          break;
        case "3":
          // Obtener el criterio de ordenamiento
          const criterioOrdenamiento = prompt("Ingrese el criterio de ordenamiento (titulo o anio):");
          // Ordenar los libros
          ordenarLibros(libros, criterioOrdenamiento);
          break;
        case "4":
          // Obtener el ID del libro a borrar
          const idBorrar = prompt("Ingrese el ID del libro a borrar:");
          // Borrar el libro
          borrarLibro(idBorrar);
          break;
        case "5":
          // Mostrar todos los libros
          mostrarTodosLosLibros();
          break;
        case "6":
          // Obtener los datos del nuevo usuario
          const nombre = prompt("Ingrese el nombre del usuario:");
          const email = prompt("Ingrese el email del usuario:");
          // Agregar el usuario
          registrarUsuario(nombre, email);
          break;
        case "7":
          // Obtener el email del usuario a buscar
          const emailBuscar = prompt("Ingrese el email del usuario a buscar:");
          // Buscar el usuario
          const usuarioEncontrado = buscarUsuarioEmail(emailBuscar);
          // Mostrar el resultado
          if (usuarioEncontrado) {
            console.log("Usuario encontrado:");
            console.log(usuarioEncontrado);
          } else {
            console.log("No se encontró el usuario.");
          }
          break;
        case "8":
          // Obtener el nombre y email del usuario a borrar
          const nombreBorrar = prompt("Ingrese el nombre del usuario a borrar:");
          const emailBorrar = prompt("Ingrese el email del usuario a borrar:");
          // Borrar el usuario
          borrarUsuario(nombreBorrar, emailBorrar);
          break;
        case "9":
          // Mostrar todos los usuarios
          mostrarTodosLosUsuarios();
          break;
        case "10":
          // Obtener el ID del libro y del usuario
          const idLibroPrestar = parseInt(prompt("Ingrese el ID del libro a prestar:"));
          const idUsuarioPrestar = parseInt(prompt("Ingrese el ID del usuario que prestará el libro:"));
          // Prestar el libro
          prestarLibro(idLibroPrestar, idUsuarioPrestar);
          break;
        case "11":
          // Obtener el ID del libro y del usuario
          const idLibroDevolver = parseInt(prompt("Ingrese el ID del libro a devolver:"));
          const idUsuarioDevolver = parseInt(prompt("Ingrese el ID del usuario que devolverá el libro:"));
          // Devolver el libro
          devolverLibro(idLibroDevolver, idUsuarioDevolver);
          break;
        case "12":
          // Generar el reporte de libros
          const reporte = generarReporteLibros();
          console.log(reporte);
          break;
        case "13":
          // Mostrar libros con varias palabras en el título
          librosConPalabrasEnTitulo();
          break;
        case "14":
          // Calcular estadísticas de libros
          calcularEstadisticas();
          break;
        case "15":
          // Normalizar datos
          normalizarDatos();
          break;
        case "16":
          // Salir del menú
          console.log("Saliendo del sistema...");
          break;
        default:
          console.log("Opción inválida. Intente nuevamente.");
      }
    } while (opcion !== "16");
  }
  menuPrincipal(); 
  
  




