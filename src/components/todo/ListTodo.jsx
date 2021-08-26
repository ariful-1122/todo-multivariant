import React from "react";
import Card from "../UI/Card";
import TodoItem from "./TodoItem";
import Modal from "../../components/UI/Modal";
import { useEffect, useState } from "react";
// import Todos from "../../utils/data";

const ListTodo = () => {
  const [todos, setTodos] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const allTodo = localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : [];
    setTodos(allTodo);
  }, []);

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

  const filterHandler = (e) => {
    const data = JSON.parse(localStorage.getItem("todos"));
    const filtered = data.filter((item) => item.priority === e.target.value);
    setTodos(filtered);
  };

  const deleteHandler = (id) => {
    const data = JSON.parse(localStorage.getItem("todos"));
    const itemIndex = data.findIndex((item) => item.id === id);
    data.splice(itemIndex, 1);
    setTodos(data);
    localStorage.setItem("todos", JSON.stringify(data));
  };

  return (
    <Card className="list-wrapper">
      <div className="todo__lists">
        <div className="todo__lists-header">
          <h2>Todo List</h2>
          <div className="search__bar">
            <input
              placeholder="Search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              type="text"
            />
          </div>
          <div className="filter__lists">
            <h3 className="filter__lists-title">Filter:</h3>
            <select
              // defaultValue="selected"
              onChange={filterHandler}
              className="filter__lists-select"
            >
              {/* <option disabled>Filter</option> */}
              <option selected disabled>
                Chose Priority
              </option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
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
            todos
              .filter((item) =>
                searchText === ""
                  ? item
                  : item.title
                      .toLowerCase()
                      .includes(searchText.toLowerCase()) ||
                    item.desc.toLowerCase().includes(searchText.toLowerCase())
              )
              .map((todo, i) => (
                <TodoItem
                  onDeleteItem={deleteHandler}
                  onCheckItem={checkHandler}
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
