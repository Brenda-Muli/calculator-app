import React, { useState } from 'react';

const Calculator = () => {
  const [previousOperand, setPreviousOperand] = useState('');
  const [currentOperand, setCurrentOperand] = useState('');
  const [operation, setOperation] = useState('');

//Append number function
  const appendNumber = (number) => {
    setCurrentOperand(currentOperand + number);
  };

//Check if currentOperand is empty, exit function if true
  const chooseOperation = (operation) => {
    if (currentOperand === '') {
      console.log('Cannot choose operation: current operand is empty');
      return;
    }
  
// If previousOperand is not empty, perform computation
    if (previousOperand !== '') {
      console.log('Performing computation before choosing new operation');
      performCalculation();
    }
    console.log(`Chosen operation: ${operation}`);
    setOperation(operation);
  
    console.log(`Previous operand set to: ${currentOperand}`);
    setPreviousOperand(currentOperand);
    setCurrentOperand('');
  };

//Perform calculation
  const performCalculation = () => {
    let calculation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);

    if (isNaN(prev) || isNaN(current)){ 
      console.log('Error:Invalid operands');
      return;
    }

    switch (operation) {
      case '+':
        calculation = prev + current;
        break;
      case '-':
        calculation = prev - current;
        break;
      case '*':
        calculation = prev * current;
        break;
      case '/':
        calculation = prev / current;
        break;
      default:
        return;
    }
    setCurrentOperand(calculation.toString());
    setPreviousOperand('');
    setOperation('');
  };

  const clear = () => {
    setCurrentOperand('');
    setPreviousOperand('');
    setOperation('');
  };

  const deleteLast = () => {
    setCurrentOperand(currentOperand.slice(0, -1));
  };

  const buttonClick = (value) => {
    if (value === '=') {
      performCalculation();
    } else if (value === 'Clear') {
      clear();
    } else if (value === 'Delete') {
      deleteLast();
    } else if (['+', '-', '*', '/'].includes(value)) {
      chooseOperation(value);
    } else {
      appendNumber(value);
    }
  };
//what is being returned
  return (
    <div className='grid grid-cols-4 gap-4 justify-items-center items-center mt-5 p-7 bg-gradient-to-r from-pink-200 to-blue-200 max-w-lg mx-auto rounded-lg'>
      <div className='col-span-4 output bg-gray-300 text-white p-4'>
        <div className='previous'>{previousOperand} {operation}</div>
        <div className='current'>{currentOperand}</div>
      </div>
      
      <button className='col-span-2 bg-gray-100 text-white p-1 rounded-lg hover:bg-gray-600' onClick={() => buttonClick('Clear')}>
        Clear
      </button>
      <button className='col-span-2 border border-gray-300 bg-gray-100 p-1 rounded-lg text-xl text-white hover:bg-gray-600' onClick={() => buttonClick('Delete')}>
        Delete
      </button>
      
      <button className='border border-gray-300 p-4 text-xl text-white hover:bg-gray-600' onClick={() => buttonClick('1')}>
        1
      </button>
      <button className='border border-gray-300 p-4 text-xl text-white hover:bg-gray-600' onClick={() => buttonClick('2')}>
        2
      </button>
      <button className='border border-gray-300 p-4 text-xl text-white hover:bg-gray-600' onClick={() => buttonClick('3')}>
        3
      </button>
      <button className='border border-gray-300 p-4 text-xl text-white hover:bg-gray-600' onClick={() => buttonClick('4')}>
        4
      </button>
      <button className='border border-gray-300 p-4 text-xl text-white hover:bg-gray-600' onClick={() => buttonClick('5')}>
        5
      </button>
      <button className='border border-gray-300 p-4 text-xl text-white hover:bg-gray-600' onClick={() => buttonClick('6')}>
        6
      </button>
      <button className='border border-gray-300 p-4 text-xl text-white hover:bg-gray-600' onClick={() => buttonClick('7')}>
        7
      </button>
      <button className='border border-gray-300 p-4 text-xl text-white hover:bg-gray-600' onClick={() => buttonClick('8')}>
        8
      </button>
      <button className='border border-gray-300 p-4 text-xl text-white hover:bg-gray-600' onClick={() => buttonClick('9')}>
        9
      </button>
      <button className='border border-gray-300 p-4 text-xl text-white hover:bg-gray-600' onClick={() => buttonClick('0')}>
        0
      </button>
      <button className='border border-gray-300 p-4 text-xl text-white hover:bg-gray-600' onClick={() => buttonClick('*')}>
        *
      </button>
      <button className='border border-gray-300 p-4 text-xl text-white hover:bg-gray-600' onClick={() => buttonClick('/')}>
        /
      </button>
      <button className='border border-gray-300 p-4 text-xl text-white hover:bg-gray-600' onClick={() => buttonClick('+')}>
        +
      </button>
      <button className='border border-gray-300 p-4 text-xl text-white hover:bg-gray-600' onClick={() => buttonClick('.')}>
        .
      </button>
      
      <button className='border border-gray-300 p-4 text-xl text-white hover:bg-gray-600' onClick={() => buttonClick('-')}>
        -
      </button>
      <button className='border border-gray-300 p-4 text-xl text-white hover:bg-gray-600 col-span-2 col-start-2' onClick={() => buttonClick('=')}>
        =
      </button>
    </div>
  );
};

export default Calculator;