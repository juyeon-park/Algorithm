// Q) 'A'를 모두 '#'으로 바꾸어 출력
function solution(s) {
    let answer = str.replace(/A/g, "#");
    return answer;
}

let str = "BANANA";
console.log(solution(str));

// function solution(s) {
//     let answer = "";
//     for (let x of s) {
//         if (x == 'A') answer += '#';
//         else answer += x;
//     }
//     return answer;
// }