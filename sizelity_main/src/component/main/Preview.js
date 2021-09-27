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
                        <h1>사이즈비교의 새로운 기준.</h1>
                    </div>
                    <p>쇼핑몰간 경계없이, 고객의 이전 구매 상품들과 판매중인 상품을 비교해보세요.</p>
                    <p>실제 고객의 옷과 비교해 최적의 사이즈를 구매할 수 있도록 도와줍니다.</p>
                    <p>고객 만족도는 UP, 반품-교환은 DOWN.</p>
                </div>
                <div className="image-frame">
                    <img src={MainImage} alt="Main"/>
                </div>
            </section>
            <section className="reserve-card">
                <div className="main-title">
                    <h1><strong>사전등록</strong> 혜택 받아가세요.</h1>
                </div>
                <Link to="/reservation">
                    <p>지금 사전등록 하러가기</p>
                    <i className="material-icons">chevron_right</i>
                </Link>
                <ul>
                    <li>
                        <div className="title-frame">
                            <h2>미리 준비해 둘 게요.</h2>
                        </div>
                        <div className="text-frame">
                            <p>많고 많아지는 쇼핑몰 상품... 언제 등록하나요?..</p>
                            <p>그래서, 서비스 도입을 위한 초기 상품 등록을 모두 해드려요.</p>
                        </div>
                    </li>
                    <li>
                        <div className="title-frame">
                            <h2>서비스 이용료 평생 0원.</h2>
                        </div>
                        <div className="text-frame">
                            <p>월 49,900원의 이용요금... 지금 등록하면 평생 무료.</p>
                            <p>사이즈리티는 지출 하나 없이 사이즈비교 서비스를 고객에게 제공해보세요.</p>
                        </div>
                    </li>
                    <li>
                        <div className="title-frame">
                            <h2>7일 무료 광고.</h2>
                        </div>
                        <div className="text-frame">
                            <p>사전등록 쇼핑몰에게 7일간 무료 광고 게재해드려요.</p>
                            <p>7일간 무료 광고 종료 후, 2개월간 광고비 50% 할인 혜택까지.</p>
                        </div>
                    </li>
                </ul>
            </section>
        </main>
    )
}

export default Preview;