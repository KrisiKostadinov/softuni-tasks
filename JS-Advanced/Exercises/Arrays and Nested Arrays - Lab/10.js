// --- 10. Diagonal Sums ---

function solution(array = []) {
    // calc main diagonal
    let mainDiagonalMainArrayIndex = 0;
    let mainDiagonalSecondArrayIndex = 0;
    let mainDiagonalSum = 0;

    // calc second diagonal
    let secondDiagonalMainArrayIndex = array.length - 1;
    let secondDiagonalSecondArrayIndex = 0;
    let secondDiagonalSum = 0;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (mainDiagonalMainArrayIndex === i && mainDiagonalSecondArrayIndex === j) {
                mainDiagonalSum += array[i][j];
            }
        }

        mainDiagonalMainArrayIndex++;
        mainDiagonalSecondArrayIndex++;
    }

    for (let i = array.length - 1; i >= 0; i--) {
        for (let j = 0 - 1; j < array[i].length; j++) {
            if (secondDiagonalMainArrayIndex === i && secondDiagonalSecondArrayIndex === j) {
                secondDiagonalSum += array[i][j];
            }
        }

        secondDiagonalMainArrayIndex--;
        secondDiagonalSecondArrayIndex++;
    }

    console.log(`${mainDiagonalSum} ${secondDiagonalSum}`);
}
// solution(
//     [
//         [20, 40],
//         [10, 60]
//     ]
// );
solution(
    [
        [3, 5, 17],
        [-1, 7, 14],
        [1, -8, 89]
    ]
);
