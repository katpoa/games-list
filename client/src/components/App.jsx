import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
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
    );
  }
  
}

export default App;
