import React from "react";
import PriorityBadge from "../UI/PriorityBadge";
import ThreeDot from "../UI/ThreeDot";

const TodoItem = ({ todo, id, onDeleteItem, onCheckItem }) => {
  return (
    <div className="todo__item">
      <div className="todo__item-id">{id}</div>
      <div className="todo__item-title">{todo.title}</div>
      <div className="todo__item-desc">{todo.desc}</div>
      <div className="todo__item-priority">
        <PriorityBadge label={todo.priority} />
      </div>
      <div className="todo__item-status">
        <input
          onChange={() => onCheckItem(todo.id)}
          checked={todo.status}
          className="todo__item-status-checkbox"
          type="checkbox"
        />
      </div>
      <div className="todo__item-dots">
        <ThreeDot id={todo.id} onClick={() => onDeleteItem(todo.id)} />
      </div>
    </div>
  );
};

export default TodoItem;
