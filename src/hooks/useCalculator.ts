import { useRef, useState } from "react";

enum Operators {
    add, substract, multiply, divide
}

const MATH_ERROR = 'Math Error';

export function useCalculator () {
  const [previousNumber, setPreviousNumber] = useState('');
  const [number, setNumber] = useState('');

  const lastOperation = useRef<Operators>();

  const addNumber = (newNumber: string) => setNumber((prevNumber) => {
    if (!prevNumber && newNumber === '.') return '0'+newNumber;

    if (newNumber === '0' && prevNumber === '0') return newNumber;

    return prevNumber + newNumber;
  });

  const deleteNumber = () => setNumber((prevNumber) => {
    if (number === MATH_ERROR) return '';
    return prevNumber.slice(0, -1)
  })

  const clear = () => {
    setPreviousNumber('');
    setNumber('');
  };

  const positiveNegative = () => setNumber((prevNumber) => {
    if (!prevNumber) return prevNumber;
    
    if (prevNumber.includes('-')) return prevNumber.replace('-', '');

    return `-${prevNumber}`;
  });

  const changePreviousNumberToNumber = () => {
    if (number.endsWith('.')) setPreviousNumber(number.slice(0, -1));
    else if (!number || number === '0') return;
    else setPreviousNumber(number);

    setNumber('');
  }

  const calculate = () => {
    const num1 = +number;
    const num2 = +previousNumber;

    switch(lastOperation.current) {
      case Operators.add:
        setNumber(`${num1 + num2}`);
        break;

      case Operators.substract:
        setNumber(`${num2 - num1}`);
        break;

      case Operators.multiply:
        setNumber(`${num1 * num2}`);
        break;
      
      case Operators.divide:
        if (num1 === 0 && num2 === 0) setNumber(MATH_ERROR);
        else setNumber(`${num2 / num1}`);
        break;
    }

    setPreviousNumber('');
  }

  const handleAdd = () => {
    changePreviousNumberToNumber();
    lastOperation.current = Operators.add;
  };

  const handleSubstract = () => {
    changePreviousNumberToNumber();
    lastOperation.current = Operators.substract;
  };

  const handleMultiply = () => {
    changePreviousNumberToNumber();
    lastOperation.current = Operators.multiply;
  };

  const handleDivide = () => {
    changePreviousNumberToNumber();
    lastOperation.current = Operators.divide;
  }

  return {
    previousNumber,
    number,
    positiveNegative,
    addNumber,
    calculate,
    clear,
    deleteNumber,
    handleAdd,
    handleSubstract,
    handleMultiply,
    handleDivide,
  }
}
