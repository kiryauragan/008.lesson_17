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

let x = Number(prompt("Введіть перше число:"));
let y = Number(prompt("Введіть друге число:"));
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

function addArray(rows, columns) {
	let array = [];
	for (let i = 0; i < rows; i++) {
		let insideArray = [];
		for (let j = 0; j < columns; j++) {
			let value = prompt(`Введіть значення елементу масива [${i}][${j}]`);
			insideArray.push(value);
		}
		array.push(insideArray);
	}
	return array;
}

console.log(addArray(2, 2));

//4. Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

function removeChars(str, symbols) {
	let symbolsArray = symbols.split("");
	let result = "";
	for (let i = 0; i < str.length; i++) {
		let char = str[i];
		if (!symbolsArray.includes(char)) {
			result += char;
		}
	}
	return result;
}

let str = prompt("Введіть рядок:", "hello world");
let symbols = prompt("Введіть символи для видалення:", "l d");

alert(removeChars(str, symbols));
