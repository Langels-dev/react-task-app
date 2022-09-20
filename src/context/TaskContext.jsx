import { createContext, useState, useEffect } from "react";
import { tareas } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, settasks] = useState([]);

  const CreateTask = (task) => {
    settasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  };

  useEffect(() => {
    settasks(tareas);
  }, []);

  const deleteTask = (taskID) => {
    settasks(tasks.filter((task) => task.id !== taskID));
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        CreateTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
