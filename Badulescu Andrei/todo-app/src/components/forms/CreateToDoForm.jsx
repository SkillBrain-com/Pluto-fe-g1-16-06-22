import React, { useState } from "react";
import TextArea from "../input/TextArea";
import Input from "../input/Input";
import Button from "../button/Button";

const CreateToDoForm = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newToDo = {
      title: title,
      description: description,
      completed: false,
    };

    props.addNewToDo(newToDo);
    console.log("newToDo=", newToDo);
    resetForm();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          value={title}
          name="title"
          onChange={handleTitleChange}
          placeholder="Title"
          type="text"
        />
        <TextArea
          value={description}
          name="description"
          onChange={handleDescriptionChange}
          placeholder="Description"
        />
        <Button type="submit">Create</Button>
      </form>
    </div>
  );
};

export default CreateToDoForm;
