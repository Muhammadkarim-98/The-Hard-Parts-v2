// BISMILLAH

// #1 Create a function that takes a "base number" as an argument.This function should return another function which takes a new argument, and returns the sum of // the "base number" and the new argument.
function makePlusFunction(a) {
	return function (b) {
		return a + b;
	};
}

const plusTen = makePlusFunction(10);
const a = plusTen(20); // 30
const b = plusTen(190); // 200


// There created an infinite loop! Help him by fixing the code in the code tab to pass this challenge.Look at the examples below to get an idea of what the function should do.
function printArray(number) {
	var newArray = [];

	for (var i = 1; i <= number; i++) {
		newArray.push(i);
	}

	return newArray;
}

console.log(printArray(6))

function delay(input) {
	return setTimeout(() => console.log('Done!'), 2000)
}
delay()
