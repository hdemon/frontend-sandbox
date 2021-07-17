import "./styles.css";

export default function App() {
  const handleClick = () => {
    const fetchData = async () => {
      try {
        const result = await fetch("localhost:3000");
      } catch (error) {
        throw new Error("aaa");
      }
    };
    fetchData();
  };

  return (
    <div className="App">
      <button onClick={handleClick}>call</button>
    </div>
  );
}
