// --- Row in Pascal's Triangle ---

function solution(n) {
    let array = [];

    for (let i = 0; i <= n; i++) {
        let value = 1;

        for (let j = 1; j <= i; j++) {
            value = (value * (n - j + 1)) / j;
        }

        array.push(value);
    }

    console.log(array.join(" "));
}
solution(3);
solution(5);
solution(7);