import Board from "./components/Board/Board";
import Header from "./components/Header/Header";
import {useState} from "react";

export type Difficulty = "easy" | "medium" | "hard" | null;

function App() {
  
  const [difficulty, setDifficulty] = useState<Difficulty>(null);
  return (
    <div className="bg-slate-900 text-gray-50 w-fit m-auto">
      <Header setDifficulty={setDifficulty} difficulty={difficulty}/>
      {difficulty && <Board setDifficulty={setDifficulty} difficulty={difficulty}/>}
    </div>
  );
}

export default App;
