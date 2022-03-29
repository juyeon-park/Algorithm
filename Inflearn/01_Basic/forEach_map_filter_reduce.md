밑 4개의 함수는 모두 고차함수다(=인자로 함수를 전달받는다)

# forEach(callback(currentvalue, index, array),thisArg)
**각각의 array 요소들에 대해 한번씩 callback함수를 실행한다.**

currentvalue: 배열의 각각의 요소

index: 배열의 index

array: 배열 그자체

thisArg : 함수를 실행할때 this로 사용할 값, 생략가능
```javascript
 a=[10,11,12,13,14,15]
 a.forEach(function(v,i){
     console.log(v,i,this);
 }, [1,2]);
```
# map(callback(currentvalue, index, array),thisArg)
**각각의 array 요소들에 대해 한번씩 callback함수를 실행하고 그 결과를 가진 새로운 배열을 만들어낸다.**

map함수로 새로 생성한 배열은 원본 배열과 길이가 똑같다. 조건에 맞지 않을 경우 undefined로 요소가 들어감

```javascript
 a=[10,11,12,13,14,15]
 let answer = a.map(function(v,i){
    return v*v;
 }, [1,2]);
```
# filter(callback(currentvalue, index, array),thisArg)
**주어진 callback 함수에 속한 조건이 참인 요소들을 새로운 배열에 넣어 반환한다.**

map과 다르게 원하는 원소만 배열에 넣어 반환해준다.
```javascript
 a=[10,11,12,13,14,15]
 let answer = a.filter(function(v,i){
    return v%2==0; //true,false로 return
 }, [1,2]);
```
# reduce(callback(acc, currentvalue, index, array),val)
**배열의 각 요소에 대해 주어진 reducer 함수를 실행하고, 하나의 결과값을 반환한다**

각 배열 요소들에 대해서 callback함수를 실행하는것은 map, filter, forEach와 같다.

acc: 콜백의 반환값을 누적

val: callback함수의 acc(누산기) 초기화 값

val값이 주어지지 않을 경우 : acc= 배열의 첫번째 값, currentvalue=배열의 두번째 값

```javascript
 a=[10,11,12,13,14,15]
 let answer = a.reduce(function(acc,v){
    return acc+v;
 }, 0);
```
