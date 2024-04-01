import { useState } from "react";

export default function App() {
  return <Counter />;
}

function Counter() {
  //state variables
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  //local variables for date section
  const date = new Date();
  date.setDate(date.getDate()+count);

  function resetCounters() {
    setCount(0);
    setStep(1);
  }



  return (
    <>
      <div className="wrap-container">
        <button className="reduce-step" onClick={() => setStep((step)=>step - 1)}>
          -
        </button>
        <span className="step-count">Step:{step}</span>
        <button className="increase-step" onClick={()=> setStep((step)=>step + 1)}>
          +
        </button>
      </div>
      <div className="wrap-container">
        <button
          className="reduce-count"
          onClick={() => setCount((count)=>count - step)}
        >
          -
        </button>
        <span className="counter-count">Count:{count}</span>
        <button
          className="increase-count"
          onClick={() => setCount((count)=>count + step)}
        >
          +
        </button>
      </div>

      {Number(count)!==0 && (
        <button onClick={resetCounters}>Reset Counters</button>
      )}

      <p>{/* 1 days ago was Sun Jun 2027 */}
      { count===0
      ?"Today is "
      :(count < 0)? `${Math.abs(count)} days ago was `
      :`${count} days from today is `
      }
      <span>{date.toDateString()}</span>
      </p>
    </>
  );
}
