import { useEffect, useState } from 'react';
import './App.css';



function App(){
  const [text,setText] = useState('');
  const [name,setName] = useState('aditya');
  

  //variation 1 - every render
  // useEffect(()=>{
  //   console.log('ui rendering done');
   
  // });

  //variation 2 - first render
  // useEffect(()=>{
  //   console.log('ui rendering one time')
  // },[]);

  //variation 3 - whenever dependency changes

  useEffect(()=>{
    console.log("Change observed")
    // console.log(text);
  },[name]);

  //variation 4 - to handle unmounting of a component

  useEffect(()=>{
    //add event listener
    console.log('listener added');
    return ()=>{
      console.log('listener removed')
    }
  },[text]);

  function changeHandler(event){
    console.log(text);
    setText(event.target.value);
  }
  return(
    <div className='App'>
      <input type='text' onChange={changeHandler}></input>
    </div>
  )
}

export default App;