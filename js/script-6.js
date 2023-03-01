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
