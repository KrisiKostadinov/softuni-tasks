// --- 9. Biggest Element ---

function solution(array = []) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] > sum) {
                sum = array[i][j];
            }
        }
    }

    console.log(sum);
}
solution(
    [
        [20, 50, 10],
        [8, 33, 145]
    ]
);
solution(
    [
        [3, 5, 7, 12],
        [-1, 4, 33, 2],
        [8, 3, 0, 4]
    ]
);
