import "./TaskViewer.css";
import TaskCard from "../task-card/TaskCard";

function TaskViewer(props) {
  return (
    <div className="task-viewer">
      <h1 className="header">Task Manager</h1>
      <div className="tasks-container">
        <TaskCard
          id={props.data.id}
          status={props.data.status}
          name={props.data.name}
          dueDate={props.data.dueDate}
        />
        <TaskCard
          id={props.data.id}
          status={props.data.status}
          name={props.data.name}
          dueDate={props.data.dueDate}
        />
        <TaskCard
          id={props.data.id}
          status={props.data.status}
          name={props.data.name}
          dueDate={props.data.dueDate}
        />
        <TaskCard
          id={props.data.id}
          status={props.data.status}
          name={props.data.name}
          dueDate={props.data.dueDate}
        />
        <TaskCard
          id={props.data.id}
          status={props.data.status}
          name={props.data.name}
          dueDate={props.data.dueDate}
        />
        <TaskCard
          id={props.data.id}
          status={props.data.status}
          name={props.data.name}
          dueDate={props.data.dueDate}
        />
        <TaskCard
          id={props.data.id}
          status={props.data.status}
          name={props.data.name}
          dueDate={props.data.dueDate}
        />
      </div>
    </div>
  );
}

export default TaskViewer;
