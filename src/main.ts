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
    if (error instanceof Error) {
      syntaxError.textContent = `Error: ${error.message}`;
    }
  }
}); 

genericBtn.addEventListener("click", () => {
  try {
    throw new Error("Generic error!");
  } catch (error) {
    if (error instanceof Error) {
      genericError.textContent = `Error: ${error.message}`;
    }
  }
}); 

rangeBtn.addEventListener("click", () => {
  try {
    throw new RangeError("Range error!");
  } catch (error) {
    if (error instanceof Error) {
      rangeError.textContent = `Error: ${error.message}`;
    }
  }
}); 

typeBtn.addEventListener("click", () => {
  try {
    throw new TypeError("Type error!");
  } catch (error) {
    if (error instanceof Error) {
      typeError.textContent = `Error: ${error.message}`;
    }
  }
}); 

referenceBtn.addEventListener("click", () => {
  try {
    throw new ReferenceError("Reference error!");
  } catch (error) {
    if (error instanceof Error) {
      referenceError.textContent = `Error: ${error.message}`;
    }
  }
});

}

window.onload = init; 