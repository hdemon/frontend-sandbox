import { useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const [text, setText] = useState<string>("");
  const fileInput = useRef<HTMLInputElement>(null);
  // const [file, setFile] = useState<File | null>(null);

  const handleTextChange = (e: React.FormEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("text", text);
    if (fileInput.current && fileInput.current.files) {
      Array.from(fileInput.current.files).forEach((file: File) => {
        formData.append("file", file);
      });
    }
    const res = await fetch("http://localhost:3001", {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const t = await res.json();
    console.log(t);
  };

  return (
    <div className="App">
      <form method="POST" onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleTextChange} />
        <input type="file" ref={fileInput} />
        <input type="submit" />
      </form>
    </div>
  );
}
