import "./Badge.css";

const Badge = ({ status }) => {
  return (
    <div className="badge">
      <p>{status}</p>
    </div>
  );
};

export default Badge;
