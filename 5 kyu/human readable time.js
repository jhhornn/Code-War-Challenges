// Question

// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

//Solution

function humanReadable(seconds) {
	let intSeconds = parseInt(seconds);
	let hour = Math.floor(
		intSeconds / 3600,
	);
	let minute = Math.floor(
		(intSeconds - hour * 3600) / 60,
	);
	let second = Math.floor(
		intSeconds -
			hour * 3600 -
			minute * 60,
	);
	if (hour < 10) {
		hour = `0${hour}`;
	}
	if (minute < 10) {
		minute = `0${minute}`;
	}
	if (second < 10) {
		second = `0${second}`;
	}

	return `${hour}:${minute}:${second}`;
}
