// define type FIRST, id, make, model, year
type CarInfo = {
  id: number;
  make: string;
  model: string;
  year: number;
};
// define class SECOND
class Car {
  // constructors
  constructor(
    private id: number,
    private make: string,
    private model: string,
    private year: number
  ) {
    (this.id = id),
      (this.make = make),
      (this.model = model),
      (this.year = year);
  }

  // public displayMake() {
  //   return `here is the make ${this.make}`;
  // }
}
// const Nissan305Z = new Car(1, "Nissan", "350Z", 2010);
// console.log(Nissan305Z.displayMake());

// get car info
function getCarInfo() {}

// display car info
function displayCarInfo() {}

// init function
function init() {}
