import { Link } from 'react-router-dom';

// CSS
import '../../contents/css/main/ReservationSuccess.css'

const ReservationSuccess = () => {
    return (
        <main className="su">
            <section>
                <h1>사전등록이 완료되었어요.</h1>
                <div>
                    <p>8월중 서비스런칭 전 입력하신 이메일을 통해 관리자 페이지가 전달됩니다.</p>
                    <p>이메일에 포함된 고유 아이디 및 비밀번호를 통해 로그인 가능하며,</p>
                    <p>관리자 페이지를 통해 사전등록 혜택을 만나보세요.</p>
                </div>
                <ul>
                    <li>
                        <Link to="/ready">
                            <p>서비스 시작 전 준비사항</p>
                            <i className="material-icons">chevron_right</i>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <p>사이즈리티 더 알아보기</p>
                            <i className="material-icons">chevron_right</i>
                        </Link>
                    </li>
                </ul>
            </section>
        </main>
    )
}
export default ReservationSuccess;