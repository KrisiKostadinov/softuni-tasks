// --- 5. Smallest Two Numbers ---

function solution(array = []) {
    const sortedArray = array.sort((a, b) => a - b);
    const firstNumber = sortedArray.shift();
    const secondNumber = sortedArray.shift();
    
    console.log(`${firstNumber} ${secondNumber}`);
}
solution([30, 15, 50, 5]);
solution([3, 0, 10, 4, 7, 3]);
