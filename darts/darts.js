/*SCENARIO: You are playing darts with a friend, counting down from 100.  

Write a function that will take 2 arguments, 
an array showing the scores of each of player 1's 
throws, as well as an array for player 2.  The function should take the 
values of the array check which player has won the round*/

/*return values
    if there is a round winner, return either "player 1" or "player 2"
    if there is a tie, return "tie"
    If a player's score is less than 0, that player has lost
*/

const darts = (arr1, arr2) => {

    const reducerFn = (acc, val) => acc + val;
    const scorePlayer1 = arr1.reduce(reducerFn, 0);
    const scorePlayer2 = arr2.reduce(reducerFn, 0);

    const checkBothLose = () => scorePlayer1 > 100 && scorePlayer2 > 100
    const checkTie = () => scorePlayer1 === scorePlayer2
    const checkPlayer1Win = () => scorePlayer1 > scorePlayer2

    if(checkBothLose()) return "both players lose"
    else if(checkTie()) return "tie"
    else if(checkPlayer1Win()) return "player 1 has won"
    else return "player 2 has won"
}

module.exports = darts