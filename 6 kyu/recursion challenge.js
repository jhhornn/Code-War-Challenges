// Question

// A function that calculates the factorial of a number and also
// read through a sring a return a string with replaced 3rd value.

// Solution
function recursionChallenge(num){
    let recursion = function (num) {
			if (num == 0) {
			return 1;
		} else {
			return num * recursion(num - 1);
		}
	}
    let cat1 = recursion(num);
	let cat2 = "xf1xa0x28";
	let joinedStr = cat1 + cat2;
	let index = 2;
	let joinedArray = joinedStr.split("");

	
}


// Test Cases
recursionChallenge(6); // returns 72XxfXxaXx2X;
recursionChallenge(10); // returns 36X88X0xX1xX0xX8;
recursionChallenge(20); // returns 24X29X20X81X66X00X0xX1xX0xX8;
