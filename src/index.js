import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ScoreCard from './App';
import * as serviceWorker from './serviceWorker';

const who = "Ric"; 
const columnIndex = ["Subject", "Score"]; 
const scoreCard = { 
    name: `${who}`, 
    records: [ 
        ["Math", 100], 
        ["Phy",100],
        ["Chinese", 87] 
    ], 
};

ReactDOM.render(
  <React.StrictMode>
    <ScoreCard scoreCard={scoreCard}
      columnIndex={columnIndex}/>
  </React.StrictMode>,
  // <h1>Hello, world!</h1>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
