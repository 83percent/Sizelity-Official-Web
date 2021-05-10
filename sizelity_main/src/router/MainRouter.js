import { useContext } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import { UserContext } from "../App";

// Component
import HomeComp from '../component/main/Home';

// CSS
import '../contents/css/main/MainRouter.css';

const MainRouter = ({history}) => {
    // Context
    const {user} = useContext(UserContext);    
    console.log(user);
    //if(!user?._id || !user?.sname) 로그인 없이 접근 시 처리
    return (
        <section id="main">
            <aside>
                <header>
                    <div className="en">
                        <h1>Sizelity</h1>
                        <p>for shop</p>
                    </div>
                </header>
                <article className="ko">
                    <NavLink to="/main/">
                        <div></div>
                        <i className="material-icons">home</i>
                        <p>메인</p>
                    </NavLink>
                    <NavLink to="/main/product">
                        <div></div>
                        <i className="material-icons">home</i>
                        <p>상품</p>
                    </NavLink>
                </article>
                <footer>

                </footer>
            </aside>
            <Switch>
                <Route exact path="/main" component={HomeComp}/>
            </Switch>
        </section>
    )
}

export default MainRouter;