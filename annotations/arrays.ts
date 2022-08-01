const carMakers: string[] = ['ford', 'toyota', 'chevrolet'];

const numerais: number[] = [1, 2, 3, 4, 5];

const dates: Date[] =  [new Date(), new Date()];

const carsByMake: string[][] = [
  ['f150'],
  ['corolla'],
  ['camaro']
];

// ajuda com inference extraindo valores
const car = carMakers[0];
const myCar = carMakers.pop();

//previne valores incompativeis
carMakers.push(100);

//ajuda com map statements
carMakers.map((car: string): string => {
  return car;
});

//tipos flexiveis
const importDates: (Date | string)[] = [new Date(), '2022-10-10'];
importDates.push('2022-15-21');
importDates.push(new Date());
importDates.push(100); //não aceita!!!