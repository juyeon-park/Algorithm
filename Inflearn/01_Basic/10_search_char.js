// Q) 문자열에 특정문자 갯수 구하기

function solution(s, t) {
    let answer = 0;
    for (let x of s) {
        if (x == t) {
            answer++;
        }
    }
    return answer;
}

function solution2(s, t) {
    let answer = s.split("").filter((v) => v == t).length;
    return answer;
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, 'R'));