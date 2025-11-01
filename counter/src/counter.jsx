import { use, useState } from 'react'
import './App.css'

function App() {
  const [counter,setCounter] = useState(15)
  const [count, setCount] = useState(0)

  //let counter = 15
  const addValue = () => {
    if(counter < 20){
    console.log("clicked", counter);
    //counter = counter + 1
    setCounter(counter + 1)
    }else{
        alert("Counter cannot go above than 20")
    }
    
  }

  const removeValue = () => {
    if(counter > 0){
        setCounter(counter - 1)
    }else{
        alert("Counter cannot go below 0")
    }
    
  }

  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter Value: {counter}</h2>

    <button onClick={addValue}>Add Value</button>
    
    <br />
    <button onClick={removeValue}>Remove Value</button>
    <h1>footer :{counter}</h1>

    </>
  )
}

export default App
