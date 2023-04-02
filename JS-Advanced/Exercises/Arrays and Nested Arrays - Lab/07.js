// --- 7. Piece of Pie ---

function solution(array = [], starts, ends) {
    const startsIndex = array.indexOf(starts);
    const endsIndex = array.indexOf(ends);
    let result = [];

    for (let i = startsIndex; i <= endsIndex; i++) {
        result.push(array[i]);
    }

    console.log(`[${result.join(', ')}]`);
}
solution(
    [
        'Pumpkin Pie',
        'Key Lime Pie',
        'Cherry Pie',
        'Lemon Meringue Pie',
        'Sugar Cream Pie'
    ],
    'Key Lime Pie',
    'Lemon Meringue Pie'
);
solution(
    [
        'Apple Crisp',
        'Mississippi Mud Pie',
        'Pot Pie',
        'Steak and Cheese Pie',
        'Butter Chicken Pie',
        'Smoked Fish Pie'
    ],
    'Pot Pie',
    'Smoked Fish Pie'

);