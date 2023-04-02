// --- 4. Negative / Positive Numbers ---

function solution(array = []) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            result.unshift(array[i]);
        } else {
            result.push(array[i]);
        }
    }

    console.log(result.join('\n'));
}
solution([7, -2, 8, 9]);
solution([3, -2, 0, -1]);