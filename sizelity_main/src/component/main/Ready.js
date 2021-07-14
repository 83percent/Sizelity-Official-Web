import { Link } from 'react-router-dom';

// image
import Com from '../../contents/image/computer2.png';
import Phone from '../../contents/image/phone.png';

// CSS
import '../../contents/css/main/Ready.css';
import { useRef } from 'react';
const Ready = () => {
    // Ref
    const productWrapper = useRef(null);
    const linkWrapper = useRef(null);

    const event = {
        scrollMove : function(type) {
            switch(type) {
                case 'product' : {
                    window.scrollTo(0, productWrapper.current.getBoundingClientRect().top);
                    break;
                }
                case 'link' : {
                    window.scrollTo(0, linkWrapper.current.getBoundingClientRect().top);
                    break;
                }
                default : {
                    return null;
                }
            }
        }
    }

    return (
        <main className="ready">
            <section className="top">
                <h1>사이즈리티 서비스를 위한</h1>
                <h1>준비사항이 있어요.</h1>
                <div>
                    <p>여러분의 쇼핑몰에서 고객님들이 사이즈리티 서비스를</p>
                    <p>터치한번으로 사용할 수 있는 간단한 방법.</p>
                </div>
            </section>
            <section className="nav">
                <ul>
                    <li>
                        <div className='icon-frame'>
                            <i className="material-icons">checkroom</i>
                        </div>
                        <div>
                            <h1>판매중인 상품정보 입력.</h1>
                            <p>고객에게 상품 정보를 전달하기 위해 잊지말고 추가해주세요.</p>
                        </div>
                        <button onClick={() => event.scrollMove('product')}>
                            <p>상품정보 입력 더 알아보기</p>
                            <i className="material-icons">chevron_right</i>
                        </button>
                    </li>
                    <li>
                        <div className='icon-frame'>
                            <i className="material-icons">link</i>
                        </div>
                        <div>
                            <h1>사이즈리티 링크 버튼.</h1>
                            <p>쇼핑몰에서 사이즈리티 서비스로 이동하는 링크 버튼</p>
                            <p>고객의 클릭 또는 터치한번으로 고객의 옷장과 연결.</p>
                        </div>
                        <button onClick={() => event.scrollMove('link')}>
                            <p>링크 버튼 준비 더 알아보기</p>
                            <i className="material-icons">chevron_right</i>
                        </button>
                    </li>
                </ul>
            </section>
            <section className="product" ref={productWrapper}>
                <div className="title">
                    <div className="icon-frame">
                        <i className="material-icons">checkroom</i>
                    </div>
                    <h1>판매중인 상품정보 입력.</h1>
                </div>
                <ul>
                    <li>
                        <div className="text-right">
                            <div>
                                
                                <h1>1. 관리자 페이지로 이동.</h1>
                                <p>서비스 가입시 입력하신 이메일로 전달되는 쇼핑몰 관리자 로그인 링크를</p>
                                <p>통해 사이즈리티 쇼핑몰 관리자 페이지로 이동합니다.</p>
                            </div>
                            <div className="help-link-frame">
                                <Link to="/">
                                    <p>관리자 링크를 받지 못했어요</p>
                                    <i className="material-icons">chevron_right</i>
                                </Link>
                            </div>
                            
                        </div>
                        <div className="left-image">
                            <img src={Com} alt="computer" />
                        </div>
                    </li>
                    <li>
                        <div className="text-right">
                            <div>
                                
                                <h1>2. 상품추가 탭.</h1>
                                <p>[메뉴탭]-[상품목록]-[상품추가] 로 이동,</p>
                                <p>추가할 상품의 주소를 입력 후, 상품 정보입력 및 저장.</p>
                            </div>  
                        </div>
                        <div className="left-image">
                            <img src={Com} alt="computer" />
                        </div>
                    </li>
                </ul>
            </section>
            <section className="link" ref={linkWrapper}>
                <div className="title">
                    <div className="icon-frame">
                        <i className="material-icons">link</i>
                    </div>
                    <h1>사이즈리티 링크 버튼.</h1>
                    <h2></h2>
                </div>
                <div>
                    
                </div>
            </section>
        </main>
    )
}
export default Ready;