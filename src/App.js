import React, { Component, Fragment } from 'react';
import './App.css'
class App extends Component {
  render(){
    const name = 'react';
    const style = {
      backgroundColor : 'black',
      padding : '16px',
      color : 'white',
      fontSize : '12px'
    };
    return (
      <Fragment>
      <div>
        Hello {name}!
      </div>
      <div>
        {
          1 + 1 === 2
          ? (<div>1 + 1 == 2</div>)
          : (<div>1 + 1 != 2</div>)
        }
      </div>
      <div>
        {
          1 + 1 === 2 && (<div>Visible</div>)
        }
      </div>
      <div>
        {
          (function(){
            if (name === 'react') return (<div> name === 'react'</div>)
            else if (name === 'react1') return (<div> name === 'react1'</div>)
            else return (<div> name === 'else'</div>)
          })()
        }
      </div>
      <div>
        {
          (() => {
            if (name === 'react') return (<div> name === 'react'</div>)
            else if (name === 'react1') return (<div> name === 'react1'</div>)
            else return (<div> name === 'else'</div>)
          })()
        }
      </div>
      <div style={style}>
        hi there
      </div>
      <div className="App">
        {/*주석 테스트*/}
        안녕하세요!
        <h1>
          {/* //태그 사이 */}
          리액트
        </h1>
      </div>
      </Fragment>
    );
  }
}

export default App;
