export interface Task {
    id: string;
    title: string;
    completed: boolean;
}

export interface AddTaskProps {
    addTask: (task: Task) => void;
    // For editing mode
    editingTask: string;  
    // Function to set the editing task                
    setEditingTask: (task: string) => void; 
    // Function to set the search query
    setSearchQuery: (query: string) => void; 
    // Function to clear the search query
    clearSearchQuery: () => void;
    // To set the sort filter
    setSortFilter: (filter: string) => void;     
}

export interface TodoListProps {
    // Array of task objects
    tasks: Task[];
    // Toggle task completion
    toggleComplete: (id: string) => void;
    // Delete a task
    deleteTask: (id: string) => void;
    // Start editing a task
    startEditing: (id: string) => void;
}

export interface TodoItemProps{
    // Individual task object
    task: Task;
    // Toggle completion for this task
    toggleComplete: () => void;
     // Delete this task
    deleteTask: () => void;
    // Start editing this task
    startEditing: () => void;
    
}