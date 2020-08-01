import React from 'react';
import ReactDOM from 'react-dom';

// import App from './App';
import * as serviceWorker from './serviceWorker';
import './css/starmatch.css';
import StarMatch from './js/StarMatch';
// import Counter from './js/Counter';

ReactDOM.render(
  <React.StrictMode>
    <StarMatch/>
  </React.StrictMode>,
  document.getElementById('root')
);


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//     <GitHubCardsApp title="The GitHub Cards App"/>
//   </React.StrictMode>,
//   document.getElementById('root1')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
