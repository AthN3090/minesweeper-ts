import { SetStateAction } from "react";
import { Difficulty } from "../../App";

function Header({difficulty, setDifficulty} : {difficulty: Difficulty, setDifficulty : React.Dispatch<SetStateAction<Difficulty>>}) {
    return (
        <header className="p-5">
            <div className="text-center text-6xl font-extrabold">
                Minesweeper
            </div>  
            {difficulty === null && 
                (<div className="text-center text-xl p-3 ">
                <div className="p-7 text-2xl font-semibold">Choose difficulty level</div>
                <div className="flex flex-col sm:flex-row gap-10 sm:items-center justify-center text-base">
                    <button onClick={() => setDifficulty('easy')} className="px-7 py-3 bg-slate-600 rounded-lg transition hover:bg-green-700 hover:transition">
                        Easy
                    </button>

                    <button onClick={() => setDifficulty('medium')} className="px-7 py-3 bg-slate-600 rounded-lg transition hover:bg-yellow-600 hover:transition">
                        Medium
                    </button>

                    <button onClick={() => setDifficulty('hard')} className="px-7 py-3 bg-slate-600 rounded-lg transition hover:bg-red-700  hover:transition">
                        Hard
                    </button>
                </div>
            </div>
            )
            }
            
        </header>);
}

export default Header;