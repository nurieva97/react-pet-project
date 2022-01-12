import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ todos, onResolve }) {
  return (
    <ul className="list">
      {todos.map((todo, index: number) => {
        return <TodoItem todo={todo} key={todo.id} onResolve={onResolve} />;
      })}
    </ul>
  );
}
