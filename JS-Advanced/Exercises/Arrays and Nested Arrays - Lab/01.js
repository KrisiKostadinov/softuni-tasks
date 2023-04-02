// --- 1.	Even Position Element ---

function solution(array = []) {
  const filteredElements = array.filter((element, index) => {
    return index % 2 === 0;
  });
  console.log(filteredElements.join(" "));
}
solution(["20", "30", "40", "50", "60"]);
solution(["5", "10"]);