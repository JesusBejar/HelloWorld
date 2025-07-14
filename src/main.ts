export function init() {
  const syntaxBtn = document.querySelector("#syntax-btn") as HTMLElement;   
  const genericBtn = document.querySelector("#generic-btn") as HTMLElement;  
  const rangeBtn = document.querySelector("#range-btn") as HTMLElement;  
  const typeBtn = document.querySelector("#type-btn") as HTMLElement;  
  const referenceBtn = document.querySelector("#reference-btn") as HTMLElement;  

  const syntaxError = document.querySelector("#syntax-result") as HTMLElement;
  const genericError = document.querySelector("#generic-result") as HTMLElement;
  const rangeError = document.querySelector("#range-result") as HTMLElement;
  const typeError = document.querySelector("#type-result") as HTMLElement;
  const referenceError = document.querySelector("#reference-result") as HTMLElement;

syntaxBtn.addEventListener("click", () => {
  try {
    throw new SyntaxError("Syntax error!");
  } catch (error) {
    syntaxError.textContent = `${error.name}: ${error.message}`;
  }
}); 

genericBtn.addEventListener("click", () => {
  try {
    throw new Error("Generic error!");
  } catch (error) {
    genericError.textContent = `${error.name}: ${error.message}`;
  }
}); 

rangeBtn.addEventListener("click", () => {
  try {
    throw new RangeError("Range error!");
  } catch (error) {
    rangeError.textContent = `${error.name}: ${error.message}`;
  }
}); 

typeBtn.addEventListener("click", () => {
  try {
    throw new TypeError("Type error!");
  } catch (error) {
    typeError.textContent = `${error.name}: ${error.message}`;
  }
}); 

referenceBtn.addEventListener("click", () => {
  try {
    throw new ReferenceError("Reference error!");
  } catch (error) {
    referenceError.textContent = `${error.name}: ${error.message}`;
  }
});

}

window.onload = init; 