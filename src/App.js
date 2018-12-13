import React, { Component } from 'react';
import TestComponent from './TestComponent'

class App extends Component {
  state = {
    val1: "첫번째 값",
    val2: "두번째 값",
    val3: "세번째 값"
  }
  
  a = new TestComponent();
  a.props.p1 = "다른값";

  render() {
    return (
      <div>
        <TestComponent p1={this.state.val1} p2={this.state.val2} p3={this.state.val3} s={this.state}></TestComponent>
      </div>
    );
  }
}

export default App;
