import { createContext, useState } from 'react';
const TodoContext = createContext({});

const TodoProvider = (props: any) => {
  const [todo, setTodo] = useState('');

  const value = { todo, setTodo };

  return (
    <TodoContext.Provider value={value}>{props.children}</TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
