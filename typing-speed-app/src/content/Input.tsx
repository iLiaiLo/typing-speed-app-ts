

import { useEffect, useRef } from "react";

interface InputProps {
  start:boolean
  text:string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}


const Input:React.FC<InputProps> = ({start,text,setText}) => {

  const Inputref:React.RefObject<HTMLInputElement>=useRef(null)
  useEffect(()=>{
    if(start){
      Inputref.current?.focus()
    }

  },[start])

  const handleChange:(e: React.ChangeEvent<HTMLInputElement>)=>void = (e)=>{
    setText(e.target.value);
  }
  
  return (
    <div>
      <input className="input"
       type="text"
       value={text}
       onChange={handleChange}
       disabled={!start}
       ref={Inputref}
       />
    </div>
  )
}

export default Input