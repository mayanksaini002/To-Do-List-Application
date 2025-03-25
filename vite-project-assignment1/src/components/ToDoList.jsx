import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ tasks, toggleTaskCompletion, deleteTask, editTask }) => {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <ToDoItem
          key={task.id}
          task={task}
          toggleTaskCompletion={toggleTaskCompletion}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
