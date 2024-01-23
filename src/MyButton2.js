

export default function MyButton2({turn, setTurn,ind,squares, setSquares,win,setWin}) {

   
    

    function handleClick2(ind) {
     
      if(squares[ind]==='\u0020' && win===false)
      {
        const nextSquares = squares.slice();
        turn===true? nextSquares[ind] = "X": nextSquares[ind] = "O";
        setSquares(nextSquares);
        console.log(nextSquares);
        setTurn(!turn);
      }
      
    }
    


    return (
      <>
      <button className = 'grow' onClick={() => handleClick2(ind)}>
        {squares[ind]}
      </button>
      
      </>
    );
  }