import React from 'react';
import Form from './Form';
import PropTypes from 'prop-types';
import { fetchMadlib } from './../actions';
import { connect } from 'react-redux';


class  Story extends React.Component  {
  render() {
    const title = info.title;
    return (
      <div>
        <button onClick = { e =>
            {  e.preventDefault();
              fetchMadlib()}}>Get started</button>
            <Form />
            <p>When form is filled out and submitted, form will disappear and story will appear here</p>
            {title}
            <button>Restart</button>
          </div>
        );
      }
    }

      const mapStateToProps = state => {
        let info;
        info = {
          title: title,
          blanks: blanks,
          value: value
        }
        return {
          story: info
        };
      };



export default connect(mapStateToProps)(Story);
