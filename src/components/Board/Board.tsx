import { Difficulty } from "../../App";
import createBoard, {cellData } from "../../util/createBoard";
import {useEffect, useState, useRef, SetStateAction} from 'react'
import Cell from "../Cell/Cell";
import refresh from "../../assets/refresh.png"
import boardRevealAll from "../../util/boardRevealAll";
import emptyCellReveal from "../../util/emptyCellReveal";

function Board({difficulty, setDifficulty}: {difficulty : Difficulty, setDifficulty : React.Dispatch<SetStateAction<Difficulty>>}) {
    const [boardArray, setBoardArray ] = useState<Array<Array<cellData>>>()
    const [flagCount, setFlagCount] = useState<number>(0)
    const [gameover, setGameover] = useState<"running" | "win" | "lose">("running")
    // const [winStatus, setWinStatus] = useState<boolean>(false)
    // const [loseStatus, setLooseStatus]  = useState<boolean>(false)
    const bombCount = useRef<number>(0)
    const gridSize = useRef<string>()
    const rows = useRef<number>(0)
    const cols = useRef<number>(0)

    function flagCell(e: React.MouseEvent, x:number, y:number){
        e.preventDefault()
        const boardCopy = JSON.parse(JSON.stringify(boardArray))
        
        if(boardCopy[x][y].flagged === true){
            
            if(boardCopy[x][y].value === "💣"){
                bombCount.current+=1;
            }
            
            boardCopy[x][y].flagged = false
            setFlagCount(prev => prev + 1)
        }else if(flagCount > 0){
            if(boardCopy[x][y].value === "💣"){
                bombCount.current-=1;
            }
            boardCopy[x][y].flagged = true
            setFlagCount(prev => prev - 1)
        }
        if(bombCount.current === 0){
            setGameover("win")
        }
        console.log(bombCount)
        setBoardArray(boardCopy)   
    }

    function clickCell(e:React.MouseEvent, x:number, y:number){
        e.preventDefault()
        const boardCopy = JSON.parse(JSON.stringify(boardArray))

        if(boardCopy[x][y].value === "💣"){
            boardRevealAll(boardCopy)
            setGameover("lose")
            console.log("reavealed all")
        }else{
            if(boardCopy[x][y].value > 0){
                boardCopy[x][y].revealed = true
            }else{
                emptyCellReveal(boardCopy, x, y, rows.current, cols.current)
            }
        }
        
        setBoardArray(boardCopy)
    }


    useEffect(()=>{
        // easy - 9 x 9 + 10 mines
        //medium - 13 x 16 + 40 mines
        //expert - 16 x 30 + 99 mines
        if(difficulty === 'easy'){
            gridSize.current = 'grid-cols-9 grid-rows-9'
            bombCount.current = 10
            rows.current = 9
            cols.current = 9
            
        }
        if(difficulty === 'medium'){
            gridSize.current = 'grid-cols-16 grid-rows-16'
            bombCount.current = 40
            rows.current = 16
            cols.current = 16
        }
        if(difficulty === 'hard'){
            gridSize.current = 'grid-cols-24 grid-rows-24'
            bombCount.current = 99
            rows.current = 24
            cols.current = 24
            
        }
        const boardData = createBoard(rows.current, cols.current, bombCount.current)
        setFlagCount(bombCount.current)
        setBoardArray(boardData)


    },[setBoardArray, difficulty])
    return ( 
        <div className="text-gray-50 flex flex-col items-center">
            <div className="text-2xl font-bold text-center p-7">
                {gameover === "win" ? (
                <>  
                    <span className="inline-block text-green-700 text-3xl ">You Win ! 🎉</span>
                    <button onClick={() => setDifficulty(null)} className=" ml-2 p-2 bg-slate-500 rounded-full hover:bg-slate-600"> <img src={refresh} alt="refresh"></img></button>
                </>
                ) : gameover === "lose" ? 
                <div className="flex items-center justify-center"><span className="text-rose-700 text-3xl">Game Over ! 😢</span>
                    <button onClick={() => setDifficulty(null)} className=" ml-2 p-2 bg-slate-500 rounded-full hover:bg-slate-600"> <img src={refresh} alt="refresh"></img></button>
                </div> : ""}
                
            </div>
            <div className="p-5 text-xl font-semibold text-center">
                <span>🚩: {flagCount} </span>
                
            </div>
            <div className={`m-4 grid gap-1 text-black ${gridSize.current}`}>
                {boardArray?.map(item => item.map((item => <Cell value={item.value} x={item.x} y={item.y} revealed= {item.revealed} flagged={item.flagged} flagCell={flagCell}  clickCell={clickCell} />)))}
            </div>
        </div>
     );
}

export default Board;