// 문제: 삼각형 판별하기

function solution(a, b, c) {
    let answer = "Yes", max;
    max = a < b ? b : a;
    max = max < c ? c : max; //최대 길이값 구하기

    if (a + b + c - max > max) { //삼각형 조건
        answer = "Yes";
    } else {
        answer = "No";
    }
    return answer;
}

console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));

// [Running] node
// Yes
// No
// [Done] exited with code = 0 in 0.085 seconds


function InfSolution(a, b, c) {
    let answer = "YES", max;
    let sum = a + b + c;

    if (a > b) max = a;
    else max = b;
    if (c > max) max = c;

    if ((sum - max) <= max) answer = "No";

    return answer;
}

