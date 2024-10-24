import React from "react";
import style from "./Todolist.module.css";
import TodoItem from "../TodoItem/TodoItem";
import { TodoListProps } from "../../components/interface";

const TodoList: React.FC<TodoListProps> = ({
  tasks,
  toggleComplete,
  deleteTask,
  startEditing,
}) => {
  return (
    <ul className={style.todoList}>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          toggleComplete={() => toggleComplete(task.id)}
          deleteTask={() => deleteTask(task.id)}
          startEditing={() => startEditing(task.id)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
