import { useState } from 'react';
import MyButton2 from './MyButton2';
import './Box.css';
import Winner from './Winner';
import DrawLines from './DrawLines';






export default function Count2() {
const [turn, setTurn] = useState(true);
const [win, setWin] = useState(false);
const [squares, setSquares] = useState(Array(9).fill('\u0020'));
const [lines, setLines] = useState(Array(8).fill(false));
function ResetMethod({setTurn,setWin,setSquares,setLines}){
    setTurn(true);
    setWin(false);
    setSquares(Array(9).fill('\u0020'));
    setLines(Array(8).fill(false));
}



  return (

    <div className='grid22'>
       
       <div className='box'>
      <DrawLines win={win} squares={squares} lines={lines} setLines={setLines} />

     
      <div className='grid2'>
        
        <MyButton2 turn={turn} setTurn={setTurn} ind={0} squares={squares} setSquares={setSquares} win = {win} setWin = {setWin} />
        <MyButton2 turn={turn} setTurn={setTurn} ind={1} squares={squares} setSquares={setSquares} win = {win}setWin = {setWin}/>
        <MyButton2 turn={turn} setTurn={setTurn} ind={2} squares={squares} setSquares={setSquares} win = {win}setWin = {setWin}/>
      </div>

      <div className='grid2'>
      <MyButton2 turn={turn} setTurn={setTurn} ind={3} squares={squares} setSquares={setSquares} win = {win}setWin = {setWin}/>
        <MyButton2 turn={turn} setTurn={setTurn} ind={4} squares={squares} setSquares={setSquares} win = {win}setWin = {setWin}/>
        <MyButton2 turn={turn} setTurn={setTurn} ind={5} squares={squares} setSquares={setSquares} win = {win} setWin = {setWin}/>
      </div>

      <div className='grid2'>
      <MyButton2 turn={turn} setTurn={setTurn} ind={6} squares={squares} setSquares={setSquares} win = {win}setWin = {setWin}/>
        <MyButton2 turn={turn} setTurn={setTurn} ind={7} squares={squares} setSquares={setSquares}win = {win} setWin = {setWin}/>
        <MyButton2 turn={turn} setTurn={setTurn} ind={8} squares={squares} setSquares={setSquares} win = {win}setWin = {setWin}/>
      </div>
      </div>
      <Winner turn = {turn} setTurn={setTurn} win={win} squares={squares} setWin={setWin} setLines={setLines} lines={lines}/>
      <button className="Reset" onClick={()=>ResetMethod({setTurn,setWin,setSquares,setLines}) }>RESET</button>
    </div>
  );
}
