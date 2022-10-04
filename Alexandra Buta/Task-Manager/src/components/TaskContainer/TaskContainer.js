import TaskCard from "../task-card/TaskCard";
import "./TaskContainer.css";

const TaskContainer = () => {
  const data = [
    {
      id: "T-2",
      status: "Todo",
      name: "10 Create a Design System for Enum Workspace.",
      dueDate: new Date(2022, 5, 23),
    },

    {
      id: "T-3",
      status: "InProgress",
      name: "11 Create a Design System for Enum Workspace.",
      dueDate: new Date(2022, 7, 27),
    },

    {
      id: "T-4",
      status: "Complete",
      name: "12 Create a Design System for Enum Workspace.",
      dueDate: new Date(2022, 9, 22),
    },
  ];

  return (
    <div className="task-container">
      <TaskCard
        id={data[0].id}
        status={data[0].status}
        name={data[0].name}
        dueDate={data[0].dueDate}
      />

      <TaskCard
        id={data[1].id}
        status={data[1].status}
        name={data[1].name}
        dueDate={data[1].dueDate}
      />

      <TaskCard
        id={data[2].id}
        status={data[2].status}
        name={data[2].name}
        dueDate={data[2].dueDate}
      />

      <TaskCard
        id={data[2].id}
        status={data[0].status}
        name={data[0].name}
        dueDate={data[0].dueDate}
      />

    
    </div>
  );
};

export default TaskContainer;
