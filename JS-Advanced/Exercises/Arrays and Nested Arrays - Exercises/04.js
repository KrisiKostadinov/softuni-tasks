// --- 4. Rotate Array ---

function solution(array = [], rotations = 0) {
    for (let i = 0; i < rotations; i++) {
        let last = array.pop();
        array.unshift(last);
    }

    console.log(array.join(' '));
}
solution(['1', '2', '3', '4'], 2);
solution(['Banana', 'Orange', 'Coconut', 'Apple'], 15);