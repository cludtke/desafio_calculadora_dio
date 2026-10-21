import { Container, Content, Row } from './style';
import { Ipunt } from './components/Input';
import { Button } from './components/Button';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState(null); 
  const [operation, setOperation] = useState('');

  // Faz a conta entre dois números e devolve o resultado como string
  const calculate = (a, b, op) => {
    const n1 = Number(a);
    const n2 = Number(b);

    switch (op) {
      case '+':
        return String(n1 + n2);
      case '-':
        return String(n1 - n2);
      case '*':
        return String(n1 * n2);
      case '/':
        if (n2 === 0) return 'Erro';
        return String(n1 / n2);
      default:
        return String(n2);
    }
  };

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => {
      if (prev === 'Erro') return number === '.' ? '0.' : number;
      if (number === '.') return prev.includes('.') ? prev : `${prev}.`;
      return prev === '0' ? number : `${prev}${number}`;
    });
  };

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber(null);
    setOperation('');
  };

  // Usada por +, -, * e /
  const handleOperation = (op) => {
    if (currentNumber === 'Erro') return;

    if (firstNumber === null) {
      // Primeira operação: guarda o número e espera o segundo
      setFirstNumber(currentNumber);
    } else {
      // Já tinha uma conta pendente (ex: 2 + 3 -): resolve antes de seguir
      const result = calculate(firstNumber, currentNumber, operation);
      if (result === 'Erro') {
        setCurrentNumber('Erro');
        setFirstNumber(null);
        setOperation('');
        return;
      }
      setFirstNumber(result);
    }

    setOperation(op);
    setCurrentNumber('0');
  };

  const handleEquals = () => {
    if (firstNumber === null || operation === '') return;

    const result = calculate(firstNumber, currentNumber, operation);
    setCurrentNumber(result);
    setFirstNumber(null);
    setOperation('');
  };

  const handlePercent = () => {
    if (currentNumber === 'Erro') return;
    setCurrentNumber(String(Number(currentNumber) / 100));
  };

  return (
    <Container>
      <Content>
        <Ipunt value={currentNumber.replace('.', ',')} />
        <Row>
          <Button label="C" onClick={handleOnClear} />
          <Button label="*" onClick={() => handleOperation('*')} />
          <Button label="/" onClick={() => handleOperation('/')} />
          <Button label="%" onClick={handlePercent} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="+" onClick={() => handleOperation('+')} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="-" onClick={() => handleOperation('-')} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="," onClick={() => handleAddNumber('.')} />
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')} />
          <Button label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;