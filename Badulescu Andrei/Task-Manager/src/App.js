import "./App.css";
import TaskViewer from "./components/task-viewer/TaskViewer";

const App = () => {
  const data = [
    {
      id: "T-1",
      status: "Todo",
      name: "Create a Design System for Enum Workspace.",
      dueDate: new Date(2022, 5, 23),
    },
    {
      id: "T-2",
      status: "In Progress",
      name: "12 Create a Design System for Enum Workspace.",
      dueDate: new Date(2022, 7, 25),
    },
    {
      id: "T-3",
      status: "Done",
      name: "13 Create a Design System for Enum Workspace.",
      dueDate: new Date(2022, 6, 12),
    },
    {
      id: "T-4",
      status: "Done",
      name: "13 Create a Design System for Enum Workspace.",
      dueDate: new Date(2022, 6, 12),
    },
    {
      id: "T-5",
      status: "In Progress",
      name: "12 Create a Design System for Enum Workspace.",
      dueDate: new Date(2022, 7, 25),
    },
    {
      id: "T-6",
      status: "Done",
      name: "13 Create a Design System for Enum Workspace.",
      dueDate: new Date(2022, 6, 12),
    },
    {
      id: "T-7",
      status: "Done",
      name: "13 Create a Design System for Enum Workspace.",
      dueDate: new Date(2022, 6, 12),
    },
  ];
  return (
    <div className="app-container">
      <div className="app-content">
        <h3>Task Manager</h3>
        <TaskViewer data={data} />
      </div>
    </div>
  );
};

export default App;
