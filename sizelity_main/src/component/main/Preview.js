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
                        <h1><strong>사이즈리티</strong><br />세상에 없던 쇼핑몰 네트워크</h1>
                    </div>
                    <p>쇼핑몰 네트워크를 통해, 고객이 다른 쇼핑몰에서 구매한 옷과</p>
                    <p>내 쇼핑몰 상품 비교할 수 있습니다.</p>
                    <p>쇼핑몰에 경계를 넘어, 여러분의 참여를 기다립니다.</p>
                    <Link to="/reservation">
                        <p>사이즈리티 더 알아보기</p>
                        <i className="material-icons">chevron_right</i>
                    </Link>
                </div>
                
                <div className="image-frame">
                    <img src={MainImage} alt="Main"/>
                </div>
            </section>
            <section className="card">
                <div className="main-title">
                    <h1>사이즈리티, 쇼핑몰의 새로운 <strong>수익모델</strong></h1>
                </div>
                <Link to="/profit">
                    <p>수익 모델 더 알아보기</p>
                    <i className="material-icons">chevron_right</i>
                </Link>
                {/* <ul>
                    <li>
                        <div className="title-frame">
                            <h2></h2>
                        </div>
                        <div className="text-frame">
                            <p>많고 많아지는 쇼핑몰 상품... 언제 등록하나요?..</p>
                            <p>그래서, 서비스 도입을 위한 초기 상품 등록을 해 드릴게요.</p>
                            <p>쇼핑몰 웹 버전 기준, 카테고리 별 최근 상품 3페이지 상품 </p>
                            <p>사이즈 정보 사이즈리티 네트워크에 등록해 드릴게요.</p>
                        </div>
                    </li>
                </ul> */}
            </section>
        </main>
    )
}

export default Preview;