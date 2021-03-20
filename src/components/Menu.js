import React, {Component} from 'react';

class Menu extends Component {
    render() {
      return (
        <nav>
            <ul id="menu">
                <li><a href="/about" onClick={function(e){
                    e.preventDefault();
                    this.props.onChangePage('about');
                }.bind(this)}>자기소개</a></li>
                <li><a href="timetable" onClick={function(e){
                    e.preventDefault();
                    this.props.onChangePage('timetable');
                }.bind(this)}>시간표</a></li>
                <li><a href="playlist" onClick={function(e){
                    e.preventDefault();
                    this.props.onChangePage('playlist');
                }.bind(this)}>플레이리스트</a></li>
            </ul>
        </nav>
      );
    }
  }

  export default Menu;