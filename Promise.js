//BISMILLAH

let p = new Promise((resolve, reject) => {
	let a = 1 + 1;
	if (a == 2) {
		resolve("Success");
	} else {
		reject("Failed");
	}
});

p.then((message) => {
	console.log("This is in then " + message);
}).catch((message) => {
	console.log("This is in catch " + message);
});

// --- //// --- //// --- //// --- //// --- //// --- //// --- //// --- //// --- //
const userLeft = false;
const userWatchingCatMeme = false;

// CALLBACK FUNCTION
function bigCallback(callback, errorCallback) {
	if (userLeft) {
		errorCallback({ name: "User Left", message: ":(" });
	} else if (userWatchingCatMeme) {
		errorCallback({ name: "User watching cat meme", message: "dog < cat" });
	} else {
		callback("Thumbs up and Subscribe");
	}
}

bigCallback(
	(message) => console.log("Success, " + message),
	(error) => console.log(error.name + " " + error.message)
);


// PROMISE FUNCTION
function promiseFN() {
	return new Promise((resolve, reject) => {
		if (userLeft) {
			reject({ name: "User Left", message: ":(" });
		} else if (userWatchingCatMeme) {
			reject({ name: "User watching cat meme", message: "dog < cat" });
		} else {
			resolve("Thumbs up and Subscribe");
		}
	});
}

promiseFN()
	.then((msg) => console.log("Success, " + msg))
	.catch((error) => console.log(error.name + ' ' + error.message));
