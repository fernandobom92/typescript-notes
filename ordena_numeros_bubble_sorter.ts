class Sorter {
  constructor(public collection: number[]) {}

  sort(): void {
    const { length } = this.collection;

    for(let i=0; i<length; i++) { //faz o loop até o fim do array
      for(let j=0; j < length - i - 1; j++) { //exclui o ultimo da direita a cada loop
        if(this.collection[j] > this.collection[j+1]) { //compara para achar o maior numero
          const leftNum = this.collection[j]; //armazena o menor numero entre os 2 numeros
          this.collection[j] = this.collection[j+1]; //joga o valor do maior numero para o fim do array
          this.collection[j+1] = leftNum; //joga o valor do menor numero para a esquerda
        }
      }
    }
  }
}

const sorter = new Sorter([90, -35, 56, -7, 67, 100, -56]);
sorter.sort();
console.log(sorter.collection);
