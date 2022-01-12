import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import Context from './context';

const App = () => {
  const [todos, setTodo] = useState([
    {
      name: 'Do homework',
      id: '1',
      resolved: false,
    },
    {
      name: 'Buy milk',
      id: '2',
      resolved: false,
    },
    {
      name: 'Call parents',
      id: '3',
      resolved: false,
    },
  ]);

  function removeTodo(id) {
    console.log('remove todo');
    setTodo(todos.filter((todo) => todo.id !== id));
  }

  function createTodo(item) {
    console.log('create todo');
    setTodo([...todos, item]);
  }

  function resolveTodo(id) {
    console.log('resolve todo');
    setTodo(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.resolved = !todo.resolved;
        }
        return todo;
      })
    );
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <TodoForm create={createTodo} />
        <TodoList todos={todos} onResolve={resolveTodo} />
      </div>
    </Context.Provider>
  );
};

export default App;
