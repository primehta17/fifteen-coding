function validParenthesis(str) {
  let count = 0;
  let coun = 0;
  let cou = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "(") {
      count++;
    } else if (str[i] == ")") {
      count--;
    }
    if (str[i] == "{") {
      coun++;
    } else if (str[i] == "}") {
      coun--;
    }
    if (str[i] == "[") {
      cou++;
    } else if (str[i] == "]") {
      cou--;
    }
  }
  if (cou == 0 && coun == 0 && count == 0) {
    return true;
  }

  return false;
}

let str = "({()}[])";
console.log(validParenthesis(str));

function valid(arr) {
  let stack = [];
  let map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "(" || arr[i] == "[" || arr[i] == "{") {
      stack.push(arr[i]);
    } else {
      if (stack.length == 0) return false;
      let top = stack.pop();
      if (top !== map[arr[i]]) return false;
    }
  }
  return stack.length == 0;
}
let arr = "({}[[])";
console.log(valid(arr));
