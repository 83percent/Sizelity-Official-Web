import { Link } from 'react-router-dom';

// image
import ShopAdminImage from '../../contents/image/shop_admin.png';
import ProductAddImage from '../../contents/image/product_add.png';
import LinkLinear from '../../contents/image/Linkbutton_image_linear.png';

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
                    console.log(productWrapper.current.getBoundingClientRect().top)
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
        },
        faqToggle : function(target) {
            for(let i=0; i<5; ++i) {
                if(target.nodeName !== "LI") {
                    target = target.parentElement;
                } else break;
            }
            if(target.nodeName !== "LI") return;
            target.classList.toggle("on");
        }
    }

    return (
        <main className="ready">
            <section className="top">
                <h1>사이즈리티 서비스를 위한 준비사항이 있어요.</h1>
                <div>
                    <p>쇼핑몰에 방문한 고객에게 터치한번으로 최적의 사이즈를 선택할 수 있게 하는 간단한 방법.</p>
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
                            <img src={ShopAdminImage} alt="computer" />
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
                            <img src={ProductAddImage} alt="computer" />
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
                </div>
                <div className="explain">
                    <h2>왜 링크 버튼이 필요한가요?</h2>
                    <p>쇼핑 중 바로 사이즈 비교를 할 수 있게 하기 위해서는 링크버튼이 필요해요.</p>
                    <p>또한 링크 버튼은 고객이 지금 보고있는 여러분의 쇼핑몰 상품을 자동으로 식별해서 사이즈 비교를 제공해요.</p>
                </div>
                <div className="link-url-frame">
                    <h2>'자동 링크 생성 모듈'을 상품 상세보기에 추가해주세요.</h2>
                    <p>어떤 위치, 방식 모두 상관없어요. 여러분의 쇼핑몰에 자유롭게 만들어보세요.</p>
                    <p>모듈을 추가할지 몰라도 괜찮아요. 언제든지 도와드릴게요.</p>
                    <img src={LinkLinear} alt="link_linear"/>
                </div>
                
            </section>
            <section className="faq">
                <div className="title">
                    <h1>궁금한게 있나요?</h1>
                </div>
                <ul>
                    <li onClick={(e) => event.faqToggle(e.target)}>
                        <div className="question">
                            <h3>관리자 링크를 받지 못했어요.</h3>
                            <i className="material-icons">keyboard_arrow_down</i>
                        </div>
                        <div className="answer">
                            <p>사전등록 하셨나요? 현재 서비스 오픈 전 입니다. 10월 중 서비스 오픈 전, 사전등록 하신 이메일로 관리자 링크를 보내드립니다.</p>
                        </div>
                    </li>
                    <li onClick={(e) => event.faqToggle(e.target)}>
                        <div className="question">
                            <h3>'상품 상세보기에 추가...'가 무슨말이에요?</h3>
                            <i className="material-icons">keyboard_arrow_down</i>
                        </div>
                        <div className="answer">
                            <p>사이즈리티 기능이 작동하려면 특정 상품 상세보기 화면에서 버튼을 눌러야지 기능을 지원합니다.</p>
                            <p>그러므로 굳이 상세보기 화면을 제외한 다른 곳에서 링크 버튼이 노출될 필요는 없습니다.</p>
                        </div>
                    </li>
                    <li onClick={(e) => event.faqToggle(e.target)}>
                        <div className="question">
                            <h3>링크 버튼은 왜 만들어야 하는거에요?</h3>
                            <i className="material-icons">keyboard_arrow_down</i>
                        </div>
                        <div className="answer">
                            <p>여러분의 쇼핑몰에서 고객이 쇼핑 중 다른 절차 없이 한번의 클릭으로 사이즈비교를 제공하기 위해서는 사이즈리티로 이동하는 링크가 꼭 필요해요.</p>
                        </div>
                    </li>
                    <li onClick={(e) => event.faqToggle(e.target)}>
                        <div className="question">
                            <h3>링크 버튼이 없으면 이용할 수 없나요?</h3>
                            <i className="material-icons">keyboard_arrow_down</i>
                        </div>
                        <div className="answer">
                            <p>아닙니다. 고객이 직접 여러분의 상품 주소를 사이즈리티에 입력을 통해서도 사이즈비교를 제공합니다.</p>
                            <p>다만, 고객의 사이즈비교를 클릭 한번으로 제공하기 위해서는 필요합니다.</p>
                        </div>
                    </li>
                    <li onClick={(e) => event.faqToggle(e.target)}>
                        <div className="question">
                            <h3>꼭 위 사진 처럼 링크 버튼을 만들어야 하나요?</h3>
                            <i className="material-icons">keyboard_arrow_down</i>
                        </div>
                        <div className="answer">
                            <p>아닙니다. 사이즈리티의 사이즈비교 서비스라는 것을 들어낼 수 있는 아이콘을 포함한 어떤 디자인 및 배치를 자유롭게 쇼핑몰에 맞게 하셔도 무관합니다.</p>
                        </div>
                    </li>
                    <li onClick={(e) => event.faqToggle(e.target)}>
                        <div className="question">
                            <h3>모듈을 추가 하는 방법을 몰라요.</h3>
                            <i className="material-icons">keyboard_arrow_down</i>
                        </div>
                        <div className="answer">
                            <p>사이즈리티 서비스 등록을 진행한 뒤 제공되는 이메일을 통해 모듈 추가 방법을 제공하고 있습니다.</p>
                            <p>그럼에도 어려움이 있다면 언제든지 도와드릴게요.</p>
                            <p>(스마트 스토어, 오픈마켓 등 특정 쇼핑몰의 경우 자동연결 모듈을 지원하지 않을 수 있습니다.)</p>
                        </div>
                    </li>
                </ul>
            </section>
        </main>
    )
}
export default Ready;