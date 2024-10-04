import string from "../assets/txt"
import { useEffect, useState } from "react"

interface visualizeProp{
  counter:number,
  time:number
}
type Touple=[boolean, React.Dispatch<React.SetStateAction<boolean>>]

const Result :React.FC<visualizeProp> = ({counter,time}) => {
  const scaleArr=Array.from({length:11},(_,index)=>96-(index+1)*8)

  const [begin,setBegin]:Touple=useState(false);
  const freq:number=time!==0?+(counter/time).toFixed(2):0;

  useEffect(()=>setBegin(true),[])

  const Length:number=string.split(" ").length;
  const percent:number=100 - (counter/Length)*100
  const speed:string=`${60*freq} wpm (word per minute)`;

  return (
    <>
    <section className="frame">
      <div className="Axis-text">Number of correct typed words</div>
      <div className="scale">
        {
          scaleArr.map(number=>{
            return <span key={number}>{number}</span>
          })

        }
      </div>
      <div className="column">
        <div className="fill" style={{height:begin?`${percent}%`:"100%"}}></div>
      </div>
    </section>
    <section className="Result-info">
      <p>Correctly typed words: <span>{counter}</span></p>
      <p>Your typing speed is: <span>{speed}</span></p>
      <button onClick={():void=>window.location.reload()}>start again</button>
    </section>
    </>
  )
}

export default Result