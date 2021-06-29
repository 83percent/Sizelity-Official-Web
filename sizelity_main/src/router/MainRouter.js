import { useEffect } from "react";
import { Switch, Route } from "react-router";
import { Link } from "react-router-dom";

// Component
import Preview from '../component/main/Preview';
import Reservation from '../component/main/Reservation';
import ReservationSuccess from '../component/main/ReservationSuccess';

// CSS
import '../contents/css/main/MainFormat.css';

const MainRouter = () => {
    useEffect(() => {
        window.scrollTo(0,0);
    });
    return (
        <div id="wrapper">
            <nav>
                <div className="logo-frame">
                    <Link to="/" className="logo">
                        <i className="material-icons">local_offer</i>
                    </Link>
                    
                </div>  
                <div className="blur-frame"></div>
            </nav>
            <Switch>
                <Route exact path="/" component={Preview} />
                <Route exact path="/main" component={Preview} />
                <Route exact path="/main/reservation" component={Reservation} />
                <Route exact path="/main/reservation/success" component={ReservationSuccess} />
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