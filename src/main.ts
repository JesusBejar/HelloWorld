// str 1
// str 2
let str1 = "";
let str2 = "";

// main function (str1, str2)
function longestCommonSubstring(str1, str2) {

  // base case
  // how many edge cases do I need to add?
  if (str1.length ===  str2.length) {
    return 
  }
  // recursive function (str1, str2, i, j, length)
  function findLongestCommonSubstring(str1, str2, i, j, length) {
  }
}

// init function??
function init() {
  const input1 = document.querySelector("#strOne") as HTMLInputElement;
  const input2 = document.querySelector("#strTwo") as HTMLInputElement;
  const btn = document.querySelector("#btn") as HTMLButtonElement;

  btn.addEventListener("click", () => {
    longestCommonSubstring(str1, str2);
  });
}