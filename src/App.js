import React,{useState} from 'react';
import "./index.css";
const App = () => {
  // make state of our application
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");



  // logic
  let calcBmi = (e) => {
    e.preventDefault();
    if(weight === 0 && height === 0) {
      alert('Please Enter a valid Weight')
    }
    else {
      let bmi= (weight/(height*height)*703)
      setBmi(bmi.toFixed(1))

      if(bmi<25) {
setMessage("You are underweight")
      }
      else if(bmi >=25 && bmi<30) {
        setMessage("You are fit")

      }
      else {
        setMessage("You are overweight")
      }
    }
  }


  // reload

  let reload =() => {

    window.location.reload()
  }


  return (
    <div className="App">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (lbs)</label>
            <input
              type="text"
              placeholder="Enter Your Weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div>
            <label>Height (in)</label>
            <input
              type="text"
              placeholder="Enter Your Height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn-outline" onClick={reload} type="submit">
              Reload
            </button>
          </div>

          <div className="center">
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default App;
