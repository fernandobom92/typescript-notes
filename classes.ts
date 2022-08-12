class Vehicle {
  constructor(public color: string) {} //executa automaticamente, recebe os args

  protected honk(): void { //protected pode ser chamado dentro da classe e nas subclasses
    console.log('beeeep');
  }
}

const vehicle = new Vehicle('orange'); //envia os args para o constructor
console.log(vehicle.color);

class Car extends Vehicle{ //puxa os métodos da classe Vehicle
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void { //private pode ser chamado apenas dentro da propria classe
    console.log('vruuuum');
  }

  startDrivingProcess(): void {
    car.honk();
    car.drive();
  } 
}

const car = new Car(4,'red');
car.startDrivingProcess();
console.log(car.color);