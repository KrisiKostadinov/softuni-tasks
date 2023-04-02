// --- 8. Process Odd Positions ---

function solution(array = []) {
    const oddPositions = array.filter((element, index) => {
        return index % 2 != 0;
    }).map(x => x * 2).reverse();
    console.log(oddPositions);
}
solution([10, 15, 20, 25]);
solution([3, 0, 10, 4, 7, 3]);