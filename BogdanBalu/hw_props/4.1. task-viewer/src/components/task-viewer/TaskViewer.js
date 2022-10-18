import "./TaskViewer.css";
import TaskCard from "../task-card/TaskCard";

const TaskViewer = (props) => {
    return (
        <div className="task-viewer">
            <h1 className="task-viewer-title">Task Manager</h1>
            <div className="task-container">
                <TaskCard
                    id={props.details[0].id}
                    status={props.details[0].status}
                    name={props.details[0].name}
                    dueDate={props.details[0].dueDate}
               />
               <TaskCard
                    id={props.details[1].id}
                    status={props.details[1].status}
                    name={props.details[1].name}
                    dueDate={props.details[1].dueDate}
              />
            </div>
        </div>
    );
}

export default TaskViewer;