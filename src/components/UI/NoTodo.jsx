import React from "react";
import { Link } from "react-router-dom";

const NoTodo = () => {
  return (
    <div className="no__todo">
      <div className="no__todo-content">
        <h1 className="no__todo-title">You Have no todo Yet</h1>
        <Link to="/add-todo" className="no__todo-link">
          <button className="no__todo-btn">Add Todo &rarr;</button>
        </Link>
      </div>
    </div>
  );
};

export default NoTodo;
