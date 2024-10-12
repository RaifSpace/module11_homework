/* Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

Используйте Arrow Function синтаксис.

Протестируйте функцию на любых значениях и выведите результат в консоль. */

const exp = (x, n) => {
	if (
		Number.isInteger(x) &&
		Number.isInteger(n) &&
		Math.sign(x) === 1 &&
		Math.sign(n) === 1
	) {
		return Math.pow(x, n);
	} else {
		return "переданное число не является натуральным";
	}
};

console.log(exp(2, 3)); // 8
// переданное число не является натуральным
console.log(exp(-2, 3));
console.log(exp(2, -3));
console.log(exp(-2, -3));
console.log(exp(2.1, 3));
console.log(exp(2, 3.1));
console.log(exp(2.1, 3.1));
console.log(exp(-2, 3.1));
console.log(exp(-2, -3.1));