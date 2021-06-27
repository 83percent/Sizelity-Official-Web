import { useContext, createContext, useRef } from "react";
import { Switch, Route, NavLink, Link } from "react-router-dom";
import { UserContext } from "../App";

// Component
import HomeComp from '../component/shop/Home';
import ProfileComp from '../component/shop/Profile';
import AccountFatchComp from '../component/shop/profile/Fatch';
import RequestList from '../component/shop/request/RequestList';
import ProductComp from '../component/product/Product';

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
            <section id="shop">
                <aside>
                    <header>
                        <div>
                            <i className="material-icons">local_offer</i>
                        </div>
                    </header>
                    
                    <article className="ko">
                        <NavLink exact to="/shop">
                            <div>
                                <i className="material-icons">home</i>
                            </div>
                        </NavLink>
                        <NavLink to="/shop/account">
                            <div>
                                <i className="material-icons">person</i>
                            </div>
                        </NavLink>
                        <NavLink to="/shop/product">
                            <div>
                                <i className="material-icons">checkroom</i>
                            </div>
                        </NavLink>
                        <NavLink to="/shop/request">
                            <div>
                                <i className="material-icons">new_label</i>
                            </div>
                        </NavLink>
                    </article>
                    <footer>

                    </footer>
                </aside>
                
                <Switch>
                    <Route exact path="/shop" component={HomeComp}/>
                    <Route exact path="/shop/account" component={ProfileComp}/>
                    <Route exact path="/shop/account/fatch" component={AccountFatchComp}/>
                    <Route path="/shop/product" component={ProductComp}/>
                    <Route exact path="/shop/request" component={RequestList}/>
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