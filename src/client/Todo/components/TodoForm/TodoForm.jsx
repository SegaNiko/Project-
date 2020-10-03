import React, { useState, useEffect, useRef } from "react";

import "./index.scss";

const TodoForm = (props) => {
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };
  return (
    <form className="todo__form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a todo"
        name="text"
        value={input}
        className="todo__input"
        onChange={handleChange}
        ref={inputRef}
      />
      <button className="todo__btn">Add todo</button>
    </form>
  );
};

export default TodoForm;
