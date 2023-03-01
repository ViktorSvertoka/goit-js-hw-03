const countTotalSalary = function (employees) {
  const values = Object.values(employees);

  console.log(values);

  let totalSalary = 0;

  for (let value of values) {
    totalSalary += value;
  }

  return totalSalary;
};

console.log(countTotalSalary({}));

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
);

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
);
