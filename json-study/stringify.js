const obj = {
    name: 'Lee',
    age: 20,
    alive: true,
    hobby: ['traveling', 'tennis']
}

// 객체를 JSON 포맷의 문자열로 변환함
const json = JSON.stringify(obj)
console.log(typeof json, json);

// 객체를 JSON 포맷의 문자열로 변환하면서 들여쓰기함
const prettyJson = JSON.stringify(obj, null, 2)
console.log(typeof prettyJson, prettyJson);

// replacer 함수. 값의 타입이 Number면 필터링되어 반환되지 않음.
function filter(key, value) {
    return typeof value === 'number' ? undefined : value
}
const strFilteredObject = JSON.stringify(obj, filter, 2)
console.log(strFilteredObject)

// 오브젝트 뿐만 아니라 객체도 JSON 포맷의 문자열로 변환함
const todos = [
    {id: 1, content: 'HTML', completed: true},
    {id: 2, content: 'CSS', completed: true},
    {id: 3, content: 'JS', completed: false}
]

const todosJson = JSON.stringify(todos, null, 2)
console.log(typeof todosJson, todosJson);