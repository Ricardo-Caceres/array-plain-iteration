import operation_data from "./operation_data";

const arr = [1, [2, [3, [4, 5]]]];
const arr1 = [6, [1, [2, 3], 4], 5];
const arr2 = [[[1, 2], 3], 4, 5];

test("[1, [2, [3, [4, 5]]]] equal to [1, 2, 3, 4, 5]", () => {
  expect(operation_data(arr)).toStrictEqual([1, 2, 3, 4, 5]);
  expect(operation_data(arr1)).toStrictEqual([6, 1, 2, 3, 4, 5]);
  expect(operation_data(arr2)).toStrictEqual([1, 2, 3, 4, 5]);
});
