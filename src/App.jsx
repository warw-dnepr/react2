



import { useState } from 'react';
import './App.css'
import Smile from './Smile';
// import Btn from './assets/btn';


let allSmile=[
  {
    id:1,
    name:<i className="fa-solid fa-poo"></i>,
    countSmile:0
  },
  {
    id:2,
    name:<i className="fa-solid fa-face-laugh-squint"></i>,
    countSmile:0
  },
  {
    id:3,
    name:<i className="fa-solid fa-face-grin-hearts"></i>,
    countSmile:0
  },
  {
    id:4,
    name:<i className="fa-solid fa-face-kiss-beam"></i>,
    countSmile:0
  },
  {
    id:5,
    name:<i className="fa-solid fa-face-grin-wide"></i>,
    countSmile:0
  },
]



export default function App() {

 const [winner,setWinner]=useState(null);

 function handleSetWinner(id){
allSmile.map((el)=> id===el.id && el.countSmile++)
allSmile.map((el)=> document.getElementById(`${el.id}`).classList.remove('bg'))
}

function resuslt(){
  let maxAnswer = Math.max(...allSmile.map(answer => answer.countSmile));
  allSmile.map((el)=> 
    maxAnswer===el.countSmile && document.getElementById(`${el.id}`).classList.add('bg') );
}
  const listItems = allSmile.map((el) =>
    <Smile key={el.id} el={el} setWinner={handleSetWinner}/>
    
  );  
  return (
    <>
    <div className='flex'>{listItems}
      <button onClick={resuslt}>Result</button>
    </div>
    </>
  );
}











