import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import manageGame from './reducers/manageGame'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
// import * as serviceWorker from './serviceWorker';



const store = createStore(manageGame, composeWithDevTools(
  applyMiddleware(thunk),
  // other store enhancers if any
));

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store} >
    <App />
  </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
