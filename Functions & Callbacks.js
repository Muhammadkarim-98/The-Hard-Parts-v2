// BISMILLAH
// Thread of Execution

const num = 3;

function multiplyBy2(inpNum) {
	return inpNum * 2;
}
const output = multiplyBy2(num);
console.log(output);
//
function copyArrayAndMultiplyBy2(array) {
	let output = [];
	for (let i = 0; i < array.length; i++) {
		output.push(array[i] * 2);
	}
	return output;
}
// GENERALIZING THE ABOVE CODE
function copyArrayAndManipulate(array, instructions) {
	const output = [];
	for (let i = 0; i < array.length; i++) {
		output.push(instructions(array[i]));
	}
	return output;
}

function justMultiplyBy2(input) {
	return input * 2;
}
const result = copyArrayAndManipulate([1, 2, 3], justMultiplyBy2);
