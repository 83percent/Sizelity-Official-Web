import { useEffect, useRef } from "react";
import { Switch, Route } from "react-router";
import { NavLink, Link } from "react-router-dom";

// Component
import Preview from '../component/main/Preview';
import Reservation from '../component/main/Reservation';
import ReservationSuccess from '../component/main/ReservationSuccess';
import Ready from '../component/main/Ready';
import FAQ from '../component/main/FAQ';
import Intro from '../component/main/Introduce';
import Help from '../component/main/Help';

// CSS
import '../contents/css/main/MainFormat.css';

const MainRouter = () => {
    const NavFrame = useRef(null);
    useEffect(() => {
        window.scrollTo(0,0);
        window.addEventListener('scroll', function() {
            NavFrame.current.classList.remove('on');
        }, {once:true});
    });
    return (
        <div id="wrapper">
            <nav>
                <div className="logo-frame on" ref={NavFrame}>
                    <Link to="/" className="logo">
                        <i className="material-icons">local_offer</i>
                    </Link>
                    <ul>
                        <li>
                            <NavLink exact to="/intro">서비스 소개</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/ready">준비사항</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/main/reservation">사전등록</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/help">고객센터</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/faq">자주 묻는 질문</NavLink>
                        </li>
                        
                    </ul>
                </div>
                <div className="blur-frame"></div>
            </nav>
            <Switch>
                <Route exact path="/" component={Preview} />
                <Route exact path="/main" component={Preview} />
                <Route exact path="/main/reservation" component={Reservation} />
                <Route exact path="/main/reservation/success" component={ReservationSuccess} />
                <Route path="/ready" component={Ready} />
                <Route path="/help" component={Help} />
                <Route path="/faq" component={FAQ} />
                <Route path="/intro" component={Intro} />
            </Switch>
            <footer>
                <address>
                    <strong>사이즈리티</strong>
                    <ul>
                        <li>
                            <p>사업자 등록번호 : 000-00-00000</p>
                            <p>대표자 : 이재훈</p>
                        </li>
                        <li>
                            <p>통신판매업 신고번호 : 2021-경기수원-00000</p>
                        </li>
                        <li>
                            <p>경기 수원시 권선구 서수원로 589</p>
                        </li>
                    </ul>
                </address>
            </footer>
        </div>
    )
}
export default MainRouter;