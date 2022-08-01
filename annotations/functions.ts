const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
};

const multiply = function(a: number , b: number): number {
  return a * b;
};

const logger = (message: string): void => { //void nao precisa retornar nada
  console.log(message);
};

const error = (message: string): never => { //indica um erro e nao finaliza a função
  throw new Error(message);
};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
}

const logWeather = ({ date, weather }: { date: Date, weather: string }): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
