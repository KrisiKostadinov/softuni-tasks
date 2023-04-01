function solution(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'regular' || array[i] === 'special') {
            let totalTaxes = sum * 0.2;
            let totalSum = sum + totalTaxes;
            if (array[i] === 'special') {
                totalSum *= 0.9;
            }
            if (totalSum === 0) {
                console.log('Invalid order!');
                break;
            }
            console.log("Congratulations you've just bought a new computer!");
            console.log(`Price without taxes: ${Number.parseFloat(sum).toFixed(2)}$`);
            console.log(`Taxes: ${totalTaxes.toFixed(2)}$`);
            console.log('-----------');
            console.log(`Total price: ${totalSum.toFixed(2)}$`);
        }
        else if (!Number.isNaN(array[i])) {
            if (Number(array[i] >= 0)) {
                sum += Number.parseFloat(array[i]);
            } else {
                console.log('Invalid price!');
            }
        }
    }
}

// --- Solution Tests ---
solution(["regular"]);
solution(['1023', '15', '-20', '-5.50', '450', '20', '17.66', '19.30', 'regular']);
