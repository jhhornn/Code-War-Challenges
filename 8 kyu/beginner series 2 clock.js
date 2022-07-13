//Question

// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a
// function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000\\


//Solution

function past(h, m, s) {
    if (h == 23 && m == 59 && 3 == 59) {
        return 0
    } else {
        let hourToSeconds = h * 3600
        let minuteToSeconds = m * 60
        let seconds = s * 1
        let allToMilliseconds = (hourToSeconds + minuteToSeconds + seconds) * 1000
        return allToMilliseconds
    }
}