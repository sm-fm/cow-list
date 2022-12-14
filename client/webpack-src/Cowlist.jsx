import React from 'react';
import CowEntry from './CowEntry.jsx';
import { v4 as uuidv4 } from 'uuid';

var Cowlist = (props) => {
  return (
    <div>
      {props.cows.map(cow => {
        return <CowEntry cowDetails={cow} key={uuidv4()} handleToggle={props.handleToggle} handleDescription={props.handleDescription}/>
      })}
    </div>
  );
}

export default Cowlist;