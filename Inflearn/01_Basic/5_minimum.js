//문제: 최솟값 구하기
function solution(arr) {
    let answer, min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        min = arr[i] < min ? arr[i] : min;
    }
    answer = min;
    return answer;

}

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));


function InfSolution(arr) {
    let answer, min = Number.MAX_SAFE_INTEGER; //Number.Max_SAFE_INTEGER = js에서 안전한 최대 정수값
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
    }
    answer = min;
    return answer;

}

// [Running] node
// 1
// [Done] exited with code = 0 in 0.089 seconds