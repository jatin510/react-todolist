import { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

export default function Todo(props: any) {
  const { todoDetails } = props;
  const todoContext = useContext(TodoContext);

  const { deleteTodo } = todoContext;

  return (
    <>
      <div>
        {todoDetails.task}
        <button onClick={() => deleteTodo(todoDetails.id)}>X</button>
      </div>
    </>
  );
}
