import "./TaskCard.css";
import Badge from "../badge/Badge";
import DateContainer from "../date-container/DateContainer";

const TaskCard = ({ id, status, name, dueDate }) => {
  return (
    <div className="card-wrapper">
      <div className="card-header">
        <p className="task-id">{id}</p>
        <Badge status={status} />
      </div>
      <div className="card-content">
        <p>{name}</p>
      </div>
      <div className="card-footer">
        <DateContainer date={dueDate} />
      </div>
    </div>
  );
};

export default TaskCard;
