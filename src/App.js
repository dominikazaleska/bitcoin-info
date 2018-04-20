import React, { Component } from 'react';
import './App.css';
import SearchBox from './SearchBox';
import Table from './Table';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      searched: false,
      data: {}
    }
  }

  displayData = (data) => {
    console.log("Data: ", data);
    this.setState({data: data})
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    fetch(`https://api.blockcypher.com/v1/btc/main/txs/${this.state.input}`)
      // .then(resp => this.displayData(resp.json()))
      .then(resp => resp.json())
      .then(data => this.displayData(data))
      this.setState({searched: true})
  }

  render() {
    if(this.state.input === '' || this.state.searched === false ) {
      return (
        <div className="App">
            <h1 className=''>Bitcoin Info</h1>
            <SearchBox 
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
        </div>
      );
    } else {
      return (
        <div className="App">
            <h1 className=''>Bitcoin Info</h1>
            <SearchBox 
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <Table data={this.state.data} />  
        </div>
    );
    }
  }
}

export default App;
