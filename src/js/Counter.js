import React, { useState } from 'react';

function Button(props) {
  const handleClick = () => props.onClickFunction(props.increment);
  return <button onClick={handleClick}> +{props.increment} </button>
}

function Display(props){
  return (
  <div> {props.message} </div>
  );
}

function Counter() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = (incValue) => setCounter(counter+incValue);

  return (
    <div style={{paddingLeft:20, paddingTop:20}}>

      <Button onClickFunction={incrementCounter} increment={1}/>
      <Button onClickFunction={incrementCounter} increment={5}/>
      <Button onClickFunction={incrementCounter} increment={10}/>
      <Button onClickFunction={incrementCounter} increment={15}/>
      <Display message={counter}/>
    
    </div>
  );
}

export default Counter;
