function diffArray(arr1, arr2) {
  const combinedArr = arr1.concat(arr2);

  const newArr = combinedArr.filter(
    (item) => !(arr1.includes(item) && arr2.includes(item))
  );

  return newArr;
}
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
