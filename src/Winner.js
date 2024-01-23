

export default function Winner({turn,setTurn,win,setWin,squares,setLines,lines}){
   
    const winlist = [[1,2,3],[1,4,7],[4,5,6],[7,8,9],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
    for(let i=0;i<winlist.length;i++)
    {
      let [a,b,c] = winlist[i];
      if(squares[a-1] !== '\u0020' && squares[a-1] === squares[b-1] && squares[b-1]===squares[c-1]  )
      { 
            setWin(true);
            console.log("Won");
            if(win===false)
            {
             const nextLines = lines.slice();
             nextLines[i] = true;
             console.log(nextLines);
             setLines(nextLines);
            }
            return(
                <>
                
                <h3> Winner is { turn===false ?"X":"O"}</h3>
                </>
                
            );
        }
    }
    if(win===false)
    {
    let xx = true;
    for(let j=0;j<squares.length;j++)
    {
        if(squares[j]=== '\u0020')
        {
            xx=false;
            break;
        }
    }
    if(xx===false)
    return(
        <h3> Game running</h3>
    );
    else
    return(
        <h3>GAME DRAW</h3>
    );
    }
}