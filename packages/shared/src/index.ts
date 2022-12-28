import { sum } from "lodash-es";

/**
 * Calculates the sum of an array.
 *
 * @param values array of number to calculate the sum for.
 * @returns the sum of the values.
 */
function sumValues(values: number[]) {
  return sum(values);
}

/**
 * Calculates the fibonnaci of a number.
 *
 * @param num the number to calculate the fibonnaci of.
 * @returns the fibonacci result if `num` is > 2.
 */
function fibonacci(num: number): number {
  if (num < 2) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

export { sumValues, fibonacci };
