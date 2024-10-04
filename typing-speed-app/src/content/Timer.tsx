import { useEffect,useMemo} from "react"
import string from "../assets/txt"

interface timeProp{
    start:boolean,
    text:string,
    time:number,
    setTime:React.Dispatch<React.SetStateAction<number>>
}

//</span>{time<=9 && <span>0</span>}<span>{time}</span>
const Timer:React.FC<timeProp> = ({start,text,time,setTime}) => {

    const isEqual:boolean=useMemo(()=>text.length===string.length,[text]);
 
    useEffect(()=>{
        if(!start) return
        const id:number=setTimeout(()=>{
            if (!isEqual) {
                setTime(time + 1);
            }
            // if(!isEqual && start){
            //     setTime(time+1)
            // }
            // else if(isEqual){
            //     clearTimeout(id)
            // } 
        },1000)

        return ()=>clearTimeout(id)
    },[time,start,isEqual])
  return (
    <div className="Timer">
        <span>Time {`${Math.floor(time/60).toString()}:${(time%60).toString().padStart(2,"0")}`}</span>
    </div>
  )
}

export default Timer