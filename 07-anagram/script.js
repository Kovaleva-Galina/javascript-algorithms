/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 *
*/

function anagram(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    console.log(str1, str2);
    if (str1.length !== str2.length) {
        console.log(false);
        return false;
    } else {
        for (let i = 0; i <= str1.length - 1; i++) {
            if (str2.indexOf(str1[i]) === -1) {
                console.log(false);
            } else {
                console.log(true);
                return true;
            }
        }
    }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('finder', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false
console.log(anagram('up', 'UP')); // true

