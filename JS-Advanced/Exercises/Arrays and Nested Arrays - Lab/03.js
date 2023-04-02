// --- 3. Sum First Last ---

function solution(array = []) {
    const firstElement = Number(array.shift());
    const secondElement = Number(array.pop());
    console.log(firstElement + secondElement);
}
solution(['20', '30', '40']);
solution(['5', '10']);