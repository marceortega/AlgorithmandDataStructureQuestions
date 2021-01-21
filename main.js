// 1. Función compuesta
//función currificada
// function multiplyFirst(a, b, c) {
//   console.log(a * b * c);
// }

// function rokket(a) {
//   return function (b) {
//     return function (c) {
//       multiplyFirst(a, b, c);
//     };
//   };
// }

// rokket(2)(5)(3); // this outputs 30
// rokket(4)(2)(2); // this outputs 16
// rokket(8)(2)(1); // this also outputs 16

// //2. Longest string

// const list = ["best", "company", "ever"];

// function rokket(list) {
//   let emptyArray = list[0];

//   for (let i = 1; i < list.length; i++) {
//     if (list[i].length > emptyArray.length) {
//       emptyArray = list[i];
//     }
//   }

//   return emptyArray;
// }

// console.log(rokket(list));

// //3. String repetition
// const rokket = function (str, num) {
//   return str.repeat(num);
// };

// console.log(rokket("nodo", 5)); // esto genera 'nodenodenodenodenode'
// console.log(rokket("abc", 2)); // esto genera 'abcabc'
// console.log(rokket("holi", 4));

//  //4. Only last names

// const contacts = [
//   { firstName: "Juanito", lastName: "Rokket" },
//   { firstName: "James", lastName: "Bond" },
//   { firstName: "Harry", lastName: "Potter" },
// ];
// const rokket = function () {
//   const arr = [];
//   contacts.forEach((value) => {
//     arr.push(value["lastName"]);
//   });
//   return arr;
//  };
//  console.log(rokket(contacts));

// //5. Unique numbers

const rokket = function (arr1, arr2) {
   let array1 = arr1;
   let array2 = arr2;
   const totalarray = array1.concat(array2);

  const duplicates = totalarray;
  const unique = Array.from(new Set(duplicates));

  return unique;
};

console.log(rokket([1, 2, 5], [2, 1, 6])); // this outputs [1, 2, 5, 6]
console.log(rokket([1, 2, 3], [4, 5, 6])); // this outputs [1, 2, 3, 4, 5, 6]
