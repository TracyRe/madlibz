import React from 'react';
import Header from './Header';
import Story from './Story';

const divStyle = {
  padding: '20px'
}

function App(){
  return (
    <div  style={divStyle}>
      <Header />
      <Story />
    </div>
  );
}

export default App;
