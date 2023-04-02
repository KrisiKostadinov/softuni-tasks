function solution(input = []) {
    const n = input.split(', ')[0];
    const k = input.split(' ')[1];
    let array = [];
    for (let i = 0; i < n; i++) {
        let currentSum = 1;
        if (i === 2) currentSum += 1;
        if (i >= 3) {
            currentSum = 0;
            let counter = k;
            let helper = 0;
            while (counter > 0) {
                counter--;
                if (array[array.length - 1 - helper] !== undefined)
                    currentSum += array[array.length - 1 - helper];
                    else break;
                helper++;
            }
        }
        array.push(currentSum);
    }
    console.log(array);
}
solution('6, 3');
solution('8, 2');
