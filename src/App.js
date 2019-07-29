import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      name: 'Luciana'
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState({
      name: this.state.name === 'Luciana' ? 'mudou' : 'Luciana'
    })
  }

  render() {
    return (
      <div className="App">
        <p>{this.state.name}</p> 
        <button type="button" onClick={this.handleClick}>trocar</button>       
      </div>
    );
  }
}

export default App;
