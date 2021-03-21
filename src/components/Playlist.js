import React, {Component} from 'react';

class Contents extends Component {
    render() {
      return (
        <section>
            <h1>플레이리스트</h1>
            <hr />
            <h2>유튜브</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/VpmvNEUXkQ0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/9MZInS3ShhQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h2>mp3 파일</h2>
            <audio controls="controls">
            <source src="mp3/Kalimba.mp3" type="audio/mp3" />
            </audio>
            <h2>mp4 파일</h2>
            <div>
                <video controls="controls" poster="http://placehold.it/640x360">
                <source src="video/Wildlife.mp4" type="video/mp4" />
                </video>
            </div>
        </section>
      );
    }
  }

  export default Contents;