import "./styles.css";

export default function App() {
  const [error, result] = useApi("localhost:3000", { method: "GET" });
  const handleClick = () => {};

  return (
    <div className="App">
      <button onClick={handleClick}>call</button>
    </div>
  );
}
