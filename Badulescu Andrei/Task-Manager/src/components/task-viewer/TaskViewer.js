import TaskCard from "./components/task-card/TaskCard";
import App from "./App";

function TaskViewer(props) {
  return (
    (<App data={props.data} />),
    (
      <div className="app-container">
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
      </div>
    )
  );
}
export default TaskViewer;
