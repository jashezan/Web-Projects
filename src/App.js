import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableTodo, setEditableTodo] = useState(null);

  const createHandler = () => {
    if (todoTitle === "") {
      alert("Please Enter a Todo");
      return;
    }
    const newtodo = {
      id: Date.now(),
      title: todoTitle,
      isComplete: false,
    };
    setTodoList([...todoList, newtodo]);
    setTodoTitle("");
  };

  const editHandler = (id) => {
    const todoToBeEdited = todoList.find((item) => item.id === id);
    setEditMode(true);
    setEditableTodo(todoToBeEdited);
    setTodoTitle(todoToBeEdited.title);
  };

  const deleteHandler = (id) => {
    const newList = todoList.filter((item) => item.id !== id);
    setTodoList(newList);
  };

  const updateTodoHandler = () => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === editableTodo.id) {
          todo.title = todoTitle;
        }
        return todo;
      })
    );
    setTodoTitle("");
    setEditMode(false);
    setEditableTodo(null);
  };

  return (
    <main>
      <div className="full">
        <Header />
        <form className="App pure-form container">
          <h1>Todo App</h1>
          <div className="upper">
            <input
              type="text"
              name="todoTitle"
              value={todoTitle}
              onChange={(e) => {
                setTodoTitle(e.target.value);
              }}
            />
            <button
              className="pure-button pure-button-primary"
              value="submit"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                editMode ? updateTodoHandler() : createHandler();
              }}
            >
              {editMode ? "Update Todo" : "Add Todo"}
            </button>
          </div>
          <div className="middle">
            <ul>
              {todoList.map((todo) => {
                return (
                  <li>
                    <span className="todo-grp">
                      <input type="checkbox" />
                      <span>{todo.title}</span>
                    </span>
                    <span className="btn-grp">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          editHandler(todo.id);
                        }}
                        className="pure-button button-success"
                      >
                        Edit
                      </button>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          deleteHandler(todo.id);
                        }}
                        className="button-error pure-button"
                      >
                        Delete
                      </button>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </form>
      </div>
      <Footer />
    </main>
  );
}

export default App;
