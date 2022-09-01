//Question

// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6

// Solution

function digitalRoot(n) {
	let initial = 0;
	for (let c of n.toString()) {
		initial += parseInt(c);
	}
	if (initial.toString().length > 1) {
		initial = initial.toString();
		return digitalRoot(initial);
	}
	return initial;
}
