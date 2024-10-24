import React, { useEffect, useState } from "react";
import home from "./home.module.css";
import AddTask from "../AddTask/AddTask";
import TodoList from "../TodoList/TodoList";
import { Task } from "../../components/interface";

const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editingTask, setEditingTask] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentDate, setCurrentDate] = useState<string>("");
  const [currentMonth, setCurrentMonth] = useState<string>("");
  const [sortFilter, setSortFilter] = useState<string>("all");

  useEffect(() => {
    // Check localStorage for saved date and month
    const savedDate = localStorage.getItem("currentDate");
    const savedMonth = localStorage.getItem("currentMonth");

    if (savedDate && savedMonth) {
      // If available, use saved date and month
      setCurrentDate(savedDate);
      setCurrentMonth(savedMonth);
    } else {
      // If not, calculate the current date and month
      const date = new Date();
      const monthNames = [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC",
      ];

      const day = date.getDate().toString();
      const month = monthNames[date.getMonth()];

      // Update state with current date and month
      setCurrentDate(day);
      setCurrentMonth(month);

      // Save the date and month to localStorage
      localStorage.setItem("currentDate", day);
      localStorage.setItem("currentMonth", month);
    }
    // Empty dependency array ensures this runs only once on mount
  }, []);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task: Task) => {
    if (editingIndex !== null) {
      // Update existing task
      const updatedTasks = tasks.map((t, index) =>
        index === editingIndex ? task : t
      );
      setTasks(updatedTasks);
      setEditingIndex(null);
    } else {
      // Add new task at the top
      setTasks((prevTasks) => [task, ...prevTasks]);
    }
    // Clear input after adding/updating
    setEditingTask("");
  };

  const toggleComplete = (id: string) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const deleteTask = (id: string) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const startEditing = (id: string) => {
    const index = tasks.findIndex((task) => task.id === id);
    setEditingIndex(index);
    setEditingTask(tasks[index].title);
  };

  const clearSearchQuery = () => {
    setSearchQuery("");
  };

  // Filter tasks based on search query and sort filter
  const filteredTasks = tasks
    .filter((task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((task) => {
      if (sortFilter === "completed") return task.completed;
      if (sortFilter === "uncompleted") return !task.completed;
      // For "all" option
      return true;
    });

  return (
    <main className={home.container}>
      <div className={home.todoList}>
        <section className={home.header}>
          <div className={home.date}>
            <h2>{currentMonth}</h2>
            <h2>{currentDate}</h2>
          </div>

          <div className={home.salutation}>
            <h2 className={home.greeting}>Good Afternoon, Champ!</h2>
            <h2 className={home.checking}>What's your plan for today?</h2>
          </div>
        </section>

        <section className={home.listSection}>
          <AddTask
            addTask={addTask}
            editingTask={editingTask}
            setEditingTask={setEditingTask}
            setSearchQuery={setSearchQuery}
            clearSearchQuery={clearSearchQuery}
            setSortFilter={setSortFilter}
          />

          <TodoList
            tasks={filteredTasks}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
            startEditing={startEditing}
          />
        </section>
      </div>
    </main>
  );
};

export default Home;
