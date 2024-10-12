/* Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
При выполнении задания необходимо учесть, что массив может содержать не только числа, но и знаки, например null и так далее.
На этот раз оформите решение в виде функции: постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис. */

function getEvenOrOddElem() {
	let arr = [0, 1, 2, 3, 4, 5, 6, null]; // null приводится в number при сравнении??
	let oddNum = 0;
	let evenNum = 0;
	let zero = 0;
	let notNum = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			evenNum++;
		} else {
			oddNum++;
		}
		if (arr[i] === 0) {
			zero++;
		}
		if (typeof arr[i] !== "number") {
			notNum++;
		}
	}
	console.log(
		`в массиве ${arr.length} элементов: \n количество чётных элементов - ${evenNum} \n количество нечётных элементов - ${oddNum} \n количество нулевых элементов - ${zero} \n количество нечисловых элементов - ${notNum}`
	);
}

getEvenOrOddElem();