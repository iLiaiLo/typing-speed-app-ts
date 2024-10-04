import './App.css'
import Text from './content/Text'
import Input from './content/Input'
import Counter from './content/Counter'
import Result from './content/Result'
import { useState } from 'react'
import Timer from './content/Timer'

function App():JSX.Element {

  const [text,setText]=useState<string>("")
  //const [Ind,setInd]=useState<number>(0);
  const [counter,setCounter]=useState<number>(0);
  const [check,setCheck]=useState<boolean>(false);
  const [start,setStart]=useState<boolean>(false);
  const [time,setTime]=useState<number>(0)
  
  
  return (
    <>
    {!check ? 
    <section>
     <Input start={start}  text={text} setText={setText} />
     <Text check={check} text={text}/>
     <Timer time={time} setTime={setTime} start={start} text={text} />
     <Counter
      setCheck={setCheck}
      setCounter={setCounter}
      text={text}
      setStart={setStart} />
    </section>
    :
    <section>
    <Result counter={counter} time={time} />
    </section>}
    </>
  )
}

export default App
