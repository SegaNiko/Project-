import React from "react";

import "./index.scss";

import TodoList from "./components/TodoList/TodoList";

const Todo = () => {
  return (
    <div className="todo">
      <div className="container">
        <TodoList />
      </div>
    </div>
  );
};

export default Todo;
