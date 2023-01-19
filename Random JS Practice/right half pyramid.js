// Question

// A function that takes a number and returns a right half pyramid
// with that number of rows

// Solution

function rightPyramid(num, symbol) {
  let pyramid = ''
  for (let i = 0; i <= num; i++) {
    pyramid +=
      '\n' +
      ' '.repeat(num - i) +
      symbol.toString().repeat(i)
  }

  return pyramid
}

