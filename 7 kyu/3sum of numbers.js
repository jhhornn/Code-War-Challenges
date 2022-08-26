// Question

// Given two integers a and b, which can be positive or negative,
// find the sum of all the integers between and including them and return it.
// If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

//Solution

function rangeSum(p, q) {
	let rangeList = [];
	if (q > p) {
		for (i = p; i <= q; i++) {
			rangeList.push(i);
		}
		return rangeList.reduce(
			(a, b) => a + b,
			0,
		);
	} else if (q < p) {
		for (i = q; i <= p; i++) {
			rangeList.push(i);
		}
		return rangeList.reduce(
			(a, b) => a + b,
			0,
		);
	}
}

function getSum(a, b) {
	return a == b ? a : rangeSum(a, b);
}
