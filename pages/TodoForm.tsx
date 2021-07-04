import axios from "axios";
import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import useStore from "../hooks";

const TodoForm = () => {
    const todo = useStore((store: any) => store.todo);
  const [inputValue, setInputValue] = useState("");

  const onChange = (e:any) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const onAddNewTodo = async (e: any) => {
    e.preventDefault();
    if (!inputValue) return;
    await axios.post('http://localhost:3000/api/todos/create', {title: inputValue});
    todo.addNewTodo(inputValue);
    setInputValue("");
  };

  return (
    <form className="formm" onSubmit={onAddNewTodo}>
      <input onChange={onChange} value={inputValue} />
      <button type="submit">+</button>
    </form>
  );
};
export default observer(TodoForm);