const num1 = +prompt("Введите первое число: ");
const num2 = +prompt("Введите второе число: ");
(num1 === 1 && num2 === 3) ||
(num1 < 1 && num2 > 3) ||
(num1 === 1 && num2 > 3) ||
(num1 < 1 && num2 === 3)
  ? alert("Условие выполняется!")
  : alert("Условие не выполняется.");
// решила 1
let test = confirm('"Ок" - true, "Отмена" - false.');
test === true ? alert("+++") : alert("---");
// решила 2
let day = +prompt("Введите число месяца: ");
if (day < 1 || day > 31) {
  alert("Введите число от 1 до 31");
} else if (day < 11) {
  alert("Число находится в первой декаде.");
} else if (day > 10 && day < 21) {
  alert("Число находится во второй декаде.");
} else {
  alert("Число находится в третьей декаде.");
}
// решила 3
const num3 = +prompt("Введите число: ");
const units = num3 % 10;
const ten = Math.trunc(num3 / 10) % 10;
const hundreds = Math.trunc(num3 / 100) % 10;
alert(`В числе ${num3} ${hundreds} сотен, ${ten} десятков, ${units} единиц.`)