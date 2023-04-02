// --- 1. Print an Array with a Given Delimiter ---

function solution(stringArray = [], joinSeparator = '') {
    let joinedStrings = stringArray.join(joinSeparator).toString();
    console.log(joinedStrings);
}
solution(
    [
        'One',
        'Two',
        'Three',
        'Four',
        'Five'
    ],
    '-'
);
solution(
    [
        'How about no?',
        'I',
        'will',
        'not',
        'do',
        'it!'
    ],
    '_'
);