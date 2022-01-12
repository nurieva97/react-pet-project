import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

function TodoForm({ create }) {
  const [value, setValue] = useState('');
  function handleSubmit(event) {
    event.preventDefault();
    if (value) {
      setValue('');
      create({
        name: value,
        id: Date.now(),
        completed: false,
      });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        variant="outlined"
        className="add-input"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <Button variant="contained" color="primary" type="submit">
        Добавить задачу
      </Button>
    </form>
  );
}

export default TodoForm;
