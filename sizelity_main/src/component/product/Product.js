import { NavLink, Route, Switch } from 'react-router-dom';

// Component
import ProductSearch from './ProductSearch';
import ProductAdd from './ProductAdd';
import ProductList from './ProductList';


// CSS
import '../../contents/css/main/Product.css';

const Product = () => {
    
    return (
        <article className="leftList2" id="product">
            <section className="side-tap">
                <div id="title">
                    <h1>상품 목록</h1>
                </div>
                <div className="list-frame">
                    <ul>
                        <li>
                            <NavLink exact to="/main/product">
                                <i className="material-icons">search</i>
                                <p>검색</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/main/product/add">
                                <i className="material-icons">add</i>
                                <p>상품 추가</p>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="list-frame">
                    <h1>모아보기</h1>
                    <ul>
                        <li>
                            <NavLink to="/main/product/list/all">
                                <i className="material-icons">list</i>
                                <p>전체목록</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={{
                                pathname:"/main/product/list/set",
                                state: {base : {name : "세트", value: "set"}}
                                }}>
                                <i className="material-icons">navigate_next</i>
                                <p>세트</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/main/product/list/outer">
                                <i className="material-icons">navigate_next</i>
                                <p>아우터</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/main/product/list/top">
                                <i className="material-icons">navigate_next</i>
                                <p>상의</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/main/product/list/onepiece">
                                <i className="material-icons">navigate_next</i>
                                <p>원피스</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/main/product/list/bottom">
                                <i className="material-icons">navigate_next</i>
                                <p>하의</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/main/product/list/skirt">
                                <i className="material-icons">navigate_next</i>
                                <p>치마</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/main/product/list/shoes">
                                <i className="material-icons">navigate_next</i>
                                <p>신발</p>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="list-frame">
                    <h1>유용한 기능</h1>
                    <ul>
                        <li>
                            <NavLink to="/main/product/expires">
                                <i className="material-icons">history</i>
                                <p>상품 만료 확인</p>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </section>
            
                <Switch>
                    <Route exact path="/main/product" component={ProductSearch} />
                    <Route exact path="/main/product/add" component={ProductAdd} />
                    <Route path="/main/product/list/:type" component={ProductList} />
                </Switch>
        </article>
    )
}

export default Product;