import React from "react";
import { useState } from "react";
import Card from "../UI/Card";
import todos from "../../utils/data";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

const AddTodo = () => {
  const [allTodos, setAllTodos] = useState(todos);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [priority, setPriority] = useState("");
  const history = useHistory();

  const addTodo = (e) => {
    e.preventDefault();
    if (title === "" || desc === "" || date === "" || priority === "") {
      return;
    }

    const todoItem = {
      id: Date.now(),
      status: false,
      title,
      desc,
      date,
      priority,
    };
    // console.log(todoItem);
    setAllTodos((prev) => [...prev, todoItem]);

    setTitle("");
    setDesc("");
    setDate("");
    setPriority("");
    // history.push("/");
  };

  useEffect(() => {
    const data = localStorage.getItem("todos");
    if (data) {
      setAllTodos(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(allTodos));
  });

  return (
    <Card className="add__todo">
      <div className="add__todo-header">
        <h2>ADD TODO</h2>
      </div>
      <div className="add__todo-inputs">
        <form onSubmit={addTodo} className="add__todo-form">
          <div className="form__group">
            <label className="form__group-label" htmlFor="title">
              Title
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form__group-input"
              type="text"
            />
          </div>
          <div className="form__group">
            <label className="form__group-label" htmlFor="title">
              Description
            </label>
            <textarea
              className="form__group-textarea"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              cols="30"
              rows="5"
            ></textarea>
          </div>
          <div className="form__group">
            <label className="form__group-label" htmlFor="title">
              Date
            </label>
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="form__group-input"
              type="date"
            />
          </div>
          <div className="form__group">
            <label className="form__group-label" htmlFor="title">
              Priority
            </label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="form__group-select"
              name=""
              id=""
            >
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
          <div className="add__todo-action">
            <button className="add__todo-action-btn">ADD TODO</button>
          </div>
        </form>
      </div>
    </Card>
  );
};

export default AddTodo;
