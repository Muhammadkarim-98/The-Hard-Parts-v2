// BISMILLAH
// Functions running in parallel with other functions are called asynchronous
// A good example is JavaScript setTimeout()


function printHello1() {
	console.log("Hello1");
}
setTimeout(printHello1, 1000);
console.log("Me first!");
// output: 👇🏼
// Me first!
// Hello

// Now, in what order will our console logs occur?
function printHello2() {
	console.log("Hello2");
}

setTimeout(printHello2, 0);
console.log("Me first!");

// An asynchronous function using async/await
function wait(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

async function asyncFunction() {
	console.log("Start!");
	await wait(2000);
	console.log("After waiting!");
}
asyncFunction();

// Fetching Data from an API
async function fetchData() {
	try {
		const response = await fetch("https://randomfox.ca/floof/");
		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.error("Occured err", error);
	}
}
fetchData();

// Sequential Execution
async function sequentialTask() {
	console.log('Task 1')
	await wait(2000)
	console.log('Task 2')
	await wait(1000)
	console.log('Task 3')
}
sequentialTask();

// Parallel Execution
async function parallelTask() {
	const task1 = wait(2000);
	const task2 = wait(1000);
	await Promise.all([task1, task2])
	console.log('Done!')
}
parallelTask();
