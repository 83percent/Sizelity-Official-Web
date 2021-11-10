import {Link} from 'react-router-dom';

import '../../contents/css/main/Intro.css';

import sampleImage from '../../contents/image/compare.png';
import FixedIconsLinearImage from '../../contents/image/fixed_icons_linear.png';
import AutoLink from '../../contents/image/Auto_Link_1.png';
import MyCloset from '../../contents/image/my_closet.png';
import AllCompare from '../../contents/image/all_compare.png';

const Introduce = () => {
    function faqToggle(target) {
        for(let i=0; i<5; ++i) {
            if(target.nodeName !== "LI") {
                target = target.parentElement;
            } else break;
        }
        if(target.nodeName !== "LI") return;
        target.classList.toggle("on");
    }
    return (
        <main className="intro">
            <section className="top">
                <h1>사이즈 고민?</h1>
                <h1>여기서 끝.</h1>
                <div>
                    <p>쇼핑몰 고객 80.2%의 고민, "사이즈 고민"</p>
                    <p>다른 쇼핑몰에서 구매한 고객의 사이즈 정보,</p>
                    <p>내 쇼핑몰 상품과 비교하고 최고의 사이즈 선택을 도와주세요.</p>
                    <p>반품률을 줄이고, 고객만족도는 높이고!</p>
                </div>
            </section>
            <section className="message" style={{padding: "2rem 0", marginBottom: "3rem"}}>
                <div className="center">
                    <p>문의 내용</p>
                    <p>(어제), 오전 10:24</p>
                </div>
                <div className="receive">
                    <div>
                        <p>사이즈 문의합니다.</p>
                        <p>키 163에 56kg 인데, 저한테 맞을까요?</p>
                    </div>
                    <div>
                        <p>제가 평소에 M 사이즈를 입긴하는데요.</p>
                        <p>저번에 다른 쇼핑몰에서 옷 주문했을 때, M 사이즈가 안 맞더라고요.</p>
                    </div>
                </div>
                <div className="send">
                    <div>
                        <p>문의 감사합니다.</p>
                        <p>문의하신 상품은 탄력성이 우수하기 때문에</p>
                        <p>평소 M 사이즈를 입었다면, M 사이즈 주문 시</p>
                        <p>충분히 맞을 것 같습니다.</p>
                    </div>
                </div>
                <div className="center">
                    <p>(오늘), 오후 04:57</p>
                </div>
                <div className="receive">
                    <div>
                        <p>배송왔는데... 안 맞아요;;</p>
                        <p>반품... 보낼게요...</p>
                    </div>
                </div>
                <div className="send">
                    <div>
                        <p>아 . . .</p>
                    </div>
                </div>
            </section>
            <section className="s1">
                <div className="center-title">
                    <h1>고객의 선택,</h1>
                    <h1>저희가 도와드릴게요.</h1>
                </div>
                <div className="big_logo">
                    <div>
                        <i className="material-icons">sell</i>
                        <h2>SIZELITY</h2>
                    </div>
                </div>
            </section>
            <ul className="list">
                <li className="center">
                    <h1>사이즈리티는 무엇을 할까요?</h1>
                    <p>사이즈리티는 고객이 이전 구매했던 옷을 담아 놓을 수 있는 옷장을 제공해요.</p>
                    <p>옷장의 옷은 언제든지 꺼내서 현재 보고 있는 상품과 비교할 수 있죠.</p>
                    <p>그것도 모든 쇼핑몰에서 어떤 상품이든.</p>
                </li>
                <li className="row">
                    <div>
                        <h1>모든 내 옷을 손안에</h1>
                        <h1>내 손안의 옷장.</h1>
                        <p>고객이 '언제, 어디서, 무엇을, 어떻게' 구매했는지 전혀 중요하지 않아요.</p>
                        <p>구매했던 옷의 정보를 모두 담을 수 있는 내 손안에 옷장.</p>
                        <p>언제든지 옷을 꺼내어 현재 보고 있는 상품의 사이즈와 비교해 맞는 사이즈를 주문할 수 있어요.</p>
                    </div>
                    <div className="image-frame">
                        <img src={MyCloset} className="s2" alt="내 손안의 옷장"/>
                    </div>
                </li>
                <li className="row">
                    <div className="stick image-frame">
                        <img className="s1" src={AllCompare} alt="쇼핑몰간 경계 없이 모두 비교"/>
                    </div>
                    <div>
                        <h1>다른 쇼핑몰에서 산 옷?</h1>
                        <h1>무엇이 중요헌디?</h1>
                        <p>쇼핑몰 간 경계 없이, 고객의 옷장 안에 들어있는 옷이라면 전부 다.</p>
                        <p>고객이 다른 쇼핑몰에서 산 옷을 내 쇼핑몰 상품과 비교.</p>
                        <p>어떻게? 터치 한 번으로.</p>
                    </div>
                    
                </li>
                <li className="row">
                    <div>
                        <h1>터치 한 번으로</h1>
                        <h1>고객의 옷과 사이즈비교.</h1>
                        <p>판매 중인 상품과 고객의 옷장을 터치 한 번으로 연결하는 방법.</p>
                        <p>1. 상세보기 화면에 사이즈리티로 이동하는 버튼 추가</p>
                        <p>그리고, 끝</p>
                        <p>터치 한 번으로 만족도는 높이고, 반품-교환은 줄이고 고객에게 최고의 경험을 선사해주세요.</p>
                    </div>
                    <div className="image-frame">
                        <img className="s1" src={AutoLink} alt="터치 한 번으로 만나는 사이즈 비교" />
                    </div>
                </li>
                <li className="row">
                    <div className="image-frame">
                        <img className="s2" src={sampleImage} alt="한눈에 비교"/>
                    </div>
                    <div>
                        <h1>한눈에 알 수 있는</h1>
                        <h1>사이즈 차이.</h1>
                        <p>당연하지만, 고객은 자신에게 맞는 사이즈를 찾아요.</p>
                        <p>그렇다면 무슨 사이즈를 구매하면 이 전에 샀던 사이즈와 유사한지 알려줘 볼까요?</p>
                        <p>고객의 실제 옷이 판매 중인 옷의 사이즈 중 어디쯤 위치하는지 보여주고, 사이즈 정보를 고객에게 쉽게 알려주세요.</p>
                    </div>
                </li>
            </ul>
            <article className="etc">
                <div>
                    <h1>내 쇼핑몰에 진행 중인 이벤트.</h1>
                    <h1>모두 알아야지.</h1>
                    <p>사실 쇼핑몰은 365일 이벤트 중.</p>
                    <p>사이즈리티는 혜택을 모아볼 수 있는 기능을 제공하고 있어요.</p>
                    <p>내 쇼핑몰에서 진행하는 다양한 혜택과 이벤트를 고객에게 알려보세요!</p>
                </div>
                <div>
                    <h1>고객의 옷장과 연결하는 다양한 방법.</h1>
                    <p>꼭 정식 쇼핑몰이 아니더라도 블로그, SNS, SMS 등 다양한 방법으로 사이즈비교 서비스를 고객에게 제공할 수 있어요.</p>
                    <p>내 상품과 사이즈 비교를 할 수 있는 링크 카드, 링크 주소, QR코드를 자동으로 생성하여 원하는 곳에 붙여넣는 것만으로 충분해요.</p>
                </div>
            </article>
            <section className="icon-design">
                <div>
                    <h1>당신의 쇼핑몰에 어울리는</h1>
                    <h1>사이즈리티 버튼을 직접.</h1>
                    <p>쇼핑몰은 <strong style={{backgroundColor: "#FF416C"}}>핑크색</strong> 사이즈비교 버튼은 <strong style={{backgroundColor: "#00966B"}}>초록색</strong> 잘 안어울리는데...?</p>
                    <p>내 쇼핑몰에 어울리는 색상을 골라 만드는 사이즈비교 버튼</p>
                </div>
                <div className="image">
                    <img src={FixedIconsLinearImage} alt="linear_icons"/>
                </div>
            </section>
            <article className="price-wrapper">
                <h1>6개월간 무료 체험해보세요.</h1>
                <Link to="/reservation">
                    <p>지금 등록하러 가기</p>
                    <i className="material-icons">chevron_right</i>
                </Link>

            </article>
            <section className="content">
                <div className="title" style={{paddingTop: "10rem", textAlign: "center"}}>
                    <h1 style={{fontSize: "3.1rem"}}>사이즈리티, 쇼핑몰에 날개를 달아줘.</h1>
                </div>
            </section>
            <section className="faq">
                <h1>궁금한게 있나요?</h1>
                <ul>
                    <li onClick={(e) => faqToggle(e.target)}>
                        <div className="question">
                            <h3>서비스를 이용하고 싶어요.</h3>
                            <i className="material-icons">keyboard_arrow_down</i>
                        </div>
                        <div className="answer">
                            <p>현재 쇼핑몰 등록 진행 중입니다. 쇼핑몰 등록을 완료해주시면, 입력해주신 연락처 및 이메일을 통해 자세한 절차를 안내해 드립니다.</p>
                        </div>
                    </li>
                    <li onClick={(e) => faqToggle(e.target)}>
                        <div className="question">
                            <h3>사이즈리티를 사용할 수 있는 조건이 있나요?</h3>
                            <i className="material-icons">keyboard_arrow_down</i>
                        </div>
                        <div className="answer">
                            <p>아닙니다. 옷 사이즈 비교가 필요한 곳에서 모두 사용할 수 있어요.</p>
                            <p>다만, 사이즈리티와 쇼핑몰을 자동으로 연결하는 기능을 사용하기 위해서는 독립된 쇼핑몰을 운영해야 해요.</p>
                            <p>독립된 쇼핑몰이 아니더라도, 사이즈리티에서 제공하는 다양한 방식을 통해 고객에게 서비스를 제공할 수 있어요.</p>
                        </div>
                    </li>
                    <li onClick={(e) => faqToggle(e.target)}>
                        <div className="question">
                            <h3>무료 체험 종료 후, 가격이 얼마인가요?</h3>
                            <i className="material-icons">keyboard_arrow_down</i>
                        </div>
                        <div className="answer">
                            <p>사이즈리티는 고객님의 쇼핑몰에서 사이즈 비교를 사용한 만큼만 결제하면됩니다.</p>
                            <p>'스탠다드 요금' 기준, 서비스 이용료 월  0원, 월 1,000회 무료 이후 1,000회 / 200원 (1회 / 0.2원) </p>
                            <p>'프리미엄 요금' 기준, 서비스 이용료 월  100,000원, 월 10,000회 무료 이후 1,000회 / 100원 (1회 / 0.1원) </p>
                        </div>
                    </li>
                    <li onClick={(e) => faqToggle(e.target)}>
                        <div className="question">
                            <h3>쇼핑몰에서 어떻게 사이즈비교를 한다는 거죠?</h3>
                            <i className="material-icons">keyboard_arrow_down</i>
                        </div>
                        <div className="answer">
                            <p>쇼핑몰 안에서 사이즈 비교가 이루어지는 것이 아닌, 쇼핑몰 내 상세보기 화면에 사이즈리티로 이동하는 버튼을 배치하는 것입니다.</p>
                            <p>고객이 사이즈비교 버튼을 누를 경우 자동으로 상품을 식별하여, 사이즈리티 페이지에서 비교가 이루어집니다.</p>
                        </div>
                    </li>
                    <li onClick={(e) => faqToggle(e.target)}>
                        <div className="question">
                            <h3>쇼핑몰 운영자는 어떤걸 해야하죠?</h3>
                            <i className="material-icons">keyboard_arrow_down</i>
                        </div>
                        <div className="answer">
                            <p>서비스 가입 후, 제공되는 파트너센터에서 상품들을 등록하시는 것이 전부입니다.</p>
                            <p>부가 기능 및 사용 방법은 가입 후 제공되는 사용법 문서에서 확인하실 수 있습니다.</p>
                        </div>
                    </li>
                </ul>
            </section>
        </main>
    )
}

export default Introduce;