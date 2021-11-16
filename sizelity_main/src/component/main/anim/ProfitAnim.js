import { useRef, useState } from 'react';
import '../../../contents/css/anim/ProfitAnim.css';
const ProfitAnim = () => {
    const [step, __setStep] = useState(0);
    function setStep() {
        if(step < 11) {
            __setStep(step+1);
        } else __setStep(0);
    }
    const text = useRef([
        "여기 당신의 쇼핑몰이 있습니다.", // 0
        "먼저 사이즈리티에 쇼핑몰 등록 및 연동을 해주세요.", // 1
        "사이즈리티 네트워크에 상품 사이즈 정보를 등록해줍니다.", // 2
        "고객이 쇼핑몰을 방문했어요 :)", // 3
        "고객이 사이즈 비교를 통해 자신에게 잘 맞는 사이즈를 구매해요.", // 4
        "그리고 그 옷을 자신의 사이즈리티 옷장에 저장했어요.", // 5
        "이제 고객의 옷장에는 당신의 쇼핑몰 상품이 들어가 있어요.", // 6
        "이 고객은 다른 쇼핑몰을 방문했어요.", // 7
        "마음에 드는 옷을 발견했군요?", // 8
        "주문 전에 사이즈 비교를 해보려고 하네요.", // 9
        "당신의 쇼핑몰에서 샀던 게 잘 맞았나봐요! 고객이 옷장에 저장해뒀던 당신 쇼핑몰 옷으로 사이즈 비교를 하고 있어요", // 10
        "다른 쇼핑몰의 옷 주문에 사이즈 정보를 제공했군요? 수익을 적립해드릴게요!" // 11
    ]);

    return (
        <article id="profit-anim" className={`step${step}`}>
            <main onClick={() => setStep(step+1)}>
                <p>여기를 눌러주세요 ({step}/11)</p>
                <i className='material-icons store1'>store</i>
                <div className="lw1">
                    <i className="material-icons product1">checkroom</i>
                    <div className="line"></div>
                    <i className="material-icons closet1">door_sliding</i>
                </div>
                <i className="material-icons user">person</i>
                <div className="lw2">
                    <i className="material-icons product1">checkroom</i>
                    <div className="line"></div>
                    <i className="material-icons product2">checkroom</i>
                    <i className="material-icons closet">door_sliding</i>
                </div>
                <i className='material-icons store2'>store</i>
                <i className='material-icons paid'>paid</i>
            </main>
            <div className="text-box">
                <p>{text.current[step]}</p>
            </div>
        </article>
    )
}

export default ProfitAnim;