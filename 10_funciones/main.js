

// 

// function suma(){
//     console.log(5 +5);
// }
// suma()

function suma(a, b){
    console.log(a + b);
};

  // a   b
suma(10, 20)
suma(100, 50)
 
// ECMA
const resta = (c, d) => {
    console.log(c - d);
};

resta(100, 50)

suma(200, 50)

// Área de un cuadrado
const areacuadrado = (l) => {
    console.log(l * l);
};
areacuadrado(5)

// Área de un triángulo
const areatriangulo = (b, h) => {
    console.log(b * h / 2);
};
areatriangulo(10, 15)

// Crear una función que recorra los números del 1 al 100
// Si el número es divsible entre 3 => Fizz
// Si el número es divsible entre 5 => Buzz
// Si el número es divsible entre 5 y 3 => FizzBuzz
// Si no es divisible entre estos numeros sólo lo imprimo en la consola

for(let i=1; i <= 100; i++) {
    let division3 = i % 3
    let division5 = i % 5
        if (division3 === 0 && division5 === 0) {
            console.log( i +" FizzBuzz");
        }else if(division5 === 0) {
            console.log(i + " Buzz");
        }else if(division3 === 0) {
            console.log(i + " Fizz");
        }else{
            console.log(i);
    }
};