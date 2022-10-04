import "./TaskViewer.css";
import TaskCard from "../task-card/TaskCard";

const TaskViewer = ({ data }) => {
  return (
    <div className="task-viewer-container">
      <div className="task-list-container">
        {data?.map((taskCardData) => {
          return (
            <TaskCard
              id={taskCardData.id}
              status={taskCardData.status}
              name={taskCardData.name}
              dueDate={taskCardData.dueDate}
            />
          );
        })}
      </div>
    </div>
  );
};
export default TaskViewer;
