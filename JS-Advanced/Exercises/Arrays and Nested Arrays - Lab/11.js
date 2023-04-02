// --- 11. Equal Neighbors ---

function solution(array = []) {
    let sum = 0;
    let pushedIndexes = [];

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            const current = array[i][j];
            const top = array[i + 1] ? array[i + 1][j] : '';
            const bottom = array[i - 1] ? array[i - 1][j] : '';
            const right = array[i][j + 1] ? array[i][j + 1] : '';
            const left = array[i][j - 1] ? array[i][j - 1] : '';

            if (current === top && !pushedIndexes.includes(`${current} ${top} top-bottom ${i + 1} ${j}`)) {
                pushedIndexes.push(`${current} ${top} top-bottom ${i + 1} ${j}`);
            }
            else if (current === bottom && !pushedIndexes.includes(`${current} ${bottom} top-bottom ${i} ${j}`)) {
                pushedIndexes.push(`${current} ${bottom} top-bottom ${i} ${j}`);
            }
            else if (current === right && !pushedIndexes.includes(`${current} ${right} left-right ${i} ${j + 1}`)) {
                pushedIndexes.push(`${current} ${right} left-right ${i} ${j + 1}`);
            }
            else if (current === left && !pushedIndexes.includes(`${current} ${left} left-right ${i} ${j}`)) {
                pushedIndexes.push(`${current} ${left} left-right ${i} ${j}`);
            }
        }
    }

    console.log(pushedIndexes.length);
}
// solution(
//     [
//         ['2', '3', '4', '7', '0'],
//         ['4', '0', '5', '3', '4'],
//         ['2', '3', '5', '4', '2'],
//         ['9', '8', '7', '5', '4']
//     ]
// );
// solution(
//     [
//         ['test', 'yes', 'yo', 'ho'],
//         ['well', 'done', 'yo', '6'],
//         ['not', 'done', 'yet', '5']
//     ]
// );
solution(
    [
        [2, 2, 5, 7, 4],
        [4, 0, 5, 3, 4],
        [2, 5, 5, 4, 2]
    ]
);
