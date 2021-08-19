import React from "react";

const PriorityBadge = (props) => {
  // const conditions =
  //   props.label === "high"
  //     ? "high"
  //     : props.label === "medium"
  //     ? "medium"
  //     : props.label === "low"
  //     ? "low"
  //     : "";

  // if (props.label === "high") {
  //   return <button className="priority__badge-high">High</button>;
  // }
  // if (props.label === "medium") {
  //   return <button className="priority__badge-medium">Medium</button>;
  // }
  // if (props.label === "low") {
  //   return <button className="priority__badge-low">Low</button>;
  // }

  return (
    <div className="priority__badge">
      {props.label === "high" ? (
        <button className="priority__badge high">High</button>
      ) : props.label === "medium" ? (
        <button className="priority__badge medium">Medium</button>
      ) : props.label === "low" ? (
        <button className="priority__badge low">Low</button>
      ) : (
        <button>Normal</button>
      )}
    </div>
  );

  // return (
  //   <button className={`priority__badge-${conditions}`}>{conditions}</button>
  // );
};

export default PriorityBadge;
