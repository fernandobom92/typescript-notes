class NumbersArray {
  constructor(public collection: number[]){}

  get(index: number): number {
    return this.collection[index];
  }
}

class StringsArray {
  constructor(public collection: string[]) {}

  get(index: string): string {
    return this.collection[index];
  }
}

//condensa as classes acima usando generics <T>
class BothArray<T> {
  constructor(public collection: T[]) {}

  get (index: number): T {
    return this.collection[index];
  }
}
//para chamar
new BothArray<string>(['a','b','c']);
new BothArray<number>([1,2,3]);

//tambem funciona sem a declaração, mas não é recomendado
new BothArray(['a','b','c']);
new BothArray([1,2,3]);

//exemplo de generics com funções
function printStrings(arr: string[]): void {
  for (let i=0; i<arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i=0; i<arr.length; i++) {
    console.log(arr[i]);
  }  
}

function printAll<T>(arr: T[]): void {
  for (let i=0; i<arr.length; i++) {
    console.log(arr[i]);
  }  
}

//para chamar
printAll<string>(['a', 'b', 'c']);
//tambem funciona sem a declaração, mas não é recomendado
printAll(['a', 'b', 'c']);

//generic constraints
class Cars {
  print() {
    console.log('i am a car');
  }
}

class House {
  print() {
    console.log('i am a house');
  }
}

interface Printable {
  print(): void;
}

// T extends Printable referencia a interface acima
function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i=0; i < arr.length; i++) {
    arr[i].print();
  }
}

//para chamar
printHousesOrCars<House>([new House(), new House()]);
printHousesOrCars<Cars>([new Cars(), new Cars()]);