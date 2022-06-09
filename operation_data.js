function operation_data(arr) {
  let plainArr = [];

  const recursion = (arrayData) => {
    arrayData.forEach((item) => {
      if (Array.isArray(item)) {
        recursion(item);
      } else {
        plainArr.push(item);
      }
    });
  };

  recursion(arr);
  return plainArr;
}
export default operation_data;
