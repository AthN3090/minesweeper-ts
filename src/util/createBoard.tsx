export interface cellData{
    value:number | string,
    x: number,
    y:number,
    revealed: boolean,
    flagged:boolean
}
function createBoard(row : number, col: number, bombs: number){

    //initialising the board array
    
    const boardArray: Array<Array<cellData>> = []
    for(let i = 0; i < row; i++){
        boardArray[i] = []
        for(let j = 0; j < col; j++){
            boardArray[i].push({
                value: 0,
                x: i,
                y: j,
                revealed:false,
                flagged:false

            })
        }
    }
     

    //randomly placing bombs
    let bombsCount = 0
    while(bombsCount < bombs){
        const x = random(0, row)
        const y = random(0, col)
        if(boardArray[x][y].value !== "💣"){
            boardArray[x][y].value = "💣"
            bombsCount+=1
        }
    }
    
    for(let i = 0; i < row;i++){
        for(let j = 0;j < col;j++){
            if(boardArray[i][j].value === '💣'){
                continue;
            }
            //top
            if(i > 0 && boardArray[i-1][j].value === '💣'){
                boardArray[i][j].value = Number(boardArray[i][j].value) + 1;
            }
            //top-left
            if(i > 0 && j > 0 && boardArray[i-1][j-1].value === '💣'){
                boardArray[i][j].value = Number(boardArray[i][j].value) + 1;
            }
            //top-right
            if(i > 0 && j < col-1 && boardArray[i-1][j+1].value === '💣'){
                boardArray[i][j].value = Number(boardArray[i][j].value) + 1;
            }
            //left
            if(j > 0 && boardArray[i][j-1].value === '💣'){
                boardArray[i][j].value = Number(boardArray[i][j].value) + 1;
            }
            //right
            if(j < col-1 && boardArray[i][j+1].value === '💣'){
                boardArray[i][j].value = Number(boardArray[i][j].value) + 1;
            }

            //bottom-left
            if(i < row-1 && j > 0 && boardArray[i+1][j-1].value === '💣'){
                boardArray[i][j].value = Number(boardArray[i][j].value) + 1;
            }
            //bottom-right
            if(i < row-1 && j < col-1 && boardArray[i+1][j+1].value === '💣'){
                boardArray[i][j].value = Number(boardArray[i][j].value) + 1;
            }
            //bottom
            if(i < row - 1 && boardArray[i+1][j].value === '💣'){
                boardArray[i][j].value = Number(boardArray[i][j].value) + 1;
            }
        }
    }

    return boardArray
}



function random(min: number, max: number){
    return Math.floor(Math.random() * (max - min) + min)
}

export default createBoard;