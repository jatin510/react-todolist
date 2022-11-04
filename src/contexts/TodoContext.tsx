import { createContext, useState } from 'react';

interface ITodoContext {
  todos: any;
  setTodos: any;
}

const TodoContext = createContext({} as ITodoContext);

const TodoProvider = (props: any) => {
  const [todos, setTodos] = useState([{ id: 1, task: 1 }]);

  const value = { todos, setTodos };

  return (
    <TodoContext.Provider value={value}>{props.children}</TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
