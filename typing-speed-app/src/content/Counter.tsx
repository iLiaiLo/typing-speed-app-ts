
import { useRef } from "react"
import string from "../assets/txt"
interface CounterPorps{
    text:string,
    setCounter:React.Dispatch<React.SetStateAction<number>>
    setCheck:React.Dispatch<React.SetStateAction<boolean>>
    setStart:React.Dispatch<React.SetStateAction<boolean>>
}

const Counter:React.FC<CounterPorps> = ({text,setCounter,setCheck,setStart}) => {

  const buttonRef=useRef<HTMLButtonElement|null>(null)

  const handleCheck:()=>void=()=>{
    const myArr:string[]=text.split(" ");
    const strArr:string[]=string.split(" ");

    const amount:number=myArr.reduce((acc:number,curr:string,index:number):number=>{
      if(curr===strArr[index]){
        acc+=1
      }
      return acc
    },0)

    setCounter(amount)
    setCheck(true)
  }
 
  
  const handleStart: ()=>void = ()=>{
    if(buttonRef.current) buttonRef.current.style.display="none"
    setStart(true)
  }
 
  
  return (
    <div className="Tools">
        <p>Text: {text}</p>
        {text.length===string.length && <button onClick={handleCheck}>see result</button>}
        <button ref={buttonRef} onClick={handleStart}>start</button>
        <button onClick={():void=>window.location.reload()}>start again</button>
    </div>
  )
}

export default Counter