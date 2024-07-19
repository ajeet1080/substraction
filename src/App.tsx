import React, { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [result, setResult] = useState<number | null>(null);

  const handleSubtract = () => {
    setResult(num1 - num2);
  };

  return (
    <div className="App">
      <h1>Subtract Two Numbers</h1>
      <div>
        <label>
          Number 1:
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(Number(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Number 2:
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(Number(e.target.value))}
          />
        </label>
      </div>
      <button onClick={handleSubtract}>Subtract</button>
      {result !== null && (
        <div>
          <h2>Result: {result}</h2>
        </div>
      )}
    </div>
  );
};

export default App;
