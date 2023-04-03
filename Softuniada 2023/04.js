// --- 04. Rotate Matrix ---

function solution(n, matrix) {
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }

    for (let i = 0; i < n; i++) {
        console.log(matrix[i].join(' '));
    }
}
solution(
    4,
    [
        [ 1, 2, 3, 4 ],
        [ 5, 6, 7, 8 ],
        [ 9, 10, 11, 12 ],
        [ 13, 14, 15, 16 ]
    ]
);
