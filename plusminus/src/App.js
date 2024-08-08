import './App.css';
import {useState} from 'react'

function App() {

  const [count, setCount] = useState(0);

  function decreaseHandler(){

    setCount(count-1);
  }

  function increaseHandler(){
    setCount(count+1);

  }

  function resetHandler(){
    setCount(0)

  }
  return (
    <div className="header">
      <div className='sub-heading'>
        Increment & Decrement
      </div >
      <div className='container'>
        <button onClick = {decreaseHandler} ><b>-</b></button>

        <div>
        {count}
        </div >
        <div>
          <button onClick= {increaseHandler}> <b>+</b></button>
        </div>
      </div>
      <div>
        <button onClick={resetHandler}> Reset </button>
      </div>


    </div>
  );
}


export default App;