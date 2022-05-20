import React, { Component } from "react";

class MyComponent extends Component {
  constructor() {
    console.log("Constructor");
    super();
    this.state = { counter: 10 };
    this.handleDecrement = this.handleDecrement.bind(this);
    // this.handleIncrement = this.handleIncrement.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("   Should I?");
    if (this.state === nextState) {
      console.log("     No Update");
      return false;
    }

    return true;
  }

  componentDidMount() {
    console.log("Component is Mounted");
  }

  componentDidUpdate() {
    console.log("   Component was updated");
  }

  componentWillUnmount() {
    console.log("Component will be unmounted");
  }

  handleIncrement() {
    this.setState({ ...this.state, counter: this.state.counter + 1 });
  }

  handleDecrement() {
    this.setState({ ...this.state, counter: this.state.counter - 1 });
  }

  render() {
    console.log("   render");
    return (
      <div>
        Hello I'm a Counter
        <span>{` current count is ${this.state.counter}`}</span>
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
      </div>
    );
  }
}

export default class App extends Component {
  constructor() {
    super();
    this.state = { flag: true, dummy: true };
    this.handleClick = this.handleClick.bind(this);
    this._handleClick = this._handleClick.bind(this);
  }

  handleClick() {
    this.setState({ ...this.state, flag: !this.state.flag });
  }

  _handleClick() {
    this.setState({ ...this.state, dummy: !this.state.dummy });
  }

  render() {
    return (
      <div className='App'>
        {this.state.flag && <MyComponent />}
        <button onClick={this.handleClick}>Click Me!</button>
        <button onClick={this._handleClick}>
          Do not affect to inner component~
        </button>
      </div>
    );
  }
}
