import React from "react";
import Card from "./Card";

const Modal = (props) => {
  const deleteItemHandler = () => {
    props.onDeleteItem();
    props.onClose();
  };

  return (
    <>
      <div onClick={props.onClose} className="modal__overlay" />
      <Card className="modal">
        <div className="modal__header">
          <h2>{props.title}</h2>
        </div>
        <div className="modal__body">
          <p>{props.desc}</p>
        </div>
        <div className="modal__footer">
          <button onClick={props.onClose} className="modal__footer-cancel">
            Cancel
          </button>
          <button onClick={deleteItemHandler} className="modal__footer-ok">
            Ok
          </button>
        </div>
      </Card>
    </>
  );
};

export default Modal;
