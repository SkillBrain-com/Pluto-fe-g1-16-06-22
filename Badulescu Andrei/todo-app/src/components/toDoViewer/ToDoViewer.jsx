import "./ToDoViewer.css";
import TodoItem from "../todo-item/TodoItem";
import React, { useState } from "react";
import Button from "../button/Button";

const ToDoViewer = (props) => {
  return (
    <div>
      <h1>My todos</h1>
      <Button onClick={props.onCreateClick}>Add +</Button>
      <h2>ToDo</h2>
      <div className="list-container"></div>
      <div className="separator"></div>
      <h2>Completed</h2>
      <div className="list-container"></div>

      {props.toDoList.map((item, index) => {
        return (
          <TodoItem
            key={index}
            id={item.id}
            title={item.title}
            description={item.description}
          />
        );
      })}
    </div>
  );
};
export default ToDoViewer;
