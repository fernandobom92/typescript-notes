class Sorter {
  constructor(public collection: number[]) {}

  sort(): void {
    const { length } = this.collection; //cria uma variavel e pega o valor de length vindo de collection

    for (let i = 0; i < length; i++) { //percorre todo o array
      for (let j = 0; j < length - i - 1; j++) { //percorre excluindo o ultimo da direita
        if (this.collection[j] > this.collection[j + 1]) { //compara os 2 ultimos numeros da direita
          const leftNum = this.collection[j]; //armazena o menor numero entre os 2
          this.collection[j] = this.collection[j+1]; //joga o valor do maior numero para o fim do array
          this.collection[j+1] = leftNum; //joga o valor do menor numero para a esquerda
        }
      }
    }
  }
}

const sorter = new Sorter([10, -7, 8, 14]);
sorter.sort(); //passa o array pela função sort
console.log(sorter.collection);