import string from '../assets/txt'
import { memo } from 'react'

interface CounterPorps{
    text:string
    check:boolean
}

const Text:React.FC<CounterPorps> = memo(({text,check}) => {

  const arr:string[]=[...string]
 
  
  return (
    <div>
        {
            arr.map((word:string,index:number):JSX.Element=>{
                if(!check && text.length-1===index){
                    if(word===text[text.length-1]){
                        return (<span className='word' style={{backgroundColor:"#13c813",color:"white"}} key={index}>
                            {word}
                        </span>)  
                    }

                    return (<span className='word' style={{backgroundColor:"#e2563e",color:"white"}} key={index}>
                        {word}
                    </span>)  
                }
                else if(text.length===string.length){
                    if(text[index] === word){
                        return (<span className='word' style={{backgroundColor:"#13c813",color:"white"}} key={index}>
                            {word}
                        </span>) 
                    }
                    return (<span className='word' style={{backgroundColor:"#e2563e",color:"white"}} key={index}>
                        {word}
                    </span>) 
                }
                return (<span className='word' key={index}>
                    {word}
                </span>
                )
            })
        }
    </div>
  )
})

export default Text