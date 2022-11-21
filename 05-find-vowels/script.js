/*
 * Задача 5: «Найти гласные»
 *
 * Напишите функцию findVowels(str), принимающую на вход кириллическую
 * строку str  и возвращающую количество гласных, содержащихся в этой строке.
 * Для вашего удобства вот массив кириллических гласных:
 *
 * ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'].
 *
*/

function findVowels(str) {
  const arr = str.toLowerCase().split('');
  let result = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === 'а' || arr[i] === 'я' || arr[i] === 'о' || arr[i] === 'ё' || arr[i] === 'у' || arr[i] === 'ю' || arr[i] === 'и' || arr[i] === 'э' || arr[i] === 'е') {
      result += 1;
    }
  }
  return result;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(findVowels('здравствуй')); // 2
console.log(findVowels('привет')); // 2
console.log(findVowels('хеллоу')); // 3
