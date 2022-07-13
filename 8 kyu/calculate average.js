//Question

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

//Solution

function find_average(array) {
    if (array.length == 0) {
        return 0;
    } else {
        let sum = array.reduce((prev, next) => prev + next, 0)
        let average = sum / array.length
        return average
    }

}