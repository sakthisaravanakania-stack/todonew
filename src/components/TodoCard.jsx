import React, { useState, useEffect } from "react";

const TodoCard = ({ todo, updateStatus, editTodo, deleteTodo }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [todoName, setTodoName] = useState(todo.todoName || "");
  const [todoDesc, setTodoDesc] = useState(todo.todoDesc || "");

  useEffect(() => {
    setTodoName(todo.todoName || "");
    setTodoDesc(todo.todoDesc || "");
  }, [todo]);

  const handleUpdate = () => {
    editTodo({
      newName: todoName,
      newDesc: todoDesc,
      todoId: todo.id,
    });
    setIsEdit(false);
  };

  return (
    <div className="edit">
      {isEdit ? (
        <div className="edit-action">
          <input
            type="text"
            placeholder="Change your name"
            value={todoName}
            onChange={(e) => setTodoName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Change your desc"
            value={todoDesc}
            onChange={(e) => setTodoDesc(e.target.value)}
          />
          <button onClick={handleUpdate}>Update</button>
        </div>
      ) : (
        <div className="edit-call">
          <h3>Name: {todo.todoName}</h3>
          <p>Desc: {todo.todoDesc}</p>
        </div>
      )}
      <div className="edit-status">
        <label>Status: </label>
        <select
          value={todo.status}
          onChange={(e) =>
            updateStatus({
              todoStatus: e.target.value,
              todoId: todo.id,
            })
          }
        >
          <option value="Completed">Completed</option>
          <option value="Not Completed">Not Completed</option>
        </select>
      </div>

      <div className="btn-container">
        <button onClick={() => setIsEdit(true)}>Edit</button>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoCard;