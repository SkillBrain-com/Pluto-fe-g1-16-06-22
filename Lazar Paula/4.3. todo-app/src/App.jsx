import "./App.css";
import React, { useState } from "react";
import Card from "./components/card/Card";
import TodoItem from "./components/todo-item/TodoItem";
import TodoForm from "./components/todo-form/TodoForm";
import Button from "./components/button/Button";
import Modal from "./components/modal/Modal";

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
  const [todoList, setTodoList] = useState(TODOS_MOCK);
  const [isOpen, setIsOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescription, setTodoDescription ] = useState("");


const newTask = {
  id: "1",
  title: todoTitle,
  description: todoDescription,
}

const removeItem = (removableId) => {
    console.log("id to b removed as in App: ", removableId);
     const shorterList = todoList
    .filter((item) => item.id !== removableId);
    console.log(shorterList);
    setTodoList(shorterList);
  }

const editItem = (editableId) => {
    console.log(editableId);
    setIsEditMode(true);

    setIsOpen(true);


   const selectItem = todoList
   .filter((item) => item.id === editableId);
   

   removeItem(editableId);
   
   setTodoTitle(selectItem[0].title);
   setTodoDescription(selectItem[0].description);
}

  const OnNewToDoAdd = (newTodo) => {
    console.log("todo from the app.js", newTodo);


    setTodoList((prevState) => [
      ...prevState,
      {
        ...newTodo,
        ...newTask,
        id: `${prevState.length + 1}`
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
        <h1>My todos</h1>
          <Button onClick={openModal}>Add +</Button>
          <div className="list-container">
        { 
              todoList
              .filter((item) => item.completed === false )
              .map((item) => (
                <TodoItem 
                key={item.id} 
                id={item.id} 
                title={item.title} 
                description={item.description} 
                completed={item.completed}
                isRemoved={removeItem}
                isEdited={editItem}
                />
              ))
              
            }

          </div>

          <div className="separator"></div>

          <h2>Completed</h2>
          <div className="list-container">
          {
              todoList
              .filter((item) => item.completed === true )
              .map((item) => (
                <TodoItem 
                key={item.id} 
                id={item.id} 
                title={item.title} 
                description={item.description} 
                completed={item.completed} 
                isRemoved={removeItem}
                isEdited={editItem}
                />
              ))
            }
          </div>
        </Card>
      </div>
      <Modal onClose={closeModal} isOpen={isOpen}>
        <Card>
          <h2>Create Todo</h2>
          <TodoForm addNewToDo={OnNewToDoAdd} />
        </Card>
      </Modal>
    </div>
  );
};

export default App;