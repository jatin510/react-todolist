import { createContext, useState } from 'react';

export interface ITodo {
  id: string | number;
  task: string;
}

export interface ITodoContext {
  todos: ITodo[];
  setTodos: any;
  deleteTodo: any;
}

const TodoContext = createContext({} as ITodoContext);

const TodoProvider = (props: any) => {
  const [todos, setTodos] = useState([]);

  function deleteTodo(id: any) {
    const filteredTodos = todos.filter((todo: ITodo) => todo.id != id);

    setTodos(filteredTodos);
  }

  const value = { todos, setTodos, deleteTodo };

  return (
    <TodoContext.Provider value={value}>{props.children}</TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
