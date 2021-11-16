import { useEffect, useRef } from "react";
import { Switch, Route } from "react-router";
import { NavLink, Link } from "react-router-dom";

// Component
import Preview from '../component/main/Preview';
import Reservation from '../component/main/Reservation';
import ReservationSuccess from '../component/main/ReservationSuccess';
import Intro from '../component/main/Introduce';
import Help from '../component/main/Help';
import TermsRouter from "./TermsRouter";

// CSS
import '../contents/css/main/MainFormat.css';
import Profit from "../component/main/Profit";

const MainRouter = () => {
    const NavFrame = useRef(null);
    useEffect(() => {
        window.scrollTo(0,0);
        window.addEventListener('scroll', function() {
            NavFrame.current.classList.remove('on');
        }, {once:true});
        if(NavFrame.current.classList.contains('on')) {
            NavFrame.current.classList.remove('on');
        }
    });
    return (
        <div id="wrapper">
            <nav className="top-nav">
                <div className="logo-frame" ref={NavFrame} onClick={() => NavFrame.current.classList.remove('on')}>
                    <Link to="/" className="logo">
                        <i className="material-icons">local_offer</i>
                    </Link>
                    <ul>
                        <li>
                            <NavLink exact to="/intro">서비스 소개</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/profit">수익 배분 정책</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/reservation">쇼핑몰 등록</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/help">문의</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <nav className="talk-nav">
                <a href="http://pf.kakao.com/_xfvrYs/chat" rel="noreferrer" target="_blank" title="카카오톡 문의">
                    <i className="material-icons">chat_bubble</i>
                </a>
            </nav>
            <div className="menu-btn" onClick={() => NavFrame.current.classList.toggle('on')}>
                <i className="material-icons">menu</i>
            </div>
            <Switch>
                <Route exact path="/" component={Preview} />
                <Route path="/intro" component={Intro} />
                <Route exact path="/profit" component={Profit} />
                <Route exact path="/reservation" component={Reservation} />
                <Route exact path="/reservation/success" component={ReservationSuccess} />
                <Route exact path="/terms/:cate" component={TermsRouter} />
                <Route path="/help" component={Help} />
            </Switch>
            <footer>
                <ul>
                    <li>
                        <h3>서비스</h3>
                        <div>
                            <Link to="/intro">서비스 소개</Link>
                            <Link to="/intro">수익 분배 정책</Link>
                            <Link to="/reservation">쇼핑몰 등록</Link>
                        </div>
                    </li>
                    <li>
                        <h3>고객지원</h3>
                        <div>
                            <Link to="/help">고객센터</Link>
                        </div>
                    </li>
                </ul>
                <address>
                    <strong>사이즈리티</strong>
                    <ul>
                        <li>
                            <p>사업자 등록번호 : 415-38-01034</p>
                            <p>대표자 : 이재훈</p>
                        </li>
                        <li>
                            <p>경기 수원시 권선구 서수원로 589</p>
                        </li>
                    </ul>
                </address>
                <div>
                    <p>Copyright By Sizelity.</p>
                    <ul>
                        <li>
                            <Link to="/terms/service">서비스 이용약관</Link>
                        </li>
                        <li>
                            <Link to="/terms/notice">서비스 지원업체 고지사항</Link>
                        </li>
                        <li>
                            <Link to="/terms/privacy">개인정보 처리방침</Link>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}
export default MainRouter;