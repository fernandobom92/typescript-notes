import fs from 'fs';


//recebe generic <T> vindo de <MatchData> na classe MatchReader 
export abstract class CsvFileReader<T> {
  data: T[] = []; //inicia um array do tipo MatchData com a propriedade 'data'
  
  //recebe filename como o primeiro argumento
  constructor(public filename: string) {}

  abstract mapRow(row: string[]): T;
  
  //formata os dados usando a variavel filename vinda do constructor
  //acessamos através de read.data
  read(): void {
    this.data = fs.readFileSync(this.filename, {
      encoding: 'utf-8'
    }).split('\n')
      .map(
        (row: string): string[] => { 
          return row.split(','); 
        }
      ).map(this.mapRow);
  }
}