import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <body>
        <header>
          <span id="logo"><a href="../">정하림</a></span>
        </header>
        <Menu></Menu>
        <div id="main">
          <section>
            <h1>Main Page</h1>
            <hr />
            <p>My First React Web</p>
            <h2>사이트맵</h2>
            <ul>
              <li>메인페이지</li>
              <ul>
                <li>자기소개</li>
                <li>시간표</li>
                <li>좋아하는 노래</li>
              </ul>
            </ul>
          </section>
          <aside>
            <h4>메뉴</h4>
            <ul>
              <li><a href="login.php">로그인</a></li>
              <li><a href="register.php">회원가입</a></li>
              <li><a href="http://hongik.ac.kr" target="_blank">홍익대학교</a></li>
            </ul>
          </aside>
        </div>
        <footer>
          <div class="mail">Mail: <a href="mailto:harim97714@mail.hongik.ac.kr">harim97714@mail.hongik.ac.kr</a></div>
          <div id="copy">&copy; 2021 정하림 All rights reserved</div>
        </footer>
      </body>
    </div>
  );
}

export default App;
