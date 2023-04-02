function solution(array = []) {
    let waitingsNumber = Number(array.shift());
    let waitingsArray = array.shift().split(' ').map(item => Number(item));
    let pushed = [];
    
    for (let i = 0; i < waitingsArray.length; i++) {
        waitingsNumber += waitingsArray[i];
        let numberToPush = 4 - waitingsArray[i];
        if (waitingsNumber < 4) {
            pushed.push(waitingsNumber);
            waitingsNumber = 0;
            continue;
        }
        pushed.push(numberToPush + waitingsArray[i]);
        waitingsNumber -= numberToPush + waitingsArray[i];
    }

    if (waitingsNumber <= 0) {
        console.log("The lift has empty spots!");
    } else {
        console.log(`There isn't enough space! ${waitingsNumber} people in a queue!`);
    }
    console.log(pushed.join(" "));
}
// solution(["15", "0 0 0 0 0"]);
solution(["20", "0 2 0"]);