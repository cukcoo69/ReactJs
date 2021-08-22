import React from "react";
import PropTypes from "prop-types";

const TodoItem = (props) => {
  const todo = props.todoes;
  const markComplete = props.markCompleteFunc;
  const deleteFunc = props.deleteFunc;

  const wrapper = {
    display: "flex",
    width: "100%",
    justifyContent: "center",
  };
  const todoItemStype = {
    padding: "10px",
    background: "#f4f4",
    border: "1px dotted #ccc",
    width: "80%",
    margin: "10px 10px",
    textDecoration: todo.completed ? 'line-through' : 'none'
  };
  const deleteButtonStyle = {
    background: "#fff000",
    color: "#000",
    border: "none",
    padding: "5px 9px",
    borderRadius: "15%",
    cursor: "pointer",
    float: "right"
  };
  return (
    <div style={wrapper}>
      <p style={todoItemStype}>
        <input
          type="checkbox"
          onChange={markComplete.bind(this, todo.id)}
          checked={todo.completed}
        />
        {todo.title}
        <button style={deleteButtonStyle} onClick={deleteFunc.bind(this, todo.id)}>Delete</button>
      </p>
    </div>
  );
};

TodoItem.propTypes = {
  todoes: PropTypes.object.isRequired,
  markCompleteFunc: PropTypes.object.isRequired,
  deleteFunc: PropTypes.object.isRequired
};

export default TodoItem;
