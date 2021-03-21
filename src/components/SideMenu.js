import React, {Component} from 'react';

class SideMenu extends Component {
    render() {
      return (
        <aside>
            <h4>메뉴</h4>
            <ul>
                <li><a href="/login" onClick={function(e) {
                    e.preventDefault();
                    this.props.onChangePage('login');
                }.bind(this)}>로그인</a></li>
                <li><a href="/register" onClick={function(e) {
                    e.preventDefault();
                    this.props.onChangePage('register');
                }.bind(this)}>회원가입</a></li>
                <li><a href="http://hongik.ac.kr" target="_blank">홍익대학교</a></li>
            </ul>
        </aside>
      );
    }
  }

  export default SideMenu;