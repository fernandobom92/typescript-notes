const profile = {
  nome: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
};

const { age, nome }: { age: number; nome: string } = profile;
const { coords: { lat, lng } }: { coords: { lat: number, lng: number } } = profile;