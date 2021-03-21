import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu';
import SideMenu from './components/SideMenu';
import MainPage from './components/MainPage';
import About from './components/About';
import Timetable from './components/Timetable';
import Playlist from './components/Playlist';
import Login from './components/Login';
import Register from './components/Register';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page:'main'
    }
  }
  getContent() {
    var _section = null;
    if(this.state.page === 'main') {
      _section = <MainPage></MainPage>
    }
    else if(this.state.page === 'about') {
      _section = <About></About>
    }
    else if(this.state.page === 'timetable') {
      _section = <Timetable></Timetable>
    }
    else if(this.state.page === 'playlist') {
      _section = <Playlist></Playlist>
    }
    else if(this.state.page === 'login') {
      _section = <Login></Login>
    }
    else if(this.state.page === 'register') {
      _section = <Register></Register>
    }

    return _section;
  }
  render () {
    return (
      <div className="App">
        <body>
          <header>
            <span id="logo"><a href="../">정하림</a></span>
          </header>
          <Menu onChangePage={function(_page){
            if(_page === 'about') {
              this.setState({
                page:'about'
              })
            }
            else if(_page === 'timetable') {
              this.setState({
                page:'timetable'
              })
            }
            else if(_page === 'playlist') {
              this.setState({
                page:'playlist'
              })
            }
          }.bind(this)}> 
          </Menu>
          <div id="main">
          <SideMenu onChangePage={function(_page){
            if(_page === 'login') {
              this.setState({
                page:'login'
              })
            }
            else if(_page === 'register') {
              this.setState({
                page:'register'
              })
            }
          }.bind(this)
          }></SideMenu>
          {this.getContent()}
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
