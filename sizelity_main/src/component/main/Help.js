
// CSS
import '../../contents/css/main/Help.css';



const Help = () => {
    return (
        <main className="help">
            <section className="top">
                <div className="icon-wrapper">
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
                        <a href="mailto:shop@sizelity.com" className="en">
                            <p>shop@sizelity.com</p>
                        </a>
                    </li>
                    <li className="chat">
                        <h2>카카오톡</h2>
                        <a href="http://pf.kakao.com/_xfvrYs">
                            <p>채팅 상담</p>
                            <i className="material-icons">chevron_right</i>
                        </a>
                    </li>
                </ul>
                <div className="sub">
                    <p>문의 내용이 전화상담이 필요한 경우,</p>
                    <p>고객님의 통화 가능 시간 조율을 통해 전화상담이 이루어집니다.</p>
                </div>
            </section>
        </main>
    )
}

export default Help;