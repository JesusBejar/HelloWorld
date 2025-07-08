// str 1
// str 2
let str1 = "";
let str2 = "";
let i = 0;
let j = 0;

// main function (str1, str2)
function longestCommonSubstring(str1, str2) {

  // base case
  // how many edge cases do I need to add?
  // no valid inputs
  if (!str1 || !str2) {
    return "please enter two strings"
  }
  // reached the end of the strings
  if (str1.length === 0 || str2.length === 0) {
    return "reached the end of the strings"
  }
  // character in strings don't match
  if (str1[i] !== str2[j]) {
    return "character in strings don't match"
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