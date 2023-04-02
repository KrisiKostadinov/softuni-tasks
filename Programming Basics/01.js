// --- 01. Birthday Party ---

function solution(hallRent = 0) {
    let cake = hallRent * 0.2;
    let drinks = cake * 0.55;
    let animator = hallRent / 3;

    const total = cake + drinks + animator + hallRent;
    console.log(total);
}
solution(2250);
solution(3720);