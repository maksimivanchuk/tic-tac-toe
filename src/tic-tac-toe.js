class TicTacToe {
    constructor() {
        this.arr = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        this.currPlayer = 'x';
    }

    switchPlayer() {
        if (this.currPlayer === 'x') {
            this.currPlayer = 'o';
        } else if (this.currPlayer === 'o') {
            this.currPlayer = 'x';
        }
    }

    getCurrentPlayerSymbol() {
        return this.currPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.arr[rowIndex][columnIndex] === null) {
            this.arr[rowIndex][columnIndex] = this.currPlayer;
            this.switchPlayer();
        } 
    }

    isFinished() {
        if ((this.getWinner() === 'x') ||
            (this.getWinner() === 'o') ||
            (this.noMoreTurns() === true)) {
            return true;
        }
        return false;
    }

    getWinner() {
        var winner = null;

        if (this.arr[0][0] === 'o' && this.arr[1][1] === 'o' && this.arr[2][2] === 'o') { winner = 'o'; }
        if (this.arr[2][0] === 'o' && this.arr[1][1] === 'o' && this.arr[0][2] === 'o') { winner = 'o'; }
        if (this.arr[0][0] === 'o' && this.arr[0][1] === 'o' && this.arr[0][2] === 'o') { winner = 'o'; }
        if (this.arr[0][0] === 'o' && this.arr[1][0] === 'o' && this.arr[2][0] === 'o') { winner = 'o'; }
        if (this.arr[0][1] === 'o' && this.arr[1][1] === 'o' && this.arr[2][1] === 'o') { winner = 'o'; }
        if (this.arr[0][2] === 'o' && this.arr[1][2] === 'o' && this.arr[2][2] === 'o') { winner = 'o'; }
        if (this.arr[2][0] === 'o' && this.arr[2][1] === 'o' && this.arr[2][2] === 'o') { winner = 'o'; }
        if (this.arr[1][0] === 'o' && this.arr[1][1] === 'o' && this.arr[1][2] === 'o') { winner = 'o'; }

        if (this.arr[2][0] === 'x' && this.arr[1][1] === 'x' && this.arr[0][2] === 'x') { winner = 'x'; }
        if (this.arr[0][0] === 'x' && this.arr[0][1] === 'x' && this.arr[0][2] === 'x') { winner = 'x'; }
        if (this.arr[0][0] === 'x' && this.arr[1][1] === 'x' && this.arr[2][2] === 'x') { winner = 'x'; }
        if (this.arr[0][0] === 'x' && this.arr[1][0] === 'x' && this.arr[2][0] === 'x') { winner = 'x'; }
        if (this.arr[0][1] === 'x' && this.arr[1][1] === 'x' && this.arr[2][1] === 'x') { winner = 'x'; }
        if (this.arr[0][2] === 'x' && this.arr[1][2] === 'x' && this.arr[2][2] === 'x') { winner = 'x'; }
        if (this.arr[2][0] === 'x' && this.arr[2][1] === 'x' && this.arr[2][2] === 'x') { winner = 'x'; }
        if (this.arr[1][0] === 'x' && this.arr[1][1] === 'x' && this.arr[1][2] === 'x') { winner = 'x'; }

        return winner;
    }

    noMoreTurns() {
        for (var i = 0; i < this.arr.length; i++) {
            for (var j = 0; j < this.arr[i].length; j++) {
                if (this.arr[i][j] === null) {
                    return false;
                }
            }
        }
        return true;
    }

    isDraw() {
        if ((this.noMoreTurns() === true) &&
            (this.getWinner() === null)) {
            return true;
        }
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.arr[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
