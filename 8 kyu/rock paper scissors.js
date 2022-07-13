//Question

// Let 's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2-- > Output):

// "scissors", "paper"-- > "Player 1 won!"
// "scissors", "rock"-- > "Player 2 won!"
// "paper", "paper"-- > "Draw!"

//Solution

const rps = (p1, p2) => {
    let s = 'scissors'
    let p = 'paper'
    let r = 'rock'


    if (p1 == s && p2 == p) {
        return `Player ${1} won!`
    } else if (p1 == r && p2 == s) {
        return `Player ${1} won!`
    } else if (p1 == p && p2 == r) {
        return `Player ${1} won!`
    } else if (p1 == p2) {
        return 'Draw!'
    } else {
        return `Player ${2} won!`
    }
};