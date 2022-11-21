/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/


function capitalize(str) {
  let arrString = '';
  if (str.length <= 1) {
    return arrString;
  }

  const arr = str.trimRight().split(' ');

  for (let i = 0; i < arr.length; i++) {
    const minArr = arr[i].split('');
    minArr[0] = minArr[0].toUpperCase();
    const minArrString = minArr.join('');
    arrString += ' ' + minArrString;
  }
  arrString = arrString.slice(1);
  return arrString;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"
console.log(capitalize('молодость '));
