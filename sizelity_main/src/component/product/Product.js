import { NavLink, Route, Switch } from 'react-router-dom';

// Component
import ProductSearch from './ProductSearch';
import ProductAdd from './ProductAdd';
import ProductList from './ProductList';
import ProductExpires from './ProductExpires';


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
                            <NavLink exact to="/shop/product">
                                <i className="material-icons">search</i>
                                <p>검색</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/shop/product/add">
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
                            <NavLink to="/shop/product/list/all">
                                <i className="material-icons">list</i>
                                <p>전체목록</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={{
                                pathname:"/shop/product/list/set",
                                state: {base : {name : "세트", value: "set"}}
                                }}>
                                <i className="material-icons">navigate_next</i>
                                <p>세트</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/shop/product/list/outer">
                                <i className="material-icons">navigate_next</i>
                                <p>아우터</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/shop/product/list/top">
                                <i className="material-icons">navigate_next</i>
                                <p>상의</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/shop/product/list/onepiece">
                                <i className="material-icons">navigate_next</i>
                                <p>원피스</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/shop/product/list/bottom">
                                <i className="material-icons">navigate_next</i>
                                <p>하의</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/shop/product/list/skirt">
                                <i className="material-icons">navigate_next</i>
                                <p>치마</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/shop/product/list/shoes">
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
                            <NavLink to="/shop/product/expires">
                                <i className="material-icons">history</i>
                                <p>상품 만료 확인</p>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </section>
            
                <Switch>
                    <Route exact path="/shop/product" component={ProductSearch} />
                    <Route exact path="/shop/product/add" component={ProductAdd} />
                    <Route path="/shop/product/list/:type" component={ProductList} />
                    <Route exact path="/shop/product/expires" component={ProductExpires} />
                </Switch>
        </article>
    )
}

export default Product;