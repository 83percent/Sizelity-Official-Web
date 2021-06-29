// Image
import MainImage from '../../contents/image/phone.png';

import '../../contents/css/main/Reservation.css';
import { Link } from 'react-router-dom';

const Reservation = () => {
    const event = {
        checkToogle : function(target) {
            target.parentElement.classList.toggle('check', target.checked)
        }
    }
    return (
        <main className="reservation">
            <section className="top">
                <div className="left">
                    <div className="main-title">
                        <h1>먼저 만나보는 사이즈리티.</h1>
                        <h1>사전등록 진행중.</h1>
                    </div>
                    <ul className="info-input">
                        <li>
                            <label>
                                <p>쇼핑몰 주소</p>
                                <input type="url" placeholder="http://www.example_shop.com" />
                            </label>
                        </li>
                        <li>
                            <label>
                                <p>대표자명</p>
                                <input type="text" placeholder="홍길동" />
                            </label>
                        </li>
                        <li>
                            <label>
                                <p>연락가능한 연락처</p>
                                <input type="text" placeholder="010XXXXXXXX" />
                            </label>
                        </li>
                        <li>
                            <label>
                                <p>확인가능한 이메일</p>
                                <input type="text" placeholder="email@example.com" />
                            </label>
                        </li>
                    </ul>
                    <ul className="checklist">
                        <li>
                            <label>
                                <i className="material-icons">check</i>
                                <p>사이즈리티 이용약관 동의 (필수)</p>
                                <Link>내용보기</Link>
                                <input type="checkbox" onChange={(e) => event.checkToogle(e.target)}/>
                            </label>
                        </li>
                        <li>
                            <label>
                                <i className="material-icons">check</i>
                                <p>개인정보 수집 및 이용 동의 (필수)</p>
                                <Link>내용보기</Link>
                                <input type="checkbox" onChange={(e) => event.checkToogle(e.target)}/>
                            </label>
                        </li>
                        <li>
                            <label>
                                <i className="material-icons">check</i>
                                <p>프로모션 정보 수신 동의 (선택)</p>                                
                                <input type="checkbox" onChange={(e) => event.checkToogle(e.target)}/>
                            </label>
                        </li>
                    </ul>
                </div>
                <div className="right">
                    <img src={MainImage} />
                </div>
            </section>
        </main>
    )
}

export default Reservation;