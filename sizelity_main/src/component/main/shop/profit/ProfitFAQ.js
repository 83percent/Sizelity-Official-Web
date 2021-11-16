import '../../../../contents/css/shop/etc/faq.css';

const ProfitFAQ = () => {
    function aToggle(target) {
        for(let i=0; i<6; i++) {
            if(target.nodeName === "LI") {
                target.classList.toggle("on");
                break;
            } else {
                target = target.parentElement;
            }
        }
    }
    return (
        <section id="faq">
            <div className="title">
                <h2>궁금한게 있나요?</h2>
            </div>
            <ul>
                <li onClick={e => aToggle(e.target)}>
                    <div className="q">
                        <h3>왜 수익을 분배해주나요?</h3>
                        <i className="material-icons">keyboard_arrow_down</i>
                    </div>
                    <div className="a">
                        <div>
                            <p>사이즈리티는 소비자에게 최고의 사이즈 선택을 도와줍니다.</p>
                            <p>사이즈비교 네트워크를 통해 타 쇼핑몰 고객의 사이즈 선택에 도움을 준 대가를 사이즈리티가 제공합니다.</p>
                            <p>쇼핑몰에 대한 고객의 만족이 곧 사이즈리티의 만족이에요 : )</p>
                        </div>
                    </div>
                </li>
                <li onClick={e => aToggle(e.target)}>
                    <div className="q">
                        <h3>수익금이 정확히 얼마에요?</h3>
                        <i className="material-icons">keyboard_arrow_down</i>
                    </div>
                    <div className="a">
                        <div>
                            <p>1회당 수익금은 기본 0.4원으로 시작하여, 쇼핑몰의 등록 상태 및 상품 정보에 따라 달라집니다.</p>
                            <p>(기본 0.4원으로 시작)</p>
                            <p>- 상품 사이즈 정보가 부족할 경우 -0.1원,</p>
                            <p>- 1년 이상 사이즈리티 사용 약관 동의, +0.1원,</p>
                            <p>- 프리미엄 요금 사용, +0.1원</p>
                        </div>
                    </div>
                </li>
                <li onClick={e => aToggle(e.target)}>
                    <div className="q">
                        <h3>수익의 한도가 정해져 있나요?</h3>
                        <i className="material-icons">keyboard_arrow_down</i>
                    </div>
                    <div className="a">
                        <div>
                            <p>쇼핑몰의 노력으로 얻어진 수익이기에 수익의 한도는 정해져있지 않습니다.</p>
                            <p>다만, 악의적으로 수익을 누적시키는 행위가 적발될 시, 수익의 환수 및 제한 조치가 가해질 수 있습니다.</p>
                        </div>
                    </div>
                </li>
                <li onClick={e => aToggle(e.target)}>
                    <div className="q">
                        <h3>적립된 수익으로는 무엇을 할 수 있나요?</h3>
                        <i className="material-icons">keyboard_arrow_down</i>
                    </div>
                    <div className="a">
                        <div>
                            <p>먼저, 수익금은 쇼핑몰의 노력으로 이루어진 것이기 환급하실 수 있습니다.</p>
                            <p>또는 사이즈비교 비용 및 광고 상품 등의 사이즈리티가 제공하는 유료 상품 결제가 모두 가능합니다.</p>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default ProfitFAQ;