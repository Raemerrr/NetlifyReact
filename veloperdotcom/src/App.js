import React, { Component } from 'react';
import './App.css'
import MyName from './MyName';
import MyName2 from './MyName2';
import Counter from './Counter';
class App extends Component {
  render(){
    return (
      <div>
      <MyName name="리액트"/>
      <MyName />
      <MyName2 name='리엑트2'/>
      <MyName2 />
      <Counter />
      </div>
    );
  }
}

export default App;
