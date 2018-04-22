import React, { Component } from 'react';
import './App.css';
import SearchBox from './SearchBox';
import Table from './Table';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      data: {},
      correct_input: false,
      submitted: false
    }
  }

  displayData = (data) => {
    this.setState({data: data});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  checkAddress = (input) => {
    let string = String(input) || '';
    let cleaned = string.replace(/^[\s\xa0]+|[\s\xa0]+$/g, '');
    if(cleaned.length !== 64) {
      this.setState({correct_input: false});
      return this.state.correct_input;
    }
    let reg_expr = /^[A-Z0-9]+$/i;
    if (!reg_expr.test(cleaned)) {
      this.setState({correct_input: false});
      return this.state.correct_input;    
    }
    this.setState({correct_input: true});
    return this.state.correct_input;    
  }

  onButtonSubmit = () => {
    this.setState({submitted: true});
    fetch(`https://api.blockcypher.com/v1/btc/main/txs/${this.state.input}`)
      .then(resp => resp.json())
      .then(data => this.displayData(data))
    this.checkAddress(this.state.input);
    if(this.state.correct_input===true) {
      this.setState({if_correct_text: "valid input"});  
    }
  }

  render() {
    let content;
    if (this.state.submitted===true && this.state.correct_input===true) {
      content = (
        <Table key='main-table-component' data={this.state.data} />
      )
    } else if (this.state.submitted===true && this.state.correct_input===false) {
      content = (
        <p className='red'>Invalid input</p>
      )
    }
    if(this.state.input==='') {
      return (
        <div key='app-div' className="App">
            <h1 className='avenir mid-gray'>Bitcoin Transaction Info</h1>
            <h2 className='avenir mid-gray'>Check your transaction's data</h2>
            <SearchBox 
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
        </div>
      );      
    } else {
      return (
        <div key='app-div' className="App">
            <h1 className='avenir mid-gray'>Bitcoin Info</h1>
            <h2 className='avenir mid-gray'>Check your transaction's data</h2>
            <SearchBox 
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            {content}
        </div>
      );      
    }
  }
}

export default App;
