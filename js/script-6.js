// # Завдання 6

// Напиши функцію `calculateTotalPrice(allProdcuts, productName)`, яка отримує
// масив об'єктів та ім'я продукту (значення властивості `name`). Повертає загальну
// вартість продукту (ціна \* кількість).

// Викличи функції для перевірки працездатності твоєї реалізації.

// ```js
// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроїд", price: 400, quantity: 7 },
//   { name: "Захоплення", price: 1200, quantity: 2 },
// ];

// const calculateTotalPrice = function (allProdcuts, productName) {
//   // твій код
// };

// /*
//  * Викличи функції для перевірки працездатності твоєї реалізації.
//  */
// console.log(calculateTotalPrice(products, "Радар")); // 5200

// console.log(calculateTotalPrice(products, "Дроїд")); // 2800
// ```

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроїд', price: 400, quantity: 7 },
  { name: 'Захоплення', price: 1200, quantity: 2 },
];

console.table(products);

const calculateTotalPrice = function (allProducts, productName) {
  let totalPrice = 0;

  for (let product of allProducts) {
    if (productName === product.name) {
      totalPrice = product.price * product.quantity;
    }
  }

  return totalPrice;
};

console.log(calculateTotalPrice(products, 'Радар'));

console.log(calculateTotalPrice(products, 'Дроїд'));
