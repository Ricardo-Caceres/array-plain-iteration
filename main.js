import "./style.css";
import operation_data from "./operation_data.js";

document.querySelector("#app").innerHTML = `
  <h1>Plain Arrays!</h1>
`;
// let arr = [6, [1, [2, 3], 4], 5];
// let arr1 = [1, [2, [3, [4, 5]]]];
let arr2 = [[[1, 2], 3], 4, 5];
operation_data(arr2);
