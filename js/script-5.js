// # Завдання 5

// Напиши функцію `getAllPropValues(arr, prop)`, яка отримує масив об'єктів і ім'я
// властивості. Повертає масив значень певної властивості `prop` з кожного об'єкта
// в масиві.

// ```js
// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроїд", price: 400, quantity: 7 },
//   { name: "Захоплення", price: 1200, quantity: 2 },
// ];

// const getAllPropValues = function (arr, prop) {
//   // твій код
// };

// /*
//  * Викличи функції для перевірки працездатності твоєї реалізації.
//  */
// console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроїд', 'Захоплення']

// console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, "category")); // []
// ```

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроїд', price: 400, quantity: 7 },
  { name: 'Захоплення', price: 1200, quantity: 2 },
];

console.table(products);

const getAllPropValues = function (arr, prop) {
  const items = [];

  for (let product of arr) {
    if (product[prop] === undefined) {
      break;
    }

    items.push(product[prop]);
  }

  return items;
};

console.log(getAllPropValues(products, 'name'));

console.log(getAllPropValues(products, 'quantity'));

console.log(getAllPropValues(products, 'category'));
