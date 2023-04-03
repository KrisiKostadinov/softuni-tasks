// --- 02. Cat Walking ---

function solution(minutes, numberWalkings, calories) {
    let minutesPerDay = minutes * numberWalkings;
    let totalCalories = minutesPerDay * 5;

    if (totalCalories >= calories / 2) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalCalories}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalCalories}.`);
    }
}
solution(30, 3, 600);
solution(15, 2, 500);
solution(40, 2, 300);
