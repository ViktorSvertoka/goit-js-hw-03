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
