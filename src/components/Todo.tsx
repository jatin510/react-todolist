import { useState } from 'react';

const Todo = (props) => {
  const { todo, setDeleteSelectedTodo, setEditSelectedTodo } = props;

  const [editMode, setEditMode] = useState(false);
  const [editedText, setEditedText] = useState(todo.task);

  const handleInputChange = (e) => {
    e.preventDefault();
    setEditedText(e.target.value);
  };

  const handleSaveEdit = () => {
    setEditSelectedTodo({ id: todo.id, task: editedText });
    setEditMode(false);
  };

  return (
    <>
      <div>
        {editMode ? (
          <div>
            <input
              type="text"
              value={editedText}
              onChange={handleInputChange}
            />
            <button onClick={handleSaveEdit}>Save</button>
          </div>
        ) : (
          <span>{todo.task}</span>
        )}
        <button
          onClick={() => {
            setDeleteSelectedTodo(todo);
          }}
        >
          X
        </button>
        <button
          onClick={() => {
            setEditMode(!editMode);
          }}
        >
          Edit
        </button>
      </div>
    </>
  );
};

export default Todo;
