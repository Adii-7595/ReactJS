import { useState } from 'react'


function App() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // console.log(firstName)
  // console.log(lastName)

  // function changeFirstHandler(event){
  //   // console.log('printing first name')
  //   // console.log(event.target.value)

  //   setFirstName(event.target.value)

  // }
  // function changeLastHandler(event){
  //   // console.log('printing last name')
  //   // console.log(event.target.value)
  //   setLastName(event.target.value)

  // }
  const[formData , setFormData] = useState({
          firstName: "", lastName: "",email: "", comments:"",isVisible:true
  })


  // console.log(formData.firstName)
  // console.log(formData.lastName)
  // console.log(formData.email)
  // console.log(formData.comments)
  console.log(formData)
  function changeHandler(event){
    const {name,value,checked,type} = event.target
    setFormData(prevFormData=>{
      return{
        ...prevFormData,
        [name] : type === 'checkbox' ? checked : value
      }
    });
  }
  return (
   <div className='App'>
    <form>
      <input placeholder='first name' onChange={changeHandler} name='firstName' value={formData.firstName}>
      </input>
      <br></br>
      <br></br>

      <input placeholder='last name' onChange={changeHandler} name='lastName' value={formData.lastName} >
      </input>
      <br></br>
      <br></br>

      <input placeholder='email' onChange={changeHandler} name='email' value={formData.email} >
      </input>

      <br></br>
      <br></br>
      <textarea placeholder='enter your comments' onChange={changeHandler} name='comments' value={formData.comments}/ >
      <br></br>


      <input type='checkbox' onChange={changeHandler} name='isVisible' id='isVisible' checked={formData.isVisible}></input>
      <label htmlFor='isVisible'>Am I Visible? </label>
    </form>
   </div>
  );
}

export default App;
