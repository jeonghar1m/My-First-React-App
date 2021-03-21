import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu';
import Contents from './components/Contents'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: [
        {id:1, title:"자기소개"},
        {id:2, title:"시간표"},
        {id:3, title:"플레이리스트"}
      ]
    }
  }
  render () {
    return (
      <div className="App">
        <body>
          <header>
            <span id="logo"><a href="../">정하림</a></span>
          </header>
          <Menu></Menu>
          <div id="main">
            <Contents title="Main Page"></Contents>
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
    )
  }
}

export default App;
