const carObject = {
    // properties
    brand: 'Ford',
    color: 'red',
    maxSpeed: 200,
    chassisNumber: 'f-1',
    // methods
    drive: () => {
      console.log('driving');
    },
    reverse: () => {
      console.log('reversing');
    },
    turn: () => {
      console.log('turning');
    }
  }
   
  console.log(carObject.brand); // Ford
  console.log(carObject.color); // red
  console.log(carObject.maxSpeed); // 200
  console.log(carObject.chassisNumber); // f-1
  carObject.drive(); // driving
  carObject.reverse(); // reversing
  carObject.turn(); // turning

  function Car(brand, color, maxSpeed, chassisNumber) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chassisNumber = chassisNumber;
  }
   
  Car.prototype.drive = function() {
    console.log(`${this.brand} ${this.color} is driving`);
  }
   
  Car.prototype.reverse = function() {
    console.log(`${this.brand} ${this.color} is reversing`);
  }
   
  Car.prototype.turn = function() {
    console.log(`${this.brand} ${this.color} is turning`);
  }