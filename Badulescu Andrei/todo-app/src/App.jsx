import "./App.css";
import React, { useState } from "react";
import Card from "./components/card/Card";
import ToDoViewer from "./components/toDoViewer/ToDoViewer";
import Button from "./components/button/Button";
import Modal from "./components/modal/Modal";
import CreateToDoForm from "./components/forms/CreateToDoForm";

const data = [
  {
    id: "1",
    title: "Todo 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At id illo repellendus non maiores in pariatur aliquam iure fugit amet!",
    completed: false,
  },
  {
    id: "2",
    title: "Todo 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit!",
    completed: false,
  },
  {
    id: "3",
    title: "Todo 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit!",
    completed: true,
  },
];

const App = () => {
  const [toDoList, setToDoList] = useState(data);
  const [isOpen, setIsOpen] = useState(false);

  const OnNewToDoAdd = (newToDo) => {
    console.log("todo from the app.js", newToDo);

    setToDoList((prevState) => [
      ...prevState,
      {
        ...newToDo,
        id: prevState.length + 1,
      },
    ]);
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="App">
      <div className="app-container">
        <Card>
          <ToDoViewer onCreateClick={openModal} toDoList={toDoList} />
        </Card>
      </div>
      <Modal onClose={closeModal} isOpen={isOpen}>
        <Card>
          <h2>Create Todo</h2>
          <CreateToDoForm addNewToDo={OnNewToDoAdd} />
        </Card>
      </Modal>
    </div>
  );
};

export default App;
