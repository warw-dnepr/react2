


import { useState } from 'react';


export default function Smile(props){
   const [count, setCount] = useState(0);
   function handleClick() {
      setCount(count + 1);
      props.setWinner(props.el.id)
    }
  

   return (
<>
      <div key={props.el.id} id={props.el.id} onClick={()=>handleClick()}> 
      <p>{props.el.name}</p>
      <p className='p'>{count}</p>
  </div>
  </>
   )
}

