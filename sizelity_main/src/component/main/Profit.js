import { Link } from 'react-router-dom';
import ProfitAnim from './anim/ProfitAnim';
import ProfitFAQ from './shop/profit/ProfitFAQ';

import '../../contents/css/main/Profit.css';

const Profit = () => {
    return (
        <main id="profit">
            <header>
                <h1>사이즈리티,</h1>
                <h1>쇼핑몰의 새로운</h1>
                <h1><strong>필수 수익 모델</strong>을 만들다.</h1>
                <div>
                    <p>사이즈리티는 네트워크의 취지에 맞게, 고객을 중심으로 쇼핑몰이 네트워크를 이루어 고객이 옷을 구매할 때,</p>
                    <p>다른 쇼핑몰에서 구매했던, 아주 잘 맞았던 옷의 사이즈 정보를 현재 구매하려는 상품과 비교하여 최고의 사이즈 선택을</p>
                    <p>도와줍니다. 이때, 이전에 구매했던 옷의 사이즈 정보를 제공한 쇼핑몰에 일정 수익을 제공합니다.</p>
                </div>
            </header>
            <section>
                <div className="title">
                    <h2>어떻게?</h2>
                    <p>수익을 제공한다는데, 어떻게 해야지 나에게 수익이 제공될까?</p>
                </div>
                <div className="anim-wrapper">
                    <ProfitAnim />
                </div>
                <div>
                    <p></p>
                </div>
            </section>
            <section>
                <div className="title">
                    <h2>그래서 수익이 얼마인데?</h2>
                </div>
                <div className="price">
                    <strong>
                        <p>매번</p>
                        <h3>기본 0.4원</h3>
                        <p>(0.3 ~ 0.6원)</p>
                    </strong>
                    <div className="line"></div>
                </div>
            </section>
            <section className="explain">
                <div className="title">
                    <h2>고작?</h2>
                    <p>0.4원을 한번만 주면 고작이지만...</p>
                </div>
                <ul>
                    <li>
                        <i className="material-icons">person</i>
                        <h3>고객이 벌어다 주는 수익</h3>
                        <p>내 쇼핑몰에서 옷을 살 때, 최고의 사이즈를 선택할 수 있게 사이즈리티 사이즈 비교 서비스를 제공해주고, 그 뒤 고객이 쇼핑몰 여기저기를 돌아다니며 수익을 만들어 줄 거에요. 그동안 내 쇼핑몰이 해야 할 일은 없죠!</p>
                    </li>
                    <li>
                        <i className="material-icons">plus_one</i>
                        <h3>지출은 한번</h3>
                        <p>쇼핑몰을 찾은 고객이 맞는 사이즈를 주문할 수 있게, 사이즈리티를 통해 사이즈 비교를 제공하는 건, 구매 당시 한 번이에요. 최고의 사이즈 선택을 도와주죠.</p>
                    </li>
                    <li>
                        <i className="material-icons">all_inclusive</i>
                        <h3>수익은 영원히</h3>
                        <p>고객의 옷장에 내 쇼핑몰 상품이 있다면, 그 상품이 판매가 종료되어 쇼핑몰에서 사라져도 상관없어요. 고객이 옷장에 옷을 가지고 100년 뒤에 사이즈 비교를 해도 수익금을 제공해요.</p>
                    </li>
                    <li>
                        <i className="material-icons">trending_up</i>
                        <h3>누적되는 수익</h3>
                        <p>수익금은 사이즈 비교에 내 쇼핑몰 상품이 이용될 때마다, 항상 제공해요. 그게 10년 뒤, 100년 뒤에도 말이죠.</p>
                    </li>
                </ul>
            </section>
            <ProfitFAQ />
            <article>
                <p>고객에게 사이즈 비교 서비스도 제공하고, 수익금도 벌고.</p>
                <h2>꿩먹고 알먹기</h2>
                <Link to="/reservation">
                    <p>지금 쇼핑몰 등록하러 가기</p>
                    <i className="material-icons">chevron_right</i>
                </Link>
            </article>
        </main>     
    )
}

export default Profit;