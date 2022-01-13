import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

function useInputValue(defaultValue) {
  const [value, setValue] = useState(defaultValue);

  return {
    bind: {
      value,
      onChange: (event) => {
        setValue(event.target.value);
      },
    },
    clear: () => setValue(''),
    value: () => value,
  };
}
function TodoForm({ create }) {
  const input = useInputValue('');

  function handleSubmit(event) {
    event.preventDefault();
    if (input.value().trim) {
      create({
        title: input.value(),
        id: Date.now(),
        completed: false,
      });
      input.clear();
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField variant="outlined" className="add-input" {...input.bind} />
      <Button variant="contained" color="primary" type="submit">
        Добавить задачу
      </Button>
    </form>
  );
}

export default TodoForm;
