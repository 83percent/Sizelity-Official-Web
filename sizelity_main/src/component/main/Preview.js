import { Link } from 'react-router-dom';

// Image
import MainImage from '../../contents/image/compare.png';

// CSS
import '../../contents/css/main/Preview.css';
import '../../contents/css/main/Reservation.css';


const Preview = () => {
    return (
        <main className="preview">
            <section className="main">
                <div className="main-title">
                    <div>
                        <h1>세상에 없던 쇼핑몰 네트워크<br />사이즈리티</h1>
                    </div>
                    <p>쇼핑몰 네트워크를 통해, 고객이 다른 쇼핑몰에서 구매한 옷과</p>
                    <p>내 쇼핑몰 상품 비교할 수 있습니다.</p>
                    <p>쇼핑몰에 경계를 넘어, 여러분의 참여를 기다립니다.</p>
                </div>
                <div className="image-frame">
                    <img src={MainImage} alt="Main"/>
                </div>
            </section>
            <section className="reserve-card">
                <div className="main-title">
                    <h1>6개월간 <strong>무료체험</strong>하고 혜택 받아가세요.</h1>
                </div>
                <Link to="/reservation">
                    <p>쇼핑몰 등록 하러가기</p>
                    <i className="material-icons">chevron_right</i>
                </Link>
                <ul>
                    <li>
                        <div className="title-frame">
                            <h2>미리 준비해 둘 게요.</h2>
                        </div>
                        <div className="text-frame">
                            <p>많고 많아지는 쇼핑몰 상품... 언제 등록하나요?..</p>
                            <p>그래서, 서비스 도입을 위한 초기 상품 등록을 해 드릴게요.</p>
                            <p>쇼핑몰 웹 버전 기준, 카테고리 별 최근 상품 3페이지 상품 </p>
                            <p>사이즈 정보 사이즈리티 네트워크에 등록해 드릴게요.</p>
                        </div>
                    </li>
                    <li>
                        <div className="title-frame">
                            <h2>5일 무료 광고.</h2>
                        </div>
                        <div className="text-frame">
                            <p>사전등록 쇼핑몰을 위해 7일간 무료 광고 게재해드려요.</p>
                            <p>7일간 무료 광고 종료 후, 3개월간 광고비 50% 할인 혜택까지.</p>
                            <p>추가 혜택으로 10일 까지 무료 광고!</p>
                        </div>
                    </li>
                    <li>
                        <div className="title-frame">
                            <h2>상품 등록 무제한.</h2>
                        </div>
                        <div className="text-frame">
                            <p>제한 없이 사이즈 비교를 제공해보세요.</p>
                            <p>상품 등록 갯수 제한, 무제한으로 무료 업그레이드</p>
                            <p>단, 판매가 종료되면 잘 지워주세요 :)</p>
                        </div>
                    </li>
                </ul>
            </section>
        </main>
    )
}

export default Preview;