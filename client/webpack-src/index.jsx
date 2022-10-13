import React from 'react';
import { createRoot } from 'react-dom/client'
import Form from './Form.jsx';
import Cowlist from './Cowlist.jsx';
import Request from './requests.js';
/*
This will be the main component. Just want this to render a form component, Cow list component.
The cow list component will map over data and spit out a cow component for each field in db
This comp needs state to render all cow data from db, which it will pass down to form comp,
and cow list comp. We need an onSubmit click handler for the form to change the state
*/
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows: [{cow: 'description'}]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    Request.getAll()
      .then(cowInfo => {
        this.setState({
          cows: cowInfo
        })
      })
      .catch(err => {
        console.log('error getting cowInfo', err);
      });
  }

  handleClick (newCows) {
    this.setState({cows: newCows})
  }

  render() {
    return (
      <div>
        <div className="form">
          <Form handleClick={this.handleClick} />
        </div>
        <div className="cowList">
          <Cowlist cows={this.state.cows} />
        </div>
      </div>
    );
  }
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<Index />);

export default Index;