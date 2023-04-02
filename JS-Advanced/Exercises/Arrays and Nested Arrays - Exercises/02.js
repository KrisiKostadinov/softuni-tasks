// --- 2. Print every N-th Element from an Array ---

function solution(stringsArray = [], stepNumber = 1) {
    let result = [];

    for (let i = 0; i < stringsArray.length; i += stepNumber) {
        const currentElement = stringsArray[i];
        result.push(currentElement);
    }

    console.log(result);
}
solution(
    [
        '5',
        '20',
        '31',
        '4',
        '20'],
    2
);
solution(
    [
        'dsa',
        'asd',
        'test',
        'tset'
    ],
    2
);