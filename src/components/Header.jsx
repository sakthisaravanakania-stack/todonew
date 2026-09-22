import React, { useState } from "react";

const Header = ({ addTodo }) => {
  const [todoName, setTodoName] = useState("");
  const [todoDesc, setTodoDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!todoName.trim() || !todoDesc.trim()) {
      alert("Name matrum Desc type pannunga!");
      return;
    }

    addTodo({
      todoName: todoName,
      todoDesc: todoDesc,
      status: "Not Completed",
    });

    setTodoName("");
    setTodoDesc("");
  };

  return (
    <div className="header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="TodoName"
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
        />

        <input
          type="text"
          placeholder="TodoDesc"
          value={todoDesc}
          onChange={(e) => setTodoDesc(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default Header;