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
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", comments: "", isVisible: true, mode: "", favCar: ""
  })


  // console.log(formData.firstName)
  // console.log(formData.lastName)
  // console.log(formData.email)
  // console.log(formData.comments)
  console.log(formData)
  function changeHandler(event) {
    const { name, value, checked, type, } = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value
      }
    });
  }

  function submitHandler(event){
    event.preventDefault();
    console.log('finally printing entire for ka data')
    console.log(formData)
  }
  return (
    <div className='App' >
      <form onSubmit={submitHandler}>
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
        <textarea placeholder='enter your comments' onChange={changeHandler} name='comments' value={formData.comments} />
        <br></br>


        <input type='checkbox' onChange={changeHandler} name='isVisible' id='isVisible' checked={formData.isVisible}></input>
        <label htmlFor='isVisible'>Am I Visible? </label>
        <br></br>
        <br></br>


        <fieldset>
          <legend>MODE:</legend>

          <input type='radio' onChange={changeHandler} name='mode' value="Online-Mode" id='Online-Mode'
            checked={formData.mode === "Online-Mode"}>
          </input>
          <label htmlFor='Online-Mode'>Online Mode</label> {/* Corrected to 'Online-Mode' */}
          <br />

          <input type='radio' onChange={changeHandler} name='mode' value="Offline-Mode" id='Offline-Mode'
            checked={formData.mode === "Offline-Mode"}>
          </input>
          <label htmlFor='Offline-Mode'>Offline Mode</label> {/* Corrected to 'Offline-Mode' */}
          <br />
        </fieldset>

        <label htmlFor='favCar'>Tell me your Favorite Car</label>  &nbsp;

        <select onChange={changeHandler} name='favCar' id='favCar' value={formData.favCar}>
          <option value='scorpio'>Scorpio</option>
          <option value='bolero'>Bolero</option>
          <option value='thar'>Thar</option>
          <option value='safari'>Safari</option>
          <option value='endeavour'>Endeavour</option>
          <option value='fortuner'>Fortuner</option>
          <option value='land rover'>Land Rover</option>
          <option value='range rover'>Range Rover</option>
        </select>
        <br></br>
        <br></br>

        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
