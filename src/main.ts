// inputs
let str1 = "";
let str2 = "";

// main function (str1, str2)
function longestCommonSubstring(str1: string, str2: string): string {
  // max length of common substring (num)
  let maxLength = 0;
  // longest common substring (str)
  let resultSubstring = "";
  
  // base case - handle empty or invalid inputs
  if (!str1 || !str2) {
    return "please enter two strings"
  }

  // start w 1st str
  for (let i = 0; i < str1.length; i++) {
    // continue w str2
    for (let j = 0; j < str2.length; j++) {

    }
  }
  
  return resultSubstring || "No common substring found";
}

// recursive function
function findLongestCommonSubstring(str1: string, str2: string, i: number, j: number, currentLength: number): number {
  // base case 1, reached the end of either str
  if (i >= str1.length || j >= str2.length) {
    return currentLength;
  }
  
  // base case 2, characters don't match - stop counting
  if (str1[i] !== str2[j]) {
    return currentLength;
  }
  
  // recursive case, characters match! 
  return findLongestCommonSubstring(str1, str2, i + 1, j + 1, currentLength + 1);
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