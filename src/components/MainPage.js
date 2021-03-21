import React, {Component} from 'react';

class MainPage extends Component {
    render() {
      return (
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
      );
    }
  }

  export default MainPage;