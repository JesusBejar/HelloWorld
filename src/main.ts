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
async function getCarInfo(carAPI: string, apiKey: string): Promise<void> {
  try {
    const response = await fetch(carAPI);
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
  console.log("two");
}
// log car info
function logCarInfo(): void {
  console.log("three");

  console.log("Car list:");
  // this would print the entire list correct?
  console.log(carArray);
  // or does this work better?
  carArray.forEach((car) => {
    console.log(` - ${car.formatString()}`);
  });
  console.log("four");
}

// display car info
function displayCarInfo() {
  const textSection = document.querySelector("#car-info") as HTMLElement;
  if (textSection) {
    textSection.innerHTML = "";
    textSection.innerHTML = `
    ${carArray
      .map(
        (car) =>
          `<ul>
        <li> ${car.getId()}</li>
        <li> Car Make - ${car.getMake()}</li>
        <li> Car Model - ${car.getModel()}</li>
        <li> Car Year - ${car.getYear()}</li>
        </ul>`
      )
      .join(" ")}`;
  } else {
    console.log("Car text section not found!");
  }
  console.log("six");
}

// init function
async function init() {
  const apiKey: string = "v4cXaQ9md1PF4Nc2jiRbeA==Hrh7qCQHSxCuk9fA";
  const carAPI: string = "https://api.api-ninjas.com/v1/cars?make=toyota";
  
  const btnOne = document.querySelector("#btnOne") as HTMLButtonElement;
  const btnTwo = document.querySelector("#btnTwo") as HTMLButtonElement;
  
  await getCarInfo(carAPI, apiKey);
  
  btnOne.addEventListener("click", (e) => {
    displayCarInfo();
  });
  btnTwo.addEventListener("click", (e) => {
    logCarInfo();
  });
}

window.onload = init;
