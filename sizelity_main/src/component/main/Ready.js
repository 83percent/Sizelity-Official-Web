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
                </div>
                
                <div className="link-url-frame">
                    <h2>아래의 링크로 이동하는 버튼을 쇼핑몰에 만들어주세요.</h2>
                    <p>생성된 버튼을 누르고 고객님들이 여러분의 상품 사이즈비교를 할거요.</p>
                    <div className="link-url en">
                        <p>https://www.sizelity.com/compare</p>
                    </div>
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
                            <p>사전등록 하셨나요? 현재 서비스 오픈 전 입니다. 8월 중 서비스 오픈 전, 사전등록 하신 이메일로 관리자 링크를 보내드립니다.</p>
                        </div>
                    </li>
                    <li onClick={(e) => event.faqToggle(e.target)}>
                        <div className="question">
                            <h3>링크 버튼은 왜 만들어야 하는거에요?</h3>
                            <i className="material-icons">keyboard_arrow_down</i>
                        </div>
                        <div className="answer">
                            <p>저희 사이즈리티는 설치 없는 서비스입니다. 업주님의 쇼핑몰에서 쇼핑하는 고객님들이 쇼핑 중 터치 또는 클릭 한번으로 손쉽게 지금 보는 상품의 사이즈 비교를 지원하기 위해서 필요합니다.</p>
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
                            <h3>링크 버튼을 만들 줄 몰라요.</h3>
                            <i className="material-icons">keyboard_arrow_down</i>
                        </div>
                        <div className="answer">
                            <p>죄송합니다. 너무 다양한 쇼핑몰 운영솔루션으로 인해, 구체적인 방법을 안내해드리기 어렵습니다.</p>
                            <p>하지만, 사용하시는 운영 솔루션 업체에 "쇼핑몰 오른쪽 하단에 고정되는 링크 버튼" 과 관련된 문의를 하시면됩니다.</p>
                            <p>(스마트 스토어를 제외한 모든 운영솔루션에서 해당 기능 지원 중)</p>
                        </div>
                    </li>
                    <li onClick={(e) => event.faqToggle(e.target)}>
                        <div className="question">
                            <h3>'상품 상세보기에 링크버튼을 배치...'가 무슨말이에요?</h3>
                            <i className="material-icons">keyboard_arrow_down</i>
                        </div>
                        <div className="answer">
                            <p>사이즈리티 기능이 작동하려면 하나의 상품, 특정 상품 상세보기 화면에서 버튼을 눌러야지 기능을 지원합니다.</p>
                            <p>그러므로 굳이 상세보기 화면을 제외한 다른 곳에서 링크 버튼이 노출될 필요는 없습니다.</p>
                        </div>
                    </li>
                </ul>
            </section>
        </main>
    )
}
export default Ready;