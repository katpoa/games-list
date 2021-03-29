import React from 'react';
import AddTurtles from './AddTurtles.jsx';
import FormHooks from './FormHooks.jsx';
import FormHooksUseForm from './FormHooksUseForm.jsx';
import Clicker from './Clicker.jsx';
import axios from 'axios';
import styled from 'styled-components';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  componentDidMount() {
    this.getAll();
  }
  
  getAll() {
    axios('/api/')
      .then(list => {
        this.setState({
          list: list.data
        })
      })
      .catch(console.log);
  }
  
  render() {
    return(
      <div>
        <h1>React Hooks ~</h1>
        <AddTurtles />
        <FormHooks />
        <FormHooksUseForm />
        <br></br>
        <Clicker />
      </div>
    );
  }
  
}

export default App;
