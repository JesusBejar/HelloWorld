var btn = document.querySelector("#btn");
var text = document.querySelector("#text");
// console.log(btn, text);
var handleMouseClick = function (event) {
    event.preventDefault();
    text === null || text === void 0 ? void 0 : text.textContent = "Hello World!";
};
if (btn) {
    btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", handleMouseClick);
}
