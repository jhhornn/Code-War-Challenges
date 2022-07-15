let numbers = [1, 2, 4, 3, 5, 6, 4, 4, 3, 2, 6, 7, 8, 9, 7, 7, 7, 7, 5, 4, 3, 2, 8, 9, 7, 7, 7, 7, 7, 7, 7, 7, 7];

function intArray(num) {
    let overAllCollection = {};
    let overAllList = [];
    for (let i = 0; i < num.length; i++) {
        if (!overAllCollection[num[i]]) {
            overAllCollection[num[i]] = 0;
        }
        ++overAllCollection[num[i]];
    }
    for (let key of Object.keys(overAllCollection)) {
        if (overAllCollection[key] > (num.length / 3)) {
            overAllList.push(parseInt(key))
        }
    }
    return overAllList
}

console.log(intArray(numbers))