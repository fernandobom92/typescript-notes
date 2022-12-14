import fs from 'fs';

const matches = fs.readFileSync('football.csv', {
  encoding: 'utf-8'
}).split('\n').map((row: string): string[] => { return row.split(','); });

let manWins = 0;

for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === 'H') {
    manWins++;
  } else if (match[2] === 'Man United' && match[5] === 'A') {
    manWins++;
  }

}

console.log(`Manchester United venceu ${manWins} jogos`);