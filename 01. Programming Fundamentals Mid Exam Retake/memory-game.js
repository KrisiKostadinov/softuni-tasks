function solution(array = []) {
    let elements = array.shift().split(' ');
    let twins = array;
    let moves = 0;

    for (let i = 0; i < twins.length; i++) {
        let firstIndex = parseInt(twins[i].split(' ')[0]);
        let secondIndex = parseInt(twins[i].split(' ')[1]);

        if (elements.length === 0) {
            console.log(`You have won in ${moves} turns!`);
            break;
        }

        if (twins[i] === 'end') {
            console.log("Sorry you lose :(");
            console.log(elements.join(' '));
            break;
        }

        if (
            firstIndex === secondIndex ||
            firstIndex < 0 || secondIndex > twins.length
        ) {
            elements.splice(Math.round((elements.length - 1) / 2), 0, ...['-2a', '-2a']);
            console.log('Invalid input! Adding additional elements to the board');
            continue;
        }

        if (elements[firstIndex] === elements[secondIndex]) {
            console.log(`Congrats! You have found matching elements - ${elements[firstIndex]}!`);
            elements = elements.filter(twin => twin !== elements[firstIndex] || twin !== elements[secondIndex]);
            moves++;
            continue;
        }

        if (elements[firstIndex] !== elements[secondIndex]) {
            console.log("Try again!");
            continue;
        }
    }
}
solution([
    "a 2 4 a 2 4",
    "0 3",
    "0 2",
    "0 1",
    "0 1",
    "end"
]);
solution([
    "a 2 4 a 2 4",
    "4 0",
    "0 2",
    "0 1",
    "0 1",
    "end"
]);
solution([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"
]);