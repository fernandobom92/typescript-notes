@classDecorator
class Boat {
  @testDecorator
  color: string = 'vermelho';

  @testDecorator
  get formattedColor(): string {
    return `a cor deste barco: ${this.color}`;
  }

  @logError('algum erro ruim')
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator generateWake: boolean

  ): void {
    if (speed === 'fast') {
      console.log('super rapido')
    } else {
      console.log('muito devagar')
    }
  }
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index)
}

function testDecorator(target: any, key: string) {
  console.log(key);
}

function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log('erro:', errorMessage);
      }
    };
  }
}