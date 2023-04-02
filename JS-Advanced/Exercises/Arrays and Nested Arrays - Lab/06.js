// --- 6. Bigger Half ---

function solution(array = []) {
  const sortedArray = array.sort((a, b) => a - b);
  const secondHalf = sortedArray.slice(Math.round(sortedArray.length) / 2);
  console.log(`[${secondHalf.join(", ")}]`);
}
solution([4, 7, 2, 5]);
solution([3, 19, 14, 7, 2, 19, 6]);
