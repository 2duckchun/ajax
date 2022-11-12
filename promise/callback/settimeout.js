/*
setTimeout 함수는 비동기 함수다. setTimeout 함수가 비동기 함수인 이유는 콜백 함수의 호출이 비동기로 동작하기 때문이다.
setTimeout 함수를 호출하면 콜백함수를 호출 스케줄링한 다음 타이머 id를 반환하고 즉시 종료된다.

즉, 비동기 함수인 setTimeout 함수의 콜백함수는 setTimeout 함수가 종료된 이후에 호출된다.
따라서 setTimeout 함수 내부의 콜백함수에서 처리결과를 외부로 반환하거나 상위 스코프의 변수에 할당하면 기대한대로 동작하지 않는다.
*/

let g = 0

setTimeout(() => {
    g = 100
}, 0);
console.log(g);
setTimeout(() => {
    console.log(g);
}, 1000);