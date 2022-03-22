//문제: 세 수 중 최솟값 구하기
function solution(a, b, c) {
    let answer;
    answer = a < b ? a : b;
    answer = c < answer ? c : answer;

    return answer;
}

// function solution(a, b, c) {
//     let answer;
//     if (a < b) answer = a;
//     else answer = b;
//     if (c < answer) answer = c;

//     return answer;
// }

console.log(solution(6, 5, 11));

//[Done] exited with code = 0 in 0.092 seconds