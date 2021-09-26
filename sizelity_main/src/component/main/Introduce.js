import {Link} from 'react-router-dom';

import '../../contents/css/main/Intro.css';

import sampleImage from '../../contents/image/compare.png';
import FixedIconsLinearImage from '../../contents/image/fixed_icons_linear.png';
import PhoneBook from '../../contents/image/Phone_NoteBook.png';
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
                <h1>사이즈 고민 이제 그만.</h1>
                <div>
                    <p>사이즈문제로 교환과 환불이 잦아 고민인 쇼핑몰 여러분</p>
                    <p>모두 집중.</p>
                </div>
            </section>
            <section className="content col" style={{background : "#f5f5f5", padding: "5rem 0", marginBottom: "3rem"}}>
                <div className="title">
                    <i className="material-icons">mood_bad</i>
                    <h1>"도대체 나는 무슨 사이즈를 사야하는거야?"</h1>
                    <p>쇼핑몰 의류 구매시 80.2%가 불편해 하는 문제.</p>
                </div>
            </section>
            <section className="content row link">
                <div className="left image">
                    <img src={PhoneBook} alt="closet"/>
                </div>
                <div className="right" >
                    <div className="title">
                        <h1>터치한번으로</h1>
                        <h1>사이즈 비교 서비스.</h1>
                        <p>사이즈리티 사이즈비교 서비스는 쇼핑중인 고객님이</p>
                        <p>쇼핑몰에 배치된 버튼을 누르는 것만으로 사용할 수 있어요.</p>
                        <p>그렇다면, 쇼핑몰에 링크버튼이 필요하겠죠?</p>
                    </div>
                </div>
            </section>
            <section className="content row closet">
                <div className="left">
                    <div className="title">
                        <h1>모든 내 옷을 손안에</h1>
                        <h1>내 손안의 옷장.</h1>
                        <p>자신의 옷과 비교를 하기 위해 사용자의 옷장을 만들어 옷을 보관해요.</p>
                        <p>비교할 나의 옷을 옷장에서 선택하여 사이즈비교를 할 수 있어요.</p>
                    </div>
                </div>
                <div className="right image">
                    <img src={MyCloset} alt="closet"/>
                </div>
            </section>
            
            <section className="content row compare">
                <div className="left image">
                    <img src={sampleImage} alt="closet"/>
                </div>
                <div className="right">
                    <div className="title">
                        <h1>한 눈에 알 수 있는</h1>
                        <h1>쇼핑몰 옷과의 차이.</h1>
                        <p>여러분의 상품 사이즈 정보를 고객에게 쉽게 알려주세요.</p>
                        <p>고객의 옷과 비교하여 부위별 사이즈 차이를 쉽게 알 수 있어요.</p>
                    </div>
                </div>
            </section>
            <section className="content row all_compare">
                <div className="left">
                    <div className="title">
                        <h1>언제, 어디서나</h1>
                        <h1>쇼핑몰간 경계없이.</h1>
                        <p>고객이 어느 쇼핑몰에서 옷을 비교하든 상관없어요.</p>
                        <p>여러분들이 등록한 상품의 사이즈 정보가</p>
                        <p>사이즈리티를 통해 공유되기에 고객은 쇼핑몰간 제약없이</p>
                        <p>다른 쇼핑몰에서 산 옷도 여러분의 쇼핑몰 상품과 비교가 가능하죠.</p>
                    </div>
                </div>
                <div className="right image">
                    <img src={AllCompare} alt="closet"/>
                </div>
            </section>
            <section className="icon-design">
                <div>
                    <h1>쇼핑몰에 자연스럽게 녹아드는</h1>
                    <h1>사이즈리티.</h1>
                    <p>사이즈리티를 사용하기 위해서는 링크버튼이 필요해요.</p>
                    <p>여러분의 쇼핑몰 디자인에 맡게 사이즈리티를 적용해보세요.</p>
                    <p>정해진 방식 없이 사이즈리티로 이동하는 링크버튼에 아이콘 하나만 있으면 OK</p>
                </div>
                <div className="image">
                    <img src={FixedIconsLinearImage} alt="linear_icons"/>
                </div>
            </section>
            <section className="price-frame">
                <h1>입점료? 설치? 그게뭐야?</h1>
                <h1>서비스 사용요금이 무려</h1>
                <div>
                    <h1 className="en">0</h1>
                    <p>원</p>
                </div>
                <h1>사이즈리티를 무료로 적용해보세요.</h1>
                <Link to="/ready">
                    <p>서비스 적용 준비사항 알아보기</p>
                    <i className="material-icons">chevron_right</i>
                </Link>
                <Link to="/reservation">
                    <p>사전등록 신청하기</p>
                    <i className="material-icons">chevron_right</i>
                </Link>
            </section>
            <section className="content">
                <div className="title" style={{paddingTop: "10rem"}}>
                    <h1 style={{fontSize: "3.5rem"}}>사이즈리티, 쇼핑몰에 날개를 달아줘.</h1>
                </div>
            </section>
            <section className="faq">
                <h1>궁금한게 있나요?</h1>
                <ul>
                    <li onClick={(e) => faqToggle(e.target)}>
                        <div className="question">
                            <h3>사이즈리티를 쇼핑몰에 적용하고싶어요.</h3>
                            <i className="material-icons">keyboard_arrow_down</i>
                        </div>
                        <div className="answer">
                            <p>현재 사전등록 진행중입니다. 사전등록을 진행해주시면 입력하신 이메일을 통해 구체적인 내용이 전달됩니다.</p>
                            <p>사전등록을 통해 다양한 프리티어 해택을 받아보세요.</p>
                        </div>
                    </li>
                    <li onClick={(e) => faqToggle(e.target)}>
                        <div className="question">
                            <h3>사이즈리티를 사용할 수 있는 조건이 있나요?</h3>
                            <i className="material-icons">keyboard_arrow_down</i>
                        </div>
                        <div className="answer">
                            <p>사이즈리티를 통해 식별이 불가능한 쇼핑몰의 경우 현재 서비스 사용이 불가능합니다.</p>
                            <p>식별여부는 사전등록을 통해 입력하신 정보를 통해 확인 뒤 이메일을 통해 결과를 전달해드리고 있습니다.</p>
                        </div>
                    </li>
                    <li onClick={(e) => faqToggle(e.target)}>
                        <div className="question">
                            <h3>"입점료", "설치" 가 뭔가요?</h3>
                            <i className="material-icons">keyboard_arrow_down</i>
                        </div>
                        <div className="answer">
                            <p>타사의 서비스를 이용하게 되면 발생하는 입점료, 서비스 사용을 위한 설치, 설치비, 월 사용요금을 말합니다.</p>
                            <p>사이즈리티는 제공되는 링크만 추가하면 되는 방식으로 설치, 설치비, 입점료, 월 사용요금이 없습니다.</p>
                        </div>
                    </li>
                    <li onClick={(e) => faqToggle(e.target)}>
                        <div className="question">
                            <h3>"내 손안의 옷장"이 뭔가요?</h3>
                            <i className="material-icons">keyboard_arrow_down</i>
                        </div>
                        <div className="answer">
                            <p>사이즈리티를 이용하는 소비자 고객에게 지원하는 기능으로</p>
                            <p>소비자의 이전 구매상품을 쉽게 저장하고 옷 구매시 꺼내어 비교해볼 수 있는 옷장입니다.</p>
                        </div>
                    </li>
                    <li onClick={(e) => faqToggle(e.target)}>
                        <div className="question">
                            <h3>비교하는 화면으로 어떻게 이동하나요?</h3>
                            <i className="material-icons">keyboard_arrow_down</i>
                        </div>
                        <div className="answer">
                            <p>사이즈리티 서비스를 적용하는 방법은 쇼핑몰 내에 사이즈리티로 이동하는 링크 버튼을 추가하는 것입니다.</p>
                            <p>쇼핑몰 운영자님께서 배치하신 링크 버튼을 소비자가 누르면 비교화면으로 넘어가 자동으로 비교가 이루어지게 됩니다.</p>
                        </div>
                    </li>
                    <li onClick={(e) => faqToggle(e.target)}>
                        <div className="question">
                            <h3>링크 버튼을 어떻게 배치하는거죠?</h3>
                            <i className="material-icons">keyboard_arrow_down</i>
                        </div>
                        <div className="answer">
                            <p>링크 버튼의 배치는 쇼핑몰 운영자님의 자율적인 방법으로 추가하시면 됩니다.</p>
                            <p>쇼핑몰 스크롤과 같이 움직이는 버튼 또는 사이즈 표 근처 등 위치, 디자인의 제약없이 자유롭게 배치하시면 됩니다.</p>
                            <p>단, 사이즈리티 서비스를 식별할 수 있는 아이콘이 포함되어 있어야하며, 상세보기 페이지에 위치해야합니다.</p>
                        </div>
                    </li>
                </ul>
            </section>
        </main>
    )
}

export default Introduce;