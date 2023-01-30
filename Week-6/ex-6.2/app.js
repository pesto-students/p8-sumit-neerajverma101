const spiralOrder = function (matrix) {
    if (matrix.length === 0) return [];

    let topRow = 0;
    let bottomRow = matrix.length - 1;
    let leftCol = 0;
    let rightCol = matrix[0].length - 1;
    let spiralOrder = [];

    while (topRow <= bottomRow && leftCol <= rightCol) {
        for (let i = leftCol; i <= rightCol; i++) {
            spiralOrder.push(matrix[topRow][i]);
        }
        topRow++;

        for (let i = topRow; i <= bottomRow; i++) {
            spiralOrder.push(matrix[i][rightCol]);
        }
        rightCol--;

        if (topRow <= bottomRow) {
            for (let i = rightCol; i >= leftCol; i--) {
                spiralOrder.push(matrix[bottomRow][i]);
            }
            bottomRow--;
        }

        if (leftCol <= rightCol) {
            for (let i = bottomRow; i >= topRow; i--) {
                spiralOrder.push(matrix[i][leftCol]);
            }
            leftCol++;
        }
    }

    return spiralOrder;
};

console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))