//문제: 1부터 n까지의 합 출력
function solution(n) {
    let answer = 0;
    for (let i = 0; i < n + 1; i++) {
        answer += i
    }
    return answer;
}
console.log(solution(6));
console.log(solution(10));

// [Running] node
// 21
// 55
// [Done] exited with code = 0 in 0.086 seconds
