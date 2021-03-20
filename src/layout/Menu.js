import React, {Component} from 'react';
class Menu extends Component {
    render() {
        return (
            <nav>
                <ul id="menu">
                    <li><a href="about_me.php">자기소개</a></li>
                    <li><a href="tech.php">기술정리</a></li>
                    <li><a href="timetable.php">시간표</a></li>
                    <li><a href="playlist.php">플레이리스트</a></li>
                    <li><a href="stature.php">예상 키 계산하기</a></li>
                    <li><a href="now_time.php">현재 시간</a></li>
                </ul>
            </nav>
        );
    }
}
export default Menu;