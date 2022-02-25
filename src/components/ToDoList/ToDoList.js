import React from "react";
import "./ToDoList.css";
import ToDoListItem from "../ToDoListItem/ToDoListItem";
import NewToDoForm from "../NewToDoForm/NewToDoForm";

const ToDoList = ({ todos = [{ text: "Hello" }] }) => {
  return (
    <div className="list-wrapper">
      <NewToDoForm />
      {todos.map((todo) => (
        <ToDoListItem todo={todo} />
      ))}
    </div>
  );
};

export default ToDoList;
