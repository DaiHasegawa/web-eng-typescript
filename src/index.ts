import { fetchTodos, findTodo, incompleteTodos } from './todo-service.js';

const loaded = await fetchTodos();
console.log(loaded);

const found = await findTodo(2);
console.log(found);

const incompleteCount = await incompleteTodos();
console.log(incompleteCount);