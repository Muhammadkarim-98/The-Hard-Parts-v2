// BISMILLAH
function createFunction() {
	function multiplyBy2(num) {
		return num * 2;
	}
	return multiplyBy2;
}

const generatedFunc = createFunction();
const result = generatedFunc(3);
console.log(result);

// Nested Function Scope
function outer() {
	let counter = 0;

	function incrementCounter() {
		counter++;
	}
	incrementCounter();
};

//
function outer() {
	let counter = 0;

	function incrementCounter() {
		counter++;
	}
	return incrementCounter;
}

const myNewFunction = outer();
myNewFunction();
myNewFunction();

const anotherFunction = outer();
anotherFunction();
anotherFunction();
