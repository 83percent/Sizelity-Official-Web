// Module
import axios from 'axios';
import { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';

// Context
import { ServerContext, UserContext } from '../../App';

const Login = ({history, match}) => {
    const id = match.params.id;

    // Context
    const server = useContext(ServerContext);
    const {setUser} = useContext(UserContext);

    // Ref
    const passwordInput = useRef(null);
    const caution = useRef(null);

    async function login(id, password) {
        const response = await axios({
            method: 'POST',
            url: `${server}/account/signin`,
            data : {username: id, password},
            timeout: 3500
        }).catch(err => {
            switch(err?.response?.status) {
                case 401 : {
                    event.setCaution("비밀번호가 일치하지 않습니다.");
                    break;
                }
                case 500 :
                default : {
                    event.setCaution("잠시 후 다시 시도해주세요.");
                    break;
                }
            }
        });
        if(response?.status === 200) {
            setUser(response.data);
            console.log("입력 데이터 : ", response.data);
            history.push(`/main`);

        }
    }
    const event = {
        setCaution : function(msg) {
            caution.current.innerHTML = msg;
        }
    }

    return (
        <section className="login">
            <div className="logo">
                <h1 className="en">Sizelity</h1>
                <p className="en">for shop</p>
            </div>
            <div id="inputFrame" className="en">
                <div>
                    <h3>Password</h3>
                    <div>
                        <input type="password" onKeyPress={(e) => {if(e.key === "Enter") login(id, passwordInput.current.value)}} ref={passwordInput}/>
                    </div>
                </div>
                <button onClick={() => login(id, passwordInput.current.value)}>Sign in</button>
                <p ref={caution}></p>
            </div>
            <ul>
                <Link to="/account/create" className="ko">아직 회원이 아니신가요? (삭제)</Link>
                <li className="ko">도움이 필요하신가요?</li>
            </ul>
        </section>
    )
}

export default Login;