// 1. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

let array = [1, "coke", 47, 199, "apple", null];

function average(array) {
	let sum = 0;
	let count = 0;
	for (let i = 0; i < array.length; i++) {
		if (typeof array[i] === "number") {
			sum += array[i];
			count++;
		}
	}
	if (count === 0) {
		return null;
	} else {
		return sum / count;
	}
}

console.log(`1. Середне арифметичне: ${average(array)}`);

// 2. Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

let x = Number(prompt("Введіть перше число:", "5"));
let y = Number(prompt("Введіть друге число:", "12"));
let znak = prompt("Введіть знак математичної операції (+, -, *, /, %, ^):");

if (x === null || y === null || znak === null) {
	alert("Спробуйте ще раз.");
} else {
	function doMath(x, znak, y) {
		if (znak === "/" && y === 0) {
			return "На нуль ділити неможливо!";
		}

		switch (znak) {
			case "+":
				return x + y;
			case "-":
				return x - y;
			case "*":
				return x * y;
			case "/":
				return x / y;
			case "%":
				return x % y;
			case "^":
				return Math.pow(x, y);
			default:
				return "Введіть знак математичної операції";
		}
	}
	console.log(
		`2. Результат математичної дії: ${x} ${znak} ${y} = ${doMath(x, znak, y)}`
	);
}

// 3. Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.
