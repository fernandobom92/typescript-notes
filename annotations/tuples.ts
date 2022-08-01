const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

type Drink = [string, boolean, number]; //cria um tipo para ser designado

const pepsi: Drink = ['brown', true, 40];
const sprint: Drink = ['clear', false, 39];
const tea: Drink = ['red', true, 45];