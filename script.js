const num1 = +prompt('Введите первое число: ');
const num2 = +prompt('Введите второе число: ');
(num1===1 && num2===3 || num1<1 && num2>3 || num1===1 && num2>3 || num1<1 && num2===3 ) ? alert('Условие выполняется!'): alert('Условие не выполняется.');