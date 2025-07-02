const btn = document.querySelector("#btn") as HTMLButtonElement;
const text = document.querySelector("#text") as HTMLDivElement;

const handleMouseClick = (event: MouseEvent) => {
  event.preventDefault();
  text.textContent = "Hello World!";
};

if (btn) {
  btn.addEventListener("click", handleMouseClick);
} 