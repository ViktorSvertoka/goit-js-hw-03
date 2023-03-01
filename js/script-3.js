// # Завдання 3

// Напиши функцію `findBestEmployee(employees)`, яка приймає об'єкт співробітників
// і повертає ім'я найпродуктивнішого (який виконав більше всіх задач).
// Співробітники і кількість виконаних завдань містяться як властивості об'єкта в
// форматі `"ім'я":"кількість задач"`.

// ```js
// const findBestEmployee = function (employees) {
//   // твій код
// };

// /*
//  * Викличи функції для перевірки працездатності твоєї реалізації.
//  */
// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   })
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   })
// ); // lux
// ```

const findBestEmployee = function (employees) {
  const keys = Object.keys(employees);
  let maxResult = employees[keys[0]];
  let bestEmployee = keys[0];

  for (let key of keys) {
    if (employees[key] > maxResult) {
      maxResult = employees[key];
      bestEmployee = key;
    }
  }
  return bestEmployee;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
);

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
);

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
);
