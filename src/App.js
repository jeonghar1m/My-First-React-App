import React, { Component } from 'react';
import './App.css';
import './components/Bottom.css'
import './components/Menu.css'
import './components/Side.css'
import './components/Top.css'
import Top from "./components/Top"
import Menu from "./components/Menu"
import Side from "./components/Side"
import Bottom from "./components/Bottom"

function App() {
  return (
    <div className="App">
      <body>
        <Top></Top>
        <Menu></Menu>
        <div id="main">
        <section>
            <h1>Main Page</h1>
            <hr />
            <p>My First React Web</p>
            <p>테스트 환경(기기): Chrome Browser(PC), iPhone 12 Pro(6.1"), iPad Pro 11"</p>
            <h2>사이트맵</h2>
            <ul>
                <li>메인페이지</li>
                <ul>
                    <li>자기소개</li>
                    <li>기술정리</li>
                    <li>시간표</li>
                    <li>좋아하는 노래</li>
                    <li>예상 키 계산하기</li>
                    <li>현재 시간</li>
                </ul>
            </ul>
        </section>
        <Side></Side>
    </div>
    <Bottom></Bottom>
    </body>
    </div>
  );
}

export default App;
