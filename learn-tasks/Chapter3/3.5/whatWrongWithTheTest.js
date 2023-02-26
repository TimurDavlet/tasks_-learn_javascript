// Что не так в нижеприведённом тесте функции pow?
/*
it("Возводит x в степень n", function() {
  let x = 5;

  let result = x;
  assert.equal(pow(x, 1), result);

  result *= x;
  assert.equal(pow(x, 2), result);

  result *= x;
  assert.equal(pow(x, 3), result);
});
*/

describe("Возводит x в степень n", function() {
  it("5 в степени 1 будет 5", function() {
    assert.equal(pow(5, 1), 5);
  });

  it("5 в степени 2 будет 25", function() {
    assert.equal(pow(5, 2), 25);
  });

  it("5 в степени 3 будет 125", function() {
    assert.equal(pow(5, 3), 125);
  });
});

// Заменили один it на describe и группу блоков it. 
// Теперь, если какой-либо из блоков завершится неудачно,
// мы точно увидим, с какими данными это произошло.
// it.only вместо it - запуск только одного теста