import React, { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

import "./index.scss";

const TodoItem = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }
  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo__row complete" : "todo__row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="todo__icons">
        <RiCloseCircleLine
          className="todo__icons-delete"
          onClick={() => removeTodo(todo.id)}
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="todo__icons-edit"
        />
      </div>
    </div>
  ));
};

export default TodoItem;
