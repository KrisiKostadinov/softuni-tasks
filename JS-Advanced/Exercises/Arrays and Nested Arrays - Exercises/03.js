// --- 3. Add and Remove Elements ---

function solution(array = []) {
    let counter = 1;
    let result = [];

    array.forEach((command, index) => {
        if (command === 'add') {
            result.push(counter);
        } else if (command === 'remove') {
            result.pop();
        }

        counter++;
    });

    console.log(result.length ? result.join('\n') : 'Empty');
}
solution(['add', 'add', 'add', 'add']);
solution(['add', 'add', 'remove', 'add', 'add']);
solution(['remove', 'remove', 'remove']);
