class Car {
    static getSpecs({ maxSpeed, speed, isOn, distance, price }) {
        console.log(
          `Параметри: maxSpeed: ${maxSpeed} speed: ${speed} isOn: ${isOn} distance: ${distance} price: ${price}`
        );
      }

      constructor({ speed = 0, maxSpeed, isOn = false, distance = 0, price }) {
        this.speed = speed;
        this.price = price;
        this.maxSpeed = maxSpeed;
        this.isOn = isOn;
        this.distance = distance;
      }



      turnOn() {
        this.isOn = true;
      }

      turnOff() {
        this.isOn = false;
      }

      accelerate(value) {
        if (this.speed + value > this.maxSpeed) {
          return;
        } else {
          this.speed += value;
        }
    }

    decelerate(value) {
        if (this.speed - value < 0) {
          return;
        } else {
          this.speed -= value;
        }
      }

      drive(hours) {
        if (this.isOn === true) {
          this.distance = this.distance + hours * this.speed;
        }
      }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);

console.log(mustang.price);
mustang.price = 4000;
console.log(mustang.price);
