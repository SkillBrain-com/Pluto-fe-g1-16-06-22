import React, { useState } from "react";
import Card from "./components/card/Card";
import Input from "./components/input/Input";
import TodoItem from "./components/todo-item/TodoItem";
import TextArea from "./components/input/TextArea";
import Button from "./components/button/Button";
import Modal from "./components/modal/Modal";
import "./App.css";

const TODOS_MOCK = [
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
  {
    id: "4",
    title: "Todo 4",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit!",
    completed: true,
  },
];

function App() {
  const [taskTitle, setTitle] = useState("");
  const [taskDescription, setDescription] = useState("");
  const [taskList, setTaskList] = useState(TODOS_MOCK);

  const resetForm = () => {
    setTitle("");
    setDescription("");
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const addNewAssignment = (newAssignment) => {
    setTaskList((prevState) => [...prevState, newAssignment]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newAssignment = {
      id: Math.random(),
      title: taskTitle,
      description: taskDescription,
      completed: true,
    };

    addNewAssignment(newAssignment);
    resetForm();
  };

  return (
    <div className="App">
      <div className="app-container">
        {/* 
            This is your Create Card component.
          */}

        <Card>
          <h2>Create Todo</h2>
          <form addnewassignment={addNewAssignment} onSubmit={handleSubmit}>
            <Input
              onChange={handleTitleChange}
              placeholder="Title"
              type="text"
            />
            <TextArea
              onChange={handleDescriptionChange}
              placeholder="Description"
            />
            <Button type="submit">Create</Button>
          </form>
        </Card>

        {/* 
          My Todos
        */}

        <Card>
          <h1>My todos</h1>
          <Button onClick={() => console.log("Open Modal")}>Add +</Button>
          <div className="list-container">
            {taskList.map(() => {
              return (
                <TodoItem
                  id={taskList.id}
                  title={taskList.title}
                  description={taskList.description}
                  completed={taskList.completed}
                />
              );
            })}
          </div>

          <div className="separator"></div>

          <h2>Completed</h2>
          <div className="list-container">
            {TODOS_MOCK.map(() => (
              <TodoItem
                id={TODOS_MOCK.id}
                title={TODOS_MOCK.title}
                description={TODOS_MOCK.description}
                completed={TODOS_MOCK.completed}
              />
            ))}
          </div>
        </Card>
      </div>
      <Modal />
    </div>
  );
}

export default App;
