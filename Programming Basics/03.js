// --- 02. Energy Booster ---

function solution(fruit, set, countOfSets) {
    let count = 2;
    let sum = 0;

    switch (set) {
        case 'small':
            switch (fruit) {
                case 'Watermelon':
                    sum = 56;
                    break;
                case 'Mango':
                    sum = 36.66;
                    break;
                case 'Pineapple':
                    sum = 42.10;
                    break;
                case 'Raspberry':
                    sum = 20;
                    break;
                default:
                    break;
            }
            break;
        case 'big':
            count = 5;
            switch (fruit) {
                case 'Watermelon':
                    sum = 28.70;
                    break;
                case 'Mango':
                    sum = 19.60;
                    break;
                case 'Pineapple':
                    sum = 24.80;
                    break;
                case 'Raspberry':
                    sum = 15.20;
                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }

    let totalSum = count * sum * countOfSets;
    if (totalSum > 1000) {
        totalSum *= 0.50;
    } else if (totalSum > 400) {
        totalSum *= 0.85;
    }

    console.log(`${totalSum.toFixed(2)} lv.`);
}
solution('Watermelon', 'big', 4);
solution('Pineapple', 'small', 1);
solution('Raspberry', 'small', 50);
solution('Mango', 'big', 8);
