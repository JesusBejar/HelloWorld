// define type FIRST, id, make, model, year
type CarType = {
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
// car array
let carArray: Car[] = [];

// get car info
async function getCarInfo(carAPI: string): Promise<void> {
  try {
    const response = await fetch(apiUrl);
    if (response.ok) {
      const data: CarType[] = await response.json();

      // Create Car objects and add to the list
      carArray = data.map(
        (carData) =>
          new Car(carData.id, carData.make, carData.model, carData.year)
      );
      console.log("Cars fetched successfully");
    }
  } catch (error) {
    console.error("Cars not fetched successfully:", error);
  }
}

// display car info
function displayCarInfo() {}

// init function
function init() {
  const carAPI: string = "";
}
