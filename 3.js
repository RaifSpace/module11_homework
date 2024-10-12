/* Напишите функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат. */

function getSum(num1) {
	return function (num2) {
		return num1 + num2;
	};
}

const getSumResult = getSum(9)(10);
console.log(getSumResult);

// Функция, которая принимает другие функции как аргумент и возвращает результат умножения

function multiply(x) {
	return function (y) {
		return x * y;
	};
}

function a() {
	return 4;
}

function b() {
	return 3;
}

const result = multiply(a())(b());
console.log(result);