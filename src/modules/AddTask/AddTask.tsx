import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { AddTaskProps } from "../../components/interface";
import add from "./AddTask.module.css";
import { v4 as uuidv4 } from "uuid";

const AddTask: React.FC<AddTaskProps> = ({
  addTask,
  editingTask,
  setEditingTask,
  setSearchQuery,
  clearSearchQuery,
  setSortFilter,
}) => {
  const [taskInput, setTaskInput] = useState<string>(editingTask);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (taskInput.trim()) {
      addTask({ id: uuidv4(), title: taskInput, completed: false });
      setTaskInput("");
      setEditingTask("");
      clearSearchQuery();
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTaskInput(value);
    // This filters the tasks as the user types
    setSearchQuery(value);
  };

  useEffect(() => {
    // If in editing mode, pre-fill the input
    setTaskInput(editingTask);
  }, [editingTask]);

  // Handle sorting tasks
  const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortFilter(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className={add.form}>
      <input
        type="text"
        value={taskInput}
        onChange={handleChange}
        placeholder="Add a new task or search tasks..."
      />

      <div className={add.actionBtns}>
        <button type="submit">
          {editingTask ? "Update task" : "Add Task"}
        </button>

        {/* Select dropdown for sorting */}
        <select onChange={handleSortChange} className={add.select}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default AddTask;
