import "./DateContainer.css";

const DateContainer = ({ date }) => {
  return (
    <div className="due-date">
      <p>Due Date</p>
      <p>{date.toLocaleDateString()}</p>
    </div>
  );
};

export default DateContainer;
