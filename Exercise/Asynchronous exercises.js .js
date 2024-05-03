// BISMILLAH

const { response } = require("express");
const fetch = require("node-fetch");

// #1 Create a function that takes a "base number" as an argument.This function should return another function which takes a new argument, and returns the sum of // the "base number" and the new argument.
function makePlusFunction(a) {
	return function (b) {
		return a + b;
	};
}

const plusTen = makePlusFunction(10);
const a = plusTen(20); // 30
const b = plusTen(190); // 200

// #2 There created an infinite loop! Help him by fixing the code in the code tab to pass this challenge.Look at the examples below to get an idea of what the function should do.
function printArray(number) {
	var newArray = [];

	for (var i = 1; i <= number; i++) {
		newArray.push(i);
	}

	return newArray;
}

console.log(printArray(6));

// #3 Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.

function delay() {
	return setTimeout(() => console.log("Your result delays 2 sec!"), 2000);
}
delay();

//  #4 Write a JavaScript program that converts a callback - based function to a Promise - based function.

function delayResult(v1, v2) {
	return new Promise((resolve, reject) => {
		const result = v1 + v2;
		if (result % 2 !== 0) {
			resolve("Odd number!");
		} else {
			reject("Not odd number!");
		}
	});
}

delayResult(2, 7)
	.then((result) => setTimeout(() => console.log("Result: ", result), 2000))
	.catch((message) => console.log("Error: ", message));

// #5 Write a JavaScript function that takes an array of URLs and downloads the contents of each URL in parallel using Promises.
function downloadUrls(urls) {
	const promises = urls.map((url) => {
		return new Promise((resolve, reject) => {
			fetch(url)
				.then((response) => {
					if (!response.ok) {
						throw new Error("HTTP Error, status: " + response.status);
					}
					return response.text();
				})
				.then((data) => resolve(data))
				.catch((error) => reject(error));
		});
	});
	return Promise.all(promises);
}

const urls = ["https://jsonplaceholder.typicode.com/posts/1", "https://jsonplaceholder.typicode.com/posts/2", "https://jsonplaceholder.typicode.com/posts/3"];

downloadUrls(urls)
	.then((data) => console.log("Contents: ", data))
	.catch((error) => console.log(error, "error msg"));


// TAKES SINGLE URL
async function singleUrl(url) {
	try {
		const response = await fetch(url);
		if (!response.ok) { throw new Error('There is something wrong!') };
		const data = await response.json();
		return data;
	} catch (error) {
		throw new Error('Failed to fetch');
	}
};

console.log(singleUrl('https://jsonplaceholder.typicode.com/posts/1'))
