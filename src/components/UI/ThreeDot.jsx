import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const ThreeDot = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const menuRef = useRef();
  const toggleClick = () => {
    setIsClicked((prev) => !prev);
  };

  useEffect(() => {
    const handler = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsClicked(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <div className="three__dot">
      <div onClick={toggleClick} className="three__dot-icon">
        <span></span>
        <span></span>
        <span></span>
      </div>
      {isClicked && (
        <div ref={menuRef} className="three__dot-dropdown">
          <Link to={`/edit-todo/${props.id}`}>
            <button>Edit</button>
          </Link>
          <button onClick={props.onClick}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default ThreeDot;
