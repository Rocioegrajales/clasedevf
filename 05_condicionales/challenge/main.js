//alert ("Hola");

let jugador1 = prompt("Ingresa Jugador 1");
let jugador2 = prompt("Ingresa Jugador2");

if(jugador1 === jugador2){
    console.log("Empatados");
}else if(jugador1 === "piedra" && jugador2 === "tijera" || jugador1 === "papel" && jugador2 === "piedra" ||
    jugador1 === "tijera" && jugador2 === "papel"){
        console.log("El jugador1 ganó");
    }else if(jugador2 === "piedra" && jugador1 === "tijera" || jugador2 === "papel" && jugador1 === "piedra" ||
    jugador2 === "tijera" && jugador1 === "papel"){
        console.log("Jugador 2 ganó");
    }else{
        console.log("Error");
    }
    