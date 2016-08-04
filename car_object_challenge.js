function carObject (newMake, newModel, newYear, newColor) {
  var speed = 50; //speed should start at zero, changed to 50 to test brake function
  return {
    make : newMake,
    model: newModel,
    year: newYear,
    color: newColor,
    getInfo: function() {
      return (this.make + " " + this.model + " " + this.year + " " + this.color);},
      //make sure the function ends with a comma, so that its added to the list.
    getSpeed: function() { return speed;},
      //Adds 10mph each time, saves to getSpeed, doesn't return everything.
    accelerate: function() {speed = speed + 1},//changed from 10 for story 5
    brake: function () {return speed = speed - Math.floor(Math.random() * ((.5 * speed) - 0 + 1)) + 0},
  }
}
// ***************************************
// Sometimes roads are slippery and downhill, and sometimes brakes fail: make the brake change the speed by a random amount with a maximum of minus 1/2 of the current speed. (Hint: Math.random()

  //brake function decreases speed by a random number between half of the maximum (50 in this example) and zero and returns the new speed

  var car1 = carObject("Toyota", "Camry", 2000, "red");
//have to call this after you call the function because you need to store the info into a new variable (car1)

// ***************************************
// Create a loop that accelerates the car up to 70mph.
// ******************************************
//when speed function is less than 70, car will go up by 10
while (car1.getSpeed() < 70) {
  car1.accelerate();
console.log(car1.getSpeed());
//if speed is 70, then the break function will stop the while loop from running
if (car1.getSpeed() === 70){
  break;
}
}

// ***************************************
// Create a loop that decelerates the car to 0pmh.
// Call break after the car is at 0mph.
// ******************************************
//if the speed is less than or equal to 70, then it will go down by 7
while (car1.getSpeed() <=70) {
  car1.brake();
console.log(car1.getSpeed());
//if speed is equal to or less than 0, then stop the while loop
if (car1.getSpeed() <=0){
    break;
}
}
// ******************************************
// Limit the car's maximum speed to 85mph. Try taking it above 80mph and see what happens.
// ***************************************


while (car1.getSpeed() < 85) {
  car1.accelerate();
console.log(car1.getSpeed());
//if speed is 70, then the break function will stop the while loop from running
if (car1.getSpeed() === 85){
  break;
}
}
//if the speed is less than or equal to 70, then it will go down by 7
while (car1.getSpeed() <=85) {
  car1.brake();
console.log(car1.getSpeed());
//if speed is equal to or less than 0, then stop the while loop
if (car1.getSpeed() <=0){
    break;
}
}
