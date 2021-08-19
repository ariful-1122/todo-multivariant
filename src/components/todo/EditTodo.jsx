import React from "react";
import { useState } from "react";
import Card from "../UI/Card";
import todos from "../../utils/data";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

const EditTodo = ({ match }) => {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [priority, setPriority] = useState("");

  useEffect(() => {
    console.log(typeof match.params.id);
    const data = localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : [];

    const findById = data.find((item) => item.id === Number(match.params.id));
    console.log(findById);
    setTitle(findById.title);
    setDesc(findById.desc);
    setDate(findById.date);
    setPriority(findById.priority);
  }, []);

  const editHandler = (e) => {
    e.preventDefault();
    console.log("edit handler");
    if (title === "" || desc === "" || date === "" || priority === "") {
      return;
    }
    const data = localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : [];
    const findIndex = data.findIndex(
      (item) => item.id === Number(match.params.id)
    );

    const edited = {
      id: Number(match.params.id),
      status: false,
      title,
      desc,
      date,
      priority,
    };

    data[findIndex] = edited;
    localStorage.setItem("todos", JSON.stringify(data));
    history.push("/");
  };

  return (
    <Card className="add__todo">
      <div className="add__todo-header">
        <h2>EDIT TODO</h2>
      </div>
      <div className="add__todo-inputs">
        <form onSubmit={editHandler} className="add__todo-form">
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
            <button className="add__todo-action-btn">EDIT TODO</button>
          </div>
        </form>
      </div>
    </Card>
  );
};

export default EditTodo;
