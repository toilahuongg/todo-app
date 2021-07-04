import axios from "axios";
import {
  makeObservable,
  observable,
  action,
  computed,

} from "mobx";
import { v4 as uuidv4 } from 'uuid';
export interface Todo {
  _id?: string;
  title: string;
}
class TodoStore {
  todos: Todo[] = [];
  loading: boolean = true;
  constructor() {
    makeObservable(this, {
      todos: observable,
      loading: observable,
      totalTodo: computed,
      addNewTodo: action.bound,
      removeTodo: action.bound,
      loadTodos: action.bound,
    });
  }

  get totalTodo() {
    return this.todos.length;
  }
  loadTodos() {
    this.loading = true;
    axios.get('http://localhost:3000/api/todos/list')
    .then((res) => {
      this.todos = res.data;
      this.loading = false;
    }).catch((err) => {
      console.log(err);
      this.loading = false;
    })
  }
  addNewTodo(todo: string) {
    this.todos.push({ _id: uuidv4(), title: todo });
  }

  removeTodo(id: string) {
    console.log(id);
    this.todos = this.todos.filter((todo) => todo._id !== id);
  }
}

const todoStore = new TodoStore();

export default todoStore;