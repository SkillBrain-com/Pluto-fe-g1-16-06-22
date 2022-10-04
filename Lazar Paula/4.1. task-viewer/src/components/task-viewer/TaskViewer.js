import TaskCard from "../task-card/TaskCard";
import "./TaskViewer.css";

function TaskViewer(props) {
  return (
    <div className="task-viewer">
        <h1 className="task-viewer-title">Task Manager</h1>
        <div className="task-container">
            <TaskCard
                id={props.data[0].id}
                status={props.data[0].status}
                name={props.data[0].name}
                dueDate={props.data[0].dueDate}
           />
           <TaskCard
                id={props.data[1].id}
                status={props.data[1].status}
                name={props.data[1].name}
                dueDate={props.data[1].dueDate}
            />

            <TaskCard
                id={props.data[2].id}
                status={props.data[2].status}
                name={props.data[2].name}
                dueDate={props.data[2].dueDate}
            />
        </div>
    </div>
    );
}
export default TaskViewer;