import React from 'react';

var CowEntry = (props) => {
  return (
    <div>
      <h3 onClick={() => { props.handleToggle(); props.handleDescription(props.cowDetails.description);}}>{props.cowDetails.name}</h3>
    </div>
  );
}

export default CowEntry;