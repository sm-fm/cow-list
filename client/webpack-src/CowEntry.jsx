import React from 'react';

var CowEntry = (props) => {
  return (
    <div>
      <h3>{props.cowDetails.name}</h3>
      <p>{props.cowDetails.description}</p>
    </div>
  );
}

export default CowEntry;