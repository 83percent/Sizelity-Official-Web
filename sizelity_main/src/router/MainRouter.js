import { Switch, Route } from "react-router";

// Component
import Preview from '../component/main/Preview';
import Reservation from '../component/main/Reservation';

// CSS
import '../contents/css/main/MainFormat.css';

const AccountRouter = () => {
    return (
        <div id="wrapper">
            <nav>
                <div className="logo-frame">
                    <div className="logo">
                        <i className="material-icons">local_offer</i>
                    </div>
                    
                </div>  
                <div className="blur-frame"></div>
            </nav>
            <Switch>
                <Route exact path="/" component={Preview} />
                <Route exact path="/main" component={Preview} />
                <Route path="/main/reservation" component={Reservation} />
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
export default AccountRouter;