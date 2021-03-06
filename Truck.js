/**
 * The Truck.js is a subclass for Vehicles.java file.
 * 
 * @author Wajd Mariam <wajd.mariam@mths.ca>
 * Version 1.0
 * Created on : 2021/01/13
 */
 
// Importing the class WajdStack from another file
const Vehicles = require("./Vehicles.js");

class Truck extends Vehicles {
  // Constructors that define Bike subclass.
  constructor(colorTruck) {
    super(colorTruck);
    this.licensePlateNumber = "";
  }
  
  // Setting license plate number Method
  licensePlateSetter(licensePlate) {
    this.licensePlateNumber = licensePlate;
  }
  
  // License plate getter.
  licensePlateGetter() {
    return this.licensePlateNumber;
  }
  
  // Method to calculate cadence
  provideAir() {
    return "HONK HONK";
  }
}
  
// Exporting the class
module.exports = Truck;
