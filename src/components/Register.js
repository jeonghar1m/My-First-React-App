import React, {Component} from 'react';

class Contents extends Component {
    render() {
      return (
        <section>
            <h1>회원가입</h1>
            <hr />
            <form method="post">
                <fieldset>
                    <legend>입력 양식</legend>
                    <table>
                        <tr>
                            <td>ID</td>
                            <td><input type="text" name="id" placeholder="사용 할 ID를 입력해주세요." required /></td>
                        </tr>
                        <tr>
                            <td>PW</td>
                            <td><input type="password" name="pw" placeholder="6자리 이상의 사용할 비밀번호를 입력해주세요." required /></td>
                        </tr>
                        <tr>
                            <td>이름</td>
                            <td><input type="text" name="name" placeholder="이름을 입력해주세요." required /></td>
                        </tr>
                        <tr>
                            <td>성별</td>
                            <td><select name="sex">
                            <option value="male">남성</option>
                            <option value="female">여성</option>
                            </select>
                            </td>
                        </tr>
                    </table>
                    <input type = "submit" value = "가입" />
                </fieldset>
            </form>
        </section>
      );
    }
  }

  export default Contents;