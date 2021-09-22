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
                </div>
                <div className="image-frame">
                    <img src={MainImage} alt="Main"/>
                </div>
            </section>
            <section className="reserve-card">
                <div className="main-title">
                    <h1><strong>사전등록</strong> 혜택 받아가세요.</h1>
                </div>
                <Link to="/main/reservation">
                    <p>지금 사전등록 하러가기</p>
                    <i className="material-icons">chevron_right</i>
                </Link>
                <ul>
                    <li>
                        <div className="title-frame">
                            <h2>미리 준비해 둘 게요.</h2>
                        </div>
                        <div className="text-frame">
                            <p>서비스를 시작하기 전, 상품 정보입력은 필수겠죠?</p>
                            <p>그 많은 상품정보를 입력하는 것도 일이죠.</p>
                            <p>그래서 서비스를 도입하기 앞서 쇼핑몰 상품정보를 모두 입력해드립니다.</p>
                        </div>
                    </li>
                    <li>
                        <div className="title-frame">
                            <h2>서비스 이용료 평생 0원.</h2>
                        </div>
                        <div className="text-frame">
                            <p>월 39,900원의 이용요금... 지금은 없는 걸로 하죠. 평생 무료.</p>
                            <p>쇼핑몰 운영하다보면 이런저런 지출이 너무 많죠?</p>
                            <p>사이즈리티는 지출 하나 없이 사이즈비교 서비스를 고객에게 제공해보세요.</p>
                        </div>
                    </li>
                    <li>
                        <div className="title-frame">
                            <h2>광고료 50% 추가 할인.</h2>
                        </div>
                        <div className="text-frame">
                            <p>원래도 광고료 50% 할인 진행중이에요.</p>
                            <p>사전등록하면 할인된 금액에서 50% 추가할인. 그것도 3개월간</p>
                            <p>광고효율을 극대화하기 위해, 한번에 진행하는 광고수가 작아요. 선착순이라는 거죠.</p>
                        </div>
                    </li>
                </ul>
            </section>
        </main>
    )
}

export default Preview;