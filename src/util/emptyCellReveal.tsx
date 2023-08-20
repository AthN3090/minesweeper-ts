import { cellData } from "./createBoard";

function emptyCellReveal(arr: Array<Array<cellData>>, x:number, y:number, rows:number, cols:number){
    
    arr[x][y].revealed = true
    if(Number(arr[x][y].value) > 0){
        return
    }
    //top
    if(x > 0 && arr[x-1][y].revealed === false){
        emptyCellReveal(arr, x-1, y, rows, cols)
    }
    //top-left
    if(x > 0 && y > 0 && arr[x-1][y-1].revealed === false){
        emptyCellReveal(arr, x-1, y-1, rows, cols)
    }
    //top-right
    if(x > 0 && y < cols - 1 &&  arr[x-1][y+1].revealed === false){
        emptyCellReveal(arr, x-1, y+1, rows, cols)
    }
    //left
    if(y > 0 && arr[x][y-1].revealed === false){
        emptyCellReveal(arr, x, y-1, rows, cols)
    }
    //right
    if(y < cols - 1 && arr[x][y + 1].revealed === false){
        emptyCellReveal(arr, x, y+1, rows, cols)
    }

    //bottom-left
    if(x < rows-1 && y > 0 && arr[x+1][y-1].revealed === false){
        emptyCellReveal(arr, x+1, y-1, rows, cols)
    }
    //bottom-right
    if(x < rows - 1 && y < cols - 1 && arr[x+1][y+1].revealed === false){
        emptyCellReveal(arr, x+1, y+1, rows, cols)
    }
    //bottom
    if(x < rows - 1 && arr[x+1][y].revealed === false){
        emptyCellReveal(arr, x+1, y, rows, cols)
    }

    

}

export default emptyCellReveal;