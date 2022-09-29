import "./App.css";
import "./components/task-viewer/TaskViewer";

function App(props) {
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
  ];
  return <TaskViewer data={props.data} />;
}

export default App;
