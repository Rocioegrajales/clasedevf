//alert ("Hola");

let arreglo = [];

let flores = ["Rosas", "Margaritas", " Tulipanes", "Girasol"];


flores [4] = "Orquídea"

console.log(flores);

console.log(flores[2]);

// MÉTODOS

// .push() --> Agrega un elemento en la última posición

flores.push("Rosas rojas");

console.log(flores);

// .pop  --> Borra el último elemento

flores.push(true);
console.log(flores);

flores.pop()
console.log(flores);

// .splice --> Borra el elemento que le ordene, desde qué posición, 
// cuántas posiciones

flores.splice(0,2)
console.log(flores);

// Para borrar y sola

flores.splice(3,1)  // Sólo 3
console.log(flores);

// carro de compras es un arreglo vacío, si compra algo...push

// Objetos

let persona = {
    nombre: "Ricardo",
    tel: "123356789",
    direccion: "Bogotá",
    familia: true,
    musica: ["Salsa", "Cumbia", "Reggaeton", "Metal"],
    peliculas: {
        terror: false,
        romanticas: ["Titanic", "Romeo y JUlieta",
    ["prueba1", {
        dato1: "Soy un crack"
    }]]
    }
}

console.log(persona);

// Para acceder a una propiedad del objeto

console.log(persona.nombre);
console.log(persona.musica[2]);
console.log(persona.peliculas.romanticas[1]);
console.log(persona.peliculas.romanticas[2][1].dato1);





