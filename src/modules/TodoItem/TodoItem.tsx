import React from "react";
import item from "./TodoItem.module.css";
import { TodoItemProps } from "../../components/interface";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";

const TodoItem: React.FC<TodoItemProps> = ({
  task,
  toggleComplete,
  deleteTask,
  startEditing,
}) => {
  const isCompleted = task.completed;

  return (
    <li className={item.list} style={{ opacity: isCompleted ? 0.6 : "none" }}>
      <span>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={toggleComplete}
          disabled={isCompleted}
        />
        <span className={item.listText}>{task.title}</span>
      </span>
      <span className={item.iconContainer}>
        <BiEditAlt
           onClick={!isCompleted ? startEditing : undefined}
          className={item.edit}
          style={{ color: "#4379F2", fontSize: "20px", cursor: isCompleted ? "not-allowed" : "pointer" }}
        />

        <RiDeleteBin5Line
          onClick={deleteTask}
          className={item.delete}
          style={{ color: "red", fontSize: "20px" }}
        />
      </span>
    </li>
  );
};

export default TodoItem;
