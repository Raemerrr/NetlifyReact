/* eslint-disable */
import React, { useState } from 'react';
import './App.css';

function App() {
  
  let [title,setTitle] = useState(['남자 코트 추천','이강인 이적', '채용 공고']); //['남자 코트 추천', function]
  let [like, setLike] = useState(0); 
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={ () => {
        var tempArray = [...title];
        tempArray[0] = '여자 코트 추천';
        setTitle(tempArray);
      } }>⚙</button>
      <div className="list">
        <h3> { title[0] }<span onClick={ ()=>{
          setLike(like + 1);
        } }>👍</span> {like} </h3>
        <p>11월 23일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3> { title[1] }</h3>
        <p>11월 22일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3> { title[2] }</h3>
        <p>11월 21일 발행</p>
        <hr />
      </div>
      <Modal />

    </div>
  );
}

function Modal(){
  return (
    <div className="modal">
    <h2>제목</h2>
    <p>날짜</p>
    <p>상세내용</p>
  </div>
  );
}

export default App;
