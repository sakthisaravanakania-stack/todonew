import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css";

import axios from "axios";

import {
  getTodos,
  addTodo as addTodoAction,
  updateStatus as updateStatusAction,
  deleteTodo as deleteTodoAction,
  editTodo as editTodoAction,
} from "./slices/TodoSlice";

import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todo.todos);
  const filter = useSelector((state) => state.todo.filter);

  const [isLoading, setIsLoading] = useState(false);

  const fetchTodos = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("/users");
      dispatch(getTodos(response.data));
    }   catch (error) {
      console.log(error);
    }   finally {
      setIsLoading(false);
    }
  };
  const addTodo = async (todoData) => {
    try {
      const response = await axios.post("/users", {
        todoName: todoData.todoName,
        todoDesc: todoData.todoDesc,
        status: "Not Completed",
    });
      dispatch(addTodoAction(response.data));
    } catch (error) {
      console.log(error);
          dispatch(
           addTodoAction({
          id: Date.now().toString(),
           todoName: todoData.todoName,
          todoDesc: todoData.todoDesc,
        status: "Not Completed",
        })
       );
    }
  };

  const updateStatus = async (todoData) => {
    try {
     dispatch(updateStatusAction(todoData));
      await axios.put("/users/" + todoData.todoId, {
          status: todoData.todoStatus,
       });
    }  catch(error) {
      console.log(error);
    }
    };  
    
  const editTodo = async (todoData) => {
    try {
      dispatch(editTodoAction(todoData));
      await axios.put("/users/" + todoData.todoId, {
         todoName: todoData.newName,
        todoDesc: todoData.newDesc,
       });
    } catch (error) {
      console.log(error);
    }
    };
    

  const deleteTodo = async (todoId) => {
    try {
      dispatch(deleteTodoAction(todoId));
      await axios.delete("/users/" + todoId);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredTodo = todos.filter((todo) => {
    if (filter === "all") {
      return true;
    }
    return todo.status === filter;
  });

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="container">
      <h1>Welcome To Todo App</h1>
      <Header addTodo={addTodo} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Main
          addTodo={addTodo}
          filteredTodo={filteredTodo}
          updateStatus={updateStatus}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      )}
    </div>
  );
};

export default App;