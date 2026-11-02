const todos = [
  { id: 1, title: "型を復習する", completed: true },
  { id: 2, title: "配列を学ぶ", completed: false },
  { id: 3, title: "レポートを書く", completed: true },
];

for (const todo of todos) {
    const status = todo.completed ? "完了" : "未完了";
    console.log(`ID: ${todo.id}, タイトル: ${todo.title}, ステータス: ${status}`);
}

const completedTodos = todos.filter((todo) => {
    return todo.completed;
}).length;

console.log(completedTodos);

const todoTitles = todos.map((todo) => {
    return todo.title;
});

console.log(todoTitles);