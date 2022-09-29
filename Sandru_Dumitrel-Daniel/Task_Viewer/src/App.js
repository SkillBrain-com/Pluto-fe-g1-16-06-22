import "./App.css";
import TaskViewer from "./components/task-viewer/TaskViewer";

function App() {
  const data = {
    id: "T-1",
    status: "Todo",
    name: "Create a Design System for Enum Workspace.",
    dueDate: new Date(2021, 0, 24),
  };
  return <TaskViewer data={data} />;
}

export default App;
