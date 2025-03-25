import React, { useState } from "react";

const ToDoItem = ({ task, toggleTaskCompletion, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const saveEdit = () => {
    editTask(task.id, editedText);
    setIsEditing(false);
  };

  return (
    <li className={`todo-item ${task.completed ? "completed" : ""}`}>
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
      ) : (
        <span onClick={() => toggleTaskCompletion(task.id)}>{task.text}</span>
      )}
      {isEditing ? (
        <button onClick={saveEdit}>Save</button>
      ) : (
        <>
        <button className="tick" onClick={() => toggleTaskCompletion(task.id)}>✔</button>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </>
      )}
    </li>
  );
};

export default ToDoItem;
