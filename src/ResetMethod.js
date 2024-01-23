function ResetMethod({setTurn,setWin,setSquares,setLines}){
    setTurn(true);
    setWin(false);
    setSquares(Array(9).fill('\u0020'));
    setLines(Array(8).fill(false));
}