import { Link } from 'react-router-dom';


// Image
//import MainImage from '../../contents/image/iPhone12_Clay_Shadow.png';
import MainImage from '../../contents/image/phone.png';

// CSS
import '../../contents/css/main/Preview.css';
import '../../contents/css/main/Reservation.css';


const Preview = () => {
    return (
        <main className="preview">
            <section className="main">
                <div className="main-title">
                    <h1>사이즈비교의 새로운 기준.</h1>
                    <p>쇼핑몰간 경계없이, 고객의 이전 구매 상품들과 판매중인 상품을 비교해보세요.</p>
                    <p>실제 고객의 옷과 비교해 최적의 사이즈를 구매할 수 있도록 도와줍니다.</p>
                </div>
                <img src={MainImage} alt="Main Image"/>
            </section>
            <section className="reserve-card">
                <div className="main-title">
                    <h1>사전등록</h1>
                    <h1>해택 받아가세요.</h1>
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
                            <h2>무료로 만나보는 광고.</h2>
                        </div>
                        <div className="text-frame">
                            <p>여러분의 소식을 가장 효과적으로 보내는 방법.</p>
                            <p>타겟광고 200,000회를 무료로 만나보세요.</p>
                        </div>
                    </li>
                    <li>
                        <div className="title-frame">
                            <h2>광고는 2배로.</h2>
                        </div>
                        <div className="text-frame">
                            <p>높아져만 가는 광고비 부담. 좋은 방법없을까?</p>
                            <p>무료로 제공되는 광고해택을 전부 소모하더라도, 2개월간 구매하신 광고의</p>
                            <p>광고 횟수를 2배로 늘려드립니다.</p>
                        </div>
                    </li>
                </ul>
            </section>
        </main>
    )
}

export default Preview;