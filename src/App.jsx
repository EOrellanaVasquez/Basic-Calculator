import './App.css'
import { useState } from 'react';
import Button from './components/Button';
import calculatorLogo from './img/calculator-logo.png';
import Screen from './components/Screen';
import ClearButton from './components/ClearButton';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const addInput = value => {
    setInput(input + value);
  };

  const calculateResult = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Please add a value to calculate.")
    }
  };

  return (
    <div className='App'>
      <div className='calculator-logo-container'>
        <img src={calculatorLogo}
          className='calculator-logo' alt='Calculator logo' />
      </div>
      <div className='calculator-container'>
        <Screen input={input}/>
        <div className='row'>
          <Button beenClicked={addInput}>7</Button>
          <Button beenClicked={addInput}>8</Button>
          <Button beenClicked={addInput}>9</Button>
          <Button beenClicked={addInput}>/</Button>
        </div>
        <div className='row'>
          <Button beenClicked={addInput}>4</Button>
          <Button beenClicked={addInput}>5</Button>
          <Button beenClicked={addInput}>6</Button>
          <Button beenClicked={addInput}>*</Button>
        </div>
        <div className='row'>
          <Button beenClicked={addInput}>1</Button>
          <Button beenClicked={addInput}>2</Button>
          <Button beenClicked={addInput}>3</Button>
          <Button beenClicked={addInput}>-</Button>
        </div>
        <div className='row'>
          <Button beenClicked={calculateResult}>=</Button>
          <Button beenClicked={addInput}>0</Button>
          <Button beenClicked={addInput}>.</Button>
          <Button beenClicked={addInput}>+</Button>
        </div>
        <div className='row'>
          <ClearButton letsClear={() => setInput('')}>
            Clear
          </ClearButton>
        </div>
      </div>
    </div>
  )
}

export default App
