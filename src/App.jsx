import TasksList from "./Components/TasksList";
import TaskForm from "./Components/TaskForm";

function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <TaskForm />
        <TasksList />
      </div>
    </main>
  );
}

export default App;
