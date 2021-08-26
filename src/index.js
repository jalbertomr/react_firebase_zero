import React from 'react';
import ReactDOM from 'react-dom';

const text = " 'text inserted'";
const textColor = 'green';
const inSession = true;

const JSXcode = 
  <div>
    <h3 className="title" style={{color: textColor, backgroundColor: 'lightblue'}}>
      React JSX inserting:{text}</h3>
    <p>logged Ok. </p>
  </div>;

const isInSession = (inSession) => {
  if(inSession === true){
    return JSXcode;
  } else {
    return <h1>Session not started!</h1>
  }
}

ReactDOM.render(
  isInSession(inSession),
  document.getElementById('root')
);
