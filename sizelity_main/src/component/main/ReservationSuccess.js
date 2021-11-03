import { Link } from 'react-router-dom';

// CSS
import '../../contents/css/main/ReservationSuccess.css'

const ReservationSuccess = () => {
    return (
        <main className="su">
            <section>
                <h1>환영합니다</h1>
                <h1>쇼핑몰 등록이 완료되었어요.</h1>
                <div>
                    <p>신청해주신 쇼핑몰의 사이즈리티 도입을 위해 필요한 절차가 완료되면</p>
                    <p>입력하신 이메일을 통해 관리자 페이지 정보가 전달됩니다.</p>
                    <p>전달되는 메일에 첨부된 내용을 통해 파트너센터의 고유 링크 및 초기 비밀번호를 제공합니다.</p>
                </div>
                <ul>
                    <li>
                        <Link to="/">
                            <p>사이즈리티 더 알아보기</p>
                            <i className="material-icons">chevron_right</i>
                        </Link>
                    </li>
                    <li>
                        <a href="http://pf.kakao.com/_xfvrYs">
                            <p>카카오톡 파트너문의 채널</p>
                            <i className="material-icons">chevron_right</i>
                        </a>
                    </li>
                </ul>
            </section>
        </main>
    )
}
export default ReservationSuccess;