import React, {Component} from 'react';

class Contents extends Component {
    render() {
      return (
        <section>
            <h1>로그인</h1>
            <form method="post">
                <fieldset>
                    <legend>입력</legend>
                    <table>
                        <tr>
                            <td>ID</td>
                            <td><input type="text" name="id" required /></td>
                        </tr>
                        <tr>
                            <td>PW</td>
                            <td><input type="password" name="pw" required /></td>
                        </tr>
                    </table>
                    <input type = "submit" value = "로그인" />
                </fieldset>
            </form>
        </section>
      );
    }
  }

  export default Contents;