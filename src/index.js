
import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux'


const initialState = {
  count: 0
};

const INCREMENT = 'INCREMENT';

const incrementValue = () => ({
  type: INCREMENT
})


const reducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return {
      count: state.count + 1
    }
  }
  return state;
};
import './styles.scss';

const store = createStore(reducer);

class Counter extends Component {
  render() {
    return (
      <main className="Counter">
        <p className="count">0</p>
        <section className="controls">
          <button>Increment</button>
          <button>Decrement</button>
          <button>Reset</button>
        </section>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = dispatch => {
  return {
    increment() {
      dispatch(incrementValue);
    }
  }
}

render(<Counter />, document.getElementById('root'));