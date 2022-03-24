//문제: 연필의 다스 수 계산
function solution(n) {
    let answer;
    // answer = Math.ceil(n / 12); 풀이 1

    if (n % 12 == 0) { //풀이 2
        answer = parseInt(n / 12);
    } else {
        answer = parseInt((n / 12) + 1);
    }
    return answer;
}
console.log(solution(25));
console.log(solution(178));