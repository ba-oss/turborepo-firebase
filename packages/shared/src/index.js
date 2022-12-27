import { sum } from "lodash-es";

// sort values
function sumValues(values) {
  return sum(values);
}

// program to display fibonacci sequence using recursion
function fibonacci(num) {
  if (num < 2) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

export { sumValues, fibonacci };
