
import './App.css'
import Circle from './Circle/Circle';
import {useState} from 'react';

function App() {
  
  const [numbers, setNumbers] = useState([5, 11, 16, 23, 32]);

  const rndNumbers = () => {
    const randomInteger = (min:number, max:number) => {    
    let rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
    };
  
    const newRnd = new Array(5).fill(0);
    let rndNumber = 0;
    let i = 0;

    while (newRnd.includes(0)) {
      rndNumber = randomInteger(5, 36);
      if (!newRnd.includes(rndNumber)) {
        newRnd[i] = rndNumber;
        i++;
      }
    }
    
    setNumbers(newRnd.sort((a:number, b:number) => a - b));
  };

  return (
    <>
      <div className="App">
        <div className='circle-block'>
          <Circle number={numbers[0]} />
          <Circle number={numbers[1]} />
          <Circle number={numbers[2]} />
          <Circle number={numbers[3]} />
          <Circle number={numbers[4]} />          
        </div>
        <div><button className='btn' onClick={rndNumbers}>Generate</button></div>
      </div>
    </>
  )
}

export default App
