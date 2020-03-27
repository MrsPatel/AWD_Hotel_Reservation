import React from 'react';
import ReactDOM from 'react-dom';
//This is where we create our front end react app
import App from './App';
//import * as serviceWorker from './serviceWorker';


//Do I need to delete strict mode?  
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
