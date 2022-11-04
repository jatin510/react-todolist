import { createContext, useState } from 'react';
const TodoContext = createContext({});

const TodoProvider = (props: any) => {
  const [todos, setTodos] = useState([{ id: 1, task: 1 }]);

  const value = { todos, setTodos };

  return (
    <TodoContext.Provider value={value}>{props.children}</TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
