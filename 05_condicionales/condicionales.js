/// alert(‘Descarga ya!’)
// if(condicion){
//     bloque de codigo si se cumple
// }else{
//     bloque de codigo si no se cumple
// }
let num1 = 10
let num2 = "500"

//typeof es para saber que tipo de valor tiene la varible
// console.log(typeof(num2));
//-----operadores logicos------
// =  --> Da un valor
// == --> compara valores
// === --> compara identicos
//100

if(num1 === "10"){
    console.log("Es verdad");
}else{
    console.log("No es verdad")
}

// Si número 10 es mayor o menor que 5

// Módulo
// Decir si un número es par o impar

if (num1 > 5 ){
    console.log ("El número es mayor que 5");
}else{
    console.log ("El número es menor que 5");
}

// El módulo 

if (num1 % 2 === 0){
    console.log (num1 + " " + ": es par");
}else{
    console.log ("El número es impar");
};



// Operadores lógicos
// and  &&
// or ||
// Pase para conducir

let preguntaEdad = prompt("Ingresa tu edad");
// console.log(typeof(edad));

let edad = Number(preguntaEdad);
// console.log(typeof(edad));

if(edad >= 18 && edad <= 70){
    console.log("Puedes conducir :D");
}else if (edad === 16 || edad === 17){
    console.log("Puedes sacar el permiso");
}else if (edad < 16 || edad > 70){
    console.log("No puedes conducir");
}
else{
    console.error("Datos incorrectos");  // En lugar de error puede colocar warn
};

let password= "perritoSalchicha123"

let login = prompt("Ingresa tu contraseña");

if(password === login){
    console.log("Bienvenida Rocío :D");
}else{
    console.error("Eres un intruso");
}
// ---------
// let numero = 10
// lettexto = "Hola"
// let falso = true   // En lugar de false tuve que escribir falso, por teclado en inglés

// console.log(typeoff(numero));
// console.log(typeoff(texto));
// console.log(typeoff(falso));

// Juego piedra, papel o tijera

let player1 = prompt("Elija piedra, Papel o Tijera").toLowerCase();
let player2 = prompt("Elija piedra, Papel o Tijera").toLowerCase()

// if(player1 === player2){
//     console.log("Es un empate");
// }else if (player1 === "Papel" && player2 === "Piedra" || player1 ===
// "Tijera" && player2 === "Papel")

// Con if anidados:

if (player1 ==="papel" || player1 === "piedra" || player1 === "tijera"){
    if (player2 ==="papel" || player2 === "piedra" || player2 === "tijera"){
    // Se ejecuta el programa principal
        if(player1 === player2){
        console.log("Empate");
        }else if(player1 === "piedra"){
            if(plaayer2 === "papel"){
                console.log("Gana player 2 porque papel vence a piedra");
            }else if(player2 === "tijera"){
                console.log("Gana player 1 porque piedra gana a atijera");
            }
        }
    }
}

















j



