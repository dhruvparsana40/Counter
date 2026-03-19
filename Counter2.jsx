import { useState } from 'react'
import './Style.css'

function Counter2() {
  const [counter, setCounter] = useState(0)
  const [msg, setMsg] = useState('')

  const add = () =>{
    if(counter >= 5){
      setMsg('Number Greater than 5')
    }else{
      setCounter(counter + 1)
      setMsg('')
    }
  }

  const sub = () =>{
    if(counter <= 0){
      setMsg('Number Less than 0')
    }else{
      setCounter(counter - 1)
      setMsg('')
    }
  }

  return(<>
    <div className='counter-container'>
      <h1>Counter</h1>
      <input className='add-btn' type='button' value='+' onClick={add}/>
      <input className='sub-btn' type='button'value='-' onClick={sub}/><br/>
      <input className='clear-btn' type='button' onClick={()=>{setCounter(0), setMsg('')}} value='clear'/>
      <div className='counter'>
        {counter}
      </div>
      <p style={{color:'red'}}>{msg}</p>
    </div>
    
  </>);
}

export default Counter2;
