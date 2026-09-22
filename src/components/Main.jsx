import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../slices/TodoSlice";
import TodoCard from "./TodoCard";

const Main = ({ filteredTodo, updateStatus, deleteTodo, editTodo }) => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.todo.filter);

  return (
    <div className="main">
      <div className="main-content">
        <h2>My Todos</h2>
        <label>Status Filter:</label>
        <select
          value={filter}
          onChange={(e) => dispatch(setFilter(e.target.value))}
        >
          <option value="all">All</option>
          <option value="Completed">Completed</option>
          <option value="Not Completed">Not Completed</option>
        </select>
      </div>

      {filteredTodo.length === 0 ? (
        <div className="empty">
          <p>Your TodoCard is Empty</p>
        </div>
      ) : (
        <div className="purpose">
          {filteredTodo.map((todo) => (
            <TodoCard
              key={todo.id}
              todo={todo}
              updateStatus={updateStatus}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Main;