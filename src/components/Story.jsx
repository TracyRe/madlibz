import React from 'react';
import Form from './Form';

function Story(){
  return (
    <div>
      <button>Get started</button>
      <Form />
      <p>When form is filled out and submitted, form will disappear and story will appear here</p>
      <button>Restart</button>
    </div>
  );
}

export default Story;
