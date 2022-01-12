import React, { useContext } from 'react';
import Context from '../context';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

export default function TodoItem({ todo, onResolve }) {
  // @ts-ignore
  const { removeTodo } = useContext(Context);

  return (
    <li className="item">
      <input type="checkbox" onChange={() => onResolve(todo.id)} />
      <span className={todo.resolved ? 'resolved' : ''}>{todo.name}</span>
      <IconButton aria-label="delete" onClick={() => removeTodo(todo.id)}>
        <DeleteIcon />
      </IconButton>
    </li>
  );
}
