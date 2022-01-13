import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import Context from './context';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then((response) => response.json())
      .then((todos) => setTodos(todos));
  }, []);

  function removeTodo(id) {
    console.log('remove todo');
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function createTodo(item) {
    console.log('create todo');
    setTodos([...todos, item]);
  }

  function resolveTodo(id) {
    console.log('resolve todo');
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <TodoForm create={createTodo} />
        {todos.length ? (
          <TodoList todos={todos} onResolve={resolveTodo} />
        ) : (
          <p className="list-empty">Нет задач</p>
        )}
      </div>
    </Context.Provider>
  );
};

export default App;
