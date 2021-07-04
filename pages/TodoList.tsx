import React, { useEffect } from "react";
import { observer } from "mobx-react";
import useStore from "../hooks";
import axios from "axios";

const TodoList = () => {
  const {totalTodo, todos, loading, removeTodo, loadTodos} = useStore((store: any) => store.todo);
  useEffect(() =>{
    loadTodos();
  },[])
  const onRemoveTodo = async (id: string) => {
    await axios.delete(`http://localhost:3000/api/todos/${id}`);
    removeTodo(id);

  };
  return loading ?
    (<div>Loading...</div>)
  : (
    <div className="list">
      <p>Total todos: {totalTodo}</p>
      <ul>
        {todos.map((todo: any) => (
          <li key={todo._id}>
            {todo.title}
            <button onClick={onRemoveTodo.bind(null, todo._id)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default observer(TodoList);