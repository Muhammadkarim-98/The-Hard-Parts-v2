// BISMILLAH
// OBJECT - STORE FUNCTIONS WITH THEIR ASSOCIATED DATA!
const user1 = {
	name: "Will",
	score: 3,
	increment: function () {
		user1.score++;
	},
};

user1.increment(); // user1.score -> 4

// CREATING USER3 USING Object.create
const user1 = Object.create(null);

user1.name = "Eva";
user1.score = 9;
user1.increment = function () {
	user1.score++;
};
console.log(user1);

// GENERATE OBJECTS USING A FUNCTION (solution 1)
function userCreator(name, score) {
	const newUser = {};
	newUser.name = name;
	newUser.score = score;
	newUser.increment = function () {
		newUser.score++;
	};
	return newUser;
}

const uzbekUser = userCreator("Ali", 33);
uzbekUser.increment();
console.log(uzbekUser);

// USING THE PROTOTYPE CHAIN (solution 2)
function userCreator(name, score) {
	const newUser = Object.create(userFunctionScore);
	newUser.name = name;
	newUser.score = score;
	return newUser;
}

const userFunctionScore = {
	increment: function () {
		this.score++;
	},
	login: function () {
		console.log("Logged in!");
	},
};

const user1 = new userCreator("Jamshid", 90);
const user2 = new userCreator("Usman", 57);
user1.increment();
console.log(user1); // { name: 'Jamshid', score: 91 }

// THE new KEYWORD AUTOMATES A LOT OF OUR MANUAL WORK
function userCreator(name, score) {
	(this.name = name), (this.score = score);
}
userCreator.prototype.increment = function () {
	this.score++;
};
userCreator.prototype.login = function () {
	console.log("Logged in!");
};
const user1 = new userCreator("Will", 32);
user1.increment();

// THE class 'SYNTACTIC SUGAR'
class UserCreator {
	constructor(name, score) {
		this.name = name;
		this.score = score;
	}
	increment() {
		this.score++;
	}
	login() {
		console.log("Logged in!");
	}
}

const user1 = new UserCreator("Smith", 2);
user1.increment();
