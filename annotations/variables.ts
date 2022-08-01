let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothing: null = null;
let undef: undefined = undefined;

//

let now: Date = new Date();

// array

let cores: string[] = ['red', 'green', 'blue'];
let numeros: number[] = [1,2,3,4];
let verdades: boolean[] = [true, false, true];

// classes geralmente começam com maiuscula

class Car {}

let carros: Car = new Car;

//object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// quando usar annotations:
// 1 - função que retorna 'any' type

const json = '{"x": 10, "y": 20}';
const coordenadas: { x: number; y: number } = JSON.parse(json);
console.log(coordenadas);

// 2 - quando declaramos a variavel em uma linha e inicializamos depois
let words = ['red', 'green', 'blue'];
let find: boolean; //melhor usar find = false para inicializar

for (let i=0; i < words.length; i++) {
  if (words[i] === 'green') {
    find = true;
  }
}

// 3 - variaveis que não podem ser detectadas automaticamente
let numbers = [-10, -1, -12];
let numberAboveZero: boolean | number = false; //a variavel pode ser boolean ou numero

for (let i=0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}