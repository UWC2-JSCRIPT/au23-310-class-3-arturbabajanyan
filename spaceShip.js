// 1. Create a class function SpaceShip
// - should set two properties: name and topSpeed
// - should have a method accelerate that logs to the console 
//   `${name} moving to ${topSpeed}`
class SpaceShip {
    constructor(name, topSpeed) {
      this.name = name;
      this.topSpeed = topSpeed;
    }
    accelerate() {
        return `${this.name} moving to ${this.topSpeed}`;
      }
  }


// 2. Call the constructor with a couple ships, 
// and call accelerate on both of them.

const spaceShip1 = new SpaceShip("Galactica", '105000');
const spaceShip2 = new SpaceShip("Destroyer", '39000');

console.log (spaceShip1.accelerate());
console.log (spaceShip2.accelerate());