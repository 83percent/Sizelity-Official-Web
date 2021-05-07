// Module
import { useContext, useRef } from 'react';

// Context
import { ServerContext } from '../../App';

// CSS
import '../../contents/css/login/Login.css';

const Login = () => {

    // Context
    const server = useContext(ServerContext);

    // Ref
    const idInput = useRef(null);
    const passwordInput = useRef(null);
    async function login(id, password) {
        
    }
    return (
        <section id="login">
            <div className="logo">
                <h1 className="en">Sizelity</h1>
                <p className="en">for shop</p>
            </div>
            <div id="inputFrame" className="en">
                <div>
                    <h3>ID</h3>
                    <div>
                        <input type="text" ref={idInput}/>
                    </div>
                </div>
                <div>
                    <h3>Password</h3>
                    <div>
                        <input type="password" ref={passwordInput}/>
                    </div>
                </div>
                <button onClick={() => login(idInput.current.value, passwordInput.current.value)}>Sign in</button>
            </div>
            <ul>
                <li className="ko">아직 회원이 아니신가요?</li>
                <li className="ko">도움이 필요하신가요?</li>
            </ul>
        </section>
    )
}

export default Login;