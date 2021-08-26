import React from 'react';
import ReactDOM from 'react-dom';

const text = " 'text inserted'";
const textColor = 'green';
const inSession = true;
const varDefined = undefined;

const JSXcode =
<>
  {inSession === true ? 
  <div>
    <h3 className="title" style={{color: textColor, backgroundColor: 'lightblue'}}>
      React JSX inserting:{text}</h3>
    <p>logged Ok. </p>
    {varDefined && <p>Var is defined so print it {varDefined}</p>}
  </div>
  :
  <p>NOT logged Ok. </p>
  }
</>  

ReactDOM.render(
  JSXcode,
  document.getElementById('root')
);
