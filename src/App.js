import {useState} from 'react';
import './index.css';

const App = () => {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')



  let calcBmi = (e) => {
    e.preventDefault()

    if(weight === 0 || height === 0) {
      alert('Please Enter Valid Details')
    } else {
      let bmi = (weight / (height * height) * 703)
      setBmi(bmi.toFixed(1))
    }

    if (bmi < 25) {
      setMessage('You are underweight')
    } else if (bmi >=25 && bmi < 30) {
      setMessage('You are healthy')
    } else  {
      setMessage('You are overweight')
    }
  }


  let imgSrc;

  if (bmi < 1) {
    imgSrc = ''
  } else {
    if (bmi <25) {
      imgSrc = require('../src/pics/boy.jpeg')
    } else if (bmi >= 25 && bmi < 30){
      imgSrc = require('../src/pics/healthy boy.jpeg')
    } else {
      imgSrc = require('../src/pics/fat boy.jpeg')
    }
  }

  let reload = () =>{
    window.location.reload()
  }

  return (
    <div className="App">
        <div className="container">
          <h2 className="center">BMI Calculator</h2>
          <form onSubmit={calcBmi}>
            <div>
              <label>Weight (lb)</label>
              <input value={weight} onChange = {(e) => setWeight(e.target.value)}/>
            </div>
            <div>
              <label>Height (in)</label>
              <input value={height} onChange = {(e) => setHeight(e.target.value)}/>
            </div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' type='submit' onClick={reload}>Reload</button>
          </form>

          <div className='center'>
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>

          <div className='img-container'>
            <img src={imgSrc} alt='/'></img>
          </div>
        </div>
    </div>
  );
}

export default App;
