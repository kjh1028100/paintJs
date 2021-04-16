//class ex
class Coffe {
  constructor(name, coin, number) {
    this.name = name;
    this.coin = coin;
    this.number = number;
  }

  make() {
    return `${this.name}이 생성중입니다.`;
  }

  change() {
    if (this.coin > 25) {
      return `${this.coin - 25}잔돈입니다`;
    } else if (this.coin < 25) {
      return `${25 - this.coin}원이 모자랍니다`;
    }
  }

  get coin() {
    return this._coin;
  }

  set coin(value) {
    this._coin = value < 0 ? `${value}이 부족합니다` : value;
  }
}

const person1 = new Coffe("vallena", 20, 1);
console.log(person1.change());
console.log(person1.make());
