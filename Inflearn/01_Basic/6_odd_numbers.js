//문제 : 홀수
function solution(arr) {
    let answer = [];
    let sum = 0;
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            sum += arr[i];
            min = arr[i] < min ? arr[i] : min;
        }
    }
    answer.push(sum);
    answer.push(min);
    return answer;
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));

// [Running] node
// [256, 41]
// [Done] exited with code = 0 in 0.089 seconds

// function solution(arr) {
//     let answer = [];
//     let sum = 0, min = 1000;
//     for (let x of arr) {
//         if (x % 2 === 1) {
//             sum += x;
//             if (x < min) min = x;
//         }
//     }
//     answer.push(sum);
//     answer.push(min);
//     return answer;
// }

// arr = [12, 77, 38, 41, 53, 92, 85];
// console.log(solution(arr));