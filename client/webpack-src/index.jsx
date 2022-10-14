import React from 'react';
import { createRoot } from 'react-dom/client'
import Form from './Form.jsx';
import Cowlist from './Cowlist.jsx';
import Request from './requests.js';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows: [],
      toggle: false,
      description: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
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

  handleClick(newCows) {
    this.setState({cows: newCows});
  }

  handleDescription(newDescription) {
    this.setState({description: newDescription});
  }

  handleToggle() {
    if (!this.state.toggle) this.state.toggle = true;
  }

  render() {
    return (
      <div>
        <div className="description">
          {this.state.toggle ? (
          <h3>{this.state.description}</h3>
        ): null}
        </div>
        <div className="form">
          <Form handleClick={this.handleClick} />
        </div>
        <div className="cowList">
          <Cowlist cows={this.state.cows} handleToggle={this.handleToggle} handleDescription={this.handleDescription} />
        </div>
      </div>
    );
  }
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<Index />);

export default Index;