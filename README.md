## TODO LIST APP

- This is a simple Todo List application built with React. The application allows users to add, edit, delete, and mark tasks as completed. It also includes search functionality, task sorting, and date display. The state is stored in localStorage.

## Tech Stack

- React (v18.3.1): Frontend framework.
- TypeScript: Adds static type-checking to JavaScript, ensuring more predictable and error-free code.
- Vite: Build tool that provides fast development and optimized production builds.
- UUID: Used to generate unique IDs for tasks.
- React Icons: Used to enhance project UI

## Features

- ADD TASKS:

* Users can add tasks using the input form.

- EDIT TASKS:

* Tasks can be edited by clicking the 'Edit' button next to a task.

- DELETE TASKS:

* Tasks can be removed by clicking the 'Delete' button.

- MARK TASKS AS COMPLETED:

* Tasks can be marked as completed by checking the checkbox.

- SEARCH TASKS:

* Users can search tasks by typing in the input field.

- SORT TASKS:

* Users can sort tasks by 'All', 'Completed', or 'Uncompleted' using a dropdown.

- PERSISTENT DATA:
  -Tasks and current date/month are saved to localStorage for persistence.

- RESPONSIVE DESIGN:

* The UI is styled and responsive for better usability.

## Component Overview

- Home.tsx

* The main component that handles tasks. It manages the following states:

* tasks: Stores the list of tasks.
* editingTasks: Tracks the task being edited.
* searchQuery: Stores the search input value
* currentDate and CurrentMonth: Displays te current date and month.
* sortFilter: Controls the sorting of tasks by "All", "Completed", or "Uncompleted".

- Add.tsx

* This component allows the user to add, search or edit tasks. It includes:

* An input field for adding or searching tasks.
* A button to add or update tasks.
* A dropdown to sort tasks by completion status.

- TodoList.tsx

* This component renders the list of tasks. It takes the filtered tasks from the Home component and passes each task to the TodoItem component for rendering.

- TodoItem.tsx
  -This component renders individual tasks with options to:

* Mark the task as complete (checkbox).
* Edit the task.
* Delete the task.

- index.ts
  -This file contains the TypeScript interfaces used throughout the app for type safety

- State Management

* The app uses useState for local state management and useEffect to sync the tasks and date information with localStorage. This ensures that the tasks and current date/month persist even after refreshing the page.

- Local Storage

* Tasks: The tasks are saved to localStorage when modified and loaded on component mount.
* Date and Month: The current date and month are also stored and retrieved from localStorage.

## How to run the project

- clone the repository using the command "git clone" followed by the repository link:
  https://github.com/Esimehro/todo-list-app.git

- Install dependencies using "npm install"

- Run the project using "npm ruun dev". The app will run on http://localhost:5173/
