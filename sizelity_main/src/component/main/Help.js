import { Link } from 'react-router-dom';

// CSS
import '../../contents/css/main/Help.css';



const Help = () => {
    return (
        <main className="help">
            <section className="top">
                <div class="icon-wrapper">
                    <div className="icon-frame">
                        <i className="material-icons">support_agent</i>
                    </div>
                </div>
                <ul>
                    <li>
                        <h2>전화</h2>
                        <p>미운영</p>
                    </li>
                    <li className="email">
                        <h2>이메일</h2>
                        <a herf="mailto:sizelity@naver.com" className="en">
                            <p>sizelity@naver.com</p>
                        </a>
                    </li>
                    <li className="chat">
                        <h2>카카오톡</h2>
                        <a herf="http;//www.sizelity.com">
                            <p>채팅 상담</p>
                            <i className="material-icons">chevron_right</i>
                        </a>
                    </li>
                </ul>
                <div className="sub">
                    <p>문의 내용이 전화상담이 필요한 경우,</p>
                    <p>고객님의 통화가능 시간 조율을 통해 전화상담이 이루워집니다.</p>
                </div>
            </section>
        </main>
    )
}

export default Help;