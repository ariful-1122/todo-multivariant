import React, { useState } from "react";
import PriorityBadge from "../UI/PriorityBadge";
import ThreeDot from "../UI/ThreeDot";
import Modal from "../../components/UI/Modal";

const TodoItem = ({ todo, id, onDeleteItem, onCheckItem }) => {
  const [isShownModal, setIsShownModal] = useState(false);

  const modalHideHandler = () => {
    setIsShownModal(false);
  };

  const modalShowHandler = () => {
    setIsShownModal(true);
  };

  return (
    <div className="todo__item">
      {isShownModal && (
        <Modal
          title="Warning"
          desc="Data Will be deleted parmanently. Are you sure to delete this data?"
          onDeleteItem={onDeleteItem.bind(null, todo.id)}
          id={todo.id}
          onClose={modalHideHandler}
        />
      )}
      <div className="todo__item-id">{id}</div>
      <div className="todo__item-title">
        {todo.title}
        <p className="todo__item-title-date">
          {" "}
          {todo.date.split("-").reverse().join("-")}{" "}
        </p>
      </div>
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
        <ThreeDot onShowModal={modalShowHandler} id={todo.id} />
      </div>
    </div>
  );
};

export default TodoItem;
