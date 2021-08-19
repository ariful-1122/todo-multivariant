import React from "react";
import Card from "../UI/Card";
import TodoItem from "./TodoItem";
import { useEffect, useState } from "react";
// import Todos from "../../utils/data";

const ListTodo = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const allTodo = localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : [];
    setTodos(allTodo);
  }, []);

  const deleteHandler = (id) => {
    console.log("delete clicked");
    const deletedItem = todos.filter((item) => item.id !== id);
    console.log(todos);
    setTodos(deletedItem);
    localStorage.setItem("todos", JSON.stringify(deletedItem));
  };

  const checkHandler = (id) => {
    const checkedItem = JSON.parse(localStorage.getItem("todos"));
    const findItem = checkedItem.find((item) => item.id === id);
    if (findItem.status === false) {
      findItem.status = true;
    } else {
      findItem.status = false;
    }
    const itemIndex = checkedItem.findIndex((item) => item.id === id);
    checkedItem[itemIndex] = findItem;
    setTodos(checkedItem);
    localStorage.setItem("todos", JSON.stringify(checkedItem));
  };

  return (
    <Card className="list-wrapper">
      <div className="todo__lists">
        <div className="todo__lists-header">
          <h2>Todo List</h2>
        </div>
        <div className="todo__lists-body">
          <div className="todo__lists-headings">
            <div className="todo__lists-headings-id">#</div>
            <div className="todo__lists-headings-title">Title</div>
            <div className="todo__lists-headings-desc">Description</div>
            <div className="todo__lists-headings-priority">Priority</div>
            <div className="todo__lists-headings-status">Status</div>
            <div className="todo__lists-headings-dots"></div>
          </div>
          {todos &&
            todos.map((todo, i) => (
              <TodoItem
                onCheckItem={checkHandler}
                onDeleteItem={deleteHandler}
                key={i + 1}
                todo={todo}
                id={i + 1}
              />
            ))}
        </div>
      </div>
    </Card>
  );
};

export default ListTodo;
