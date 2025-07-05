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

  // getters, they are used to bypass the encapsulation principle i think
  getId(): number {
    return this.id;
  }

  getMake(): string {
    return this.make;
  }

  getModel(): string {
    return this.model;
  }

  getYear(): number {
    return this.year;
  }
  // format info into str
  formatString(): string {
    return `${this.make} ${this.model} ${this.year}`;
  }
}

// get car info
function getCarInfo() {}

// display car info
function displayCarInfo() {}

// init function
function init() {}
