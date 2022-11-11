const obj = {
    name: 'Lee',
    age: 20,
    alive: true,
    hobby: ['traveling', 'tennis']
};

const json = JSON.stringify(obj)
console.log(typeof json, json)

const parsed = JSON.parse(json)
console.log(typeof parsed, parsed)

const todos = [
    {id: 1, content: 'HTML', completed: true},
    {id: 2, content: 'CSS', completed: true},
    {id: 3, content: 'JS', completed: false}
]

const jsonTodos = JSON.stringify(todos)
console.log(typeof jsonTodos, jsonTodos)

const parsedTodos = JSON.parse(jsonTodos)
console.log(typeof parsedTodos, parsedTodos)
console.log(parsedTodos[1]);