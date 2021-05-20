import { useContext, createContext, useRef } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import { UserContext } from "../App";

// Component
import HomeComp from '../component/main/Home';
import ProfileComp from '../component/main/Profile';
import AccountFatchComp from '../component/main/profile/Fatch';

// CSS
import '../contents/css/main/MainRouter.css';
import '../contents/css/main/Wrapper.css';

export const AlertToggle = createContext(null);

const MainRouter = () => {
    // Context
    const {user} = useContext(UserContext);
    //if(!user?._id || !user?.sname) 로그인 없이 접근 시 처리

    // Ref
    const cautionWrapper = useRef(null);
    const alertCaution = useRef(null);
    const alert = {
        toggle : function(toggle, msg, type) {
            const wrapperClass = cautionWrapper.current.classList;
            if(toggle) {
                if(!wrapperClass.contains("off")) {
                    wrapperClass.add("off");
                    setTimeout(() => {
                        if(msg != undefined) {
                            alertCaution.current.innerHTML = msg;
                        }
                        switch(type) {
                            case 'error': {
                                alertCaution.current.style.color = '#ff0000';
                                break;
                            }
                            case 'normal' : {
                                alertCaution.current.style.color = '#000000';
                                break;
                            }
                            case 'good' : {
                                alertCaution.current.style.color = '#00966B';
                                break;
                            }
                            default :{}
                        }
                        wrapperClass.remove("off");
                    }, 350);
                } else {
                    if(msg != undefined) {
                        alertCaution.current.innerHTML = msg;
                    }
                    switch(type) {
                        case 'error': {
                            alertCaution.current.style.color = '#ff0000';
                            break;
                        }
                        case 'normal' : {
                            alertCaution.current.style.color = '#000000';
                            break;
                        }
                        case 'good' : {
                            alertCaution.current.style.color = '#00966B';
                            break;
                        }
                        default :{}
                    }
                    wrapperClass.remove("off");
                }
                
            } else {
                wrapperClass.add("off");
            }
        } // toggle
    }
    return (
        <AlertToggle.Provider value={alert.toggle}>
            <section id="main">
                <aside>
                    <header>
                        <div className="en">
                            <h1>Sizelity</h1>
                            <p>for shop</p>
                        </div>
                    </header>
                    
                    <article className="ko">
                        <NavLink exact to="/main">
                            <div></div>
                            <i className="material-icons">home</i>
                            <p>메인</p>
                        </NavLink>
                        <NavLink to="/main/account">
                            <div></div>
                            <i className="material-icons">person</i>
                            <p>내 계정</p>
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
                    <Route exact path="/main/account" component={ProfileComp}/>
                    <Route exact path="/main/account/fatch" component={AccountFatchComp}/>
                </Switch>
                <nav id="alert-wrapper" className="off" ref={cautionWrapper}>
                    <div id="alert-frame">
                        <i className="material-icons" onClick={() => alert.toggle(false)}>close</i>
                        <div>
                            <p ref={alertCaution}></p>
                        </div>
                    </div>
                </nav>
            </section>
        </AlertToggle.Provider>
    )
}

export default MainRouter;