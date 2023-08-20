function Cell({value, x, y, revealed, flagged, flagCell, clickCell} : {value: number | string, x:number, y:number, revealed:boolean, flagged:boolean, flagCell:(e: React.MouseEvent, x:number, y:number) =>  void, clickCell:(e: React.MouseEvent, x:number, y:number) =>  void} ) {

    return ( 
        <div className={`hover:cursor-pointer flex items-center text-xl text-black font-medium justify-center rounded-md text-center align-middle ${revealed ? "bg-gray-50":"bg-slate-600"}`} onClick={(e) => clickCell(e, x, y)} onContextMenu={(e) => flagCell(e, x, y)}>
            {revealed ?(value === 0 ? "": value) : flagged ? "🚩":""}
        </div>
     );
}

export default Cell;