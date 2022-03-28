//문제: 10부제
function solution(day, arr) {
    let answer = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 10 == day) {
            answer += 1;
        }
    }
    return answer;
}

arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));
arr2 = [12, 20, 54, 30, 87, 91, 30];
console.log(solution(0, arr2));

// [Running] node
// 3
// 3
// [Done] exited with code = 0 in 0.093 seconds

// function InfSolution(day, arr) {
//     let answer = 0;
//     for (let x of arr) {
//         if (x % 10 === day) answer++;
//     }
//     return answer;
// }