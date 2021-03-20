import React, {Component} from 'react';
class Side extends Component {
    render() {
        return (
            <aside>
                <h4>메뉴</h4>
                <ul>
                    <li><a href="login.php">로그인</a></li>
                    <li><a href="register.php">회원가입</a></li>
                    <li><a href="http://hongik.ac.kr" target="_blank">홍익대학교</a></li>
                </ul>
            </aside>
        );
    }
}
export default Side;