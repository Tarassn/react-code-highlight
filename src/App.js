import React, { Component } from 'react';
import './App.css';
import Highlighted from "./components/Highlighted";
import {samples} from "./sample-input";

class App extends Component {
  state ={
    currentIndex:0,
  };
  changeBlock = () => {
    let currentIndex = this.state.currentIndex;
    currentIndex++;
    if (currentIndex === samples.length){
        currentIndex=0;
    }
    this.setState({currentIndex});
  };
  render() {
    return (
      <div className="App">
          <button className={"main-button"}
                  onClick={this.changeBlock}>Next block</button>
        <Highlighted
        samples={samples}
        currentIndex={this.state.currentIndex}/>
      </div>
    );
  }
}

export default App;
