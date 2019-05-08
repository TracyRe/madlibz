import React from 'react';
import Form from './Form';
import { fetchMadlib } from './../actions';
import { connect } from 'react-redux';


function Story(){
  return (
    <div>
      <button onClick = { e =>
      {  e.preventDefault();
      fetchMadlib()}}>Get started</button>
      <Form />
      <p>When form is filled out and submitted, form will disappear and story will appear here</p>
      <button>Restart</button>
    </div>
  );
}

export default Story;
