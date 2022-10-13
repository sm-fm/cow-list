import Request from './requests.js';
import React from 'react';

var Form = (props) => {

  var handleSubmit = (event) => {
    event.preventDefault();
    var cow = {
      name: document.getElementById('cowname').value,
      description: document.getElementById('description').value
    };
    Request.create(cow)
      .then(() => {
        return Request.getAll()
      })
      .then((data) => {
        props.handleClick(data);
      })
      .catch(err => {
        console.log(err);
      });
      document.getElementById('cowname').value = '';
      document.getElementById('description').value = '';
  }
  return (
    <form>
      <label>Name:</label><br />
      <input type="text" id="cowname"></input><br />
      <label>Description:</label><br />
      <input type="text" id="description"></input><br />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}

export default Form;