import { useState } from "react";



const CardProduct = ({productNum, requestNum}) => {

    const maxCount = 1000;
    

    return (
        <div className="card-inline ko">
            <div className="card">
                <p>상품 수</p>
                <div className="info-frame en">
                    <h3>{productNum}</h3>
                    <p>/</p>
                    <p>{maxCount}</p>
                </div>
                <div className="more">
                    <p>상품으로 이동</p>
                </div>
            </div>
            <div className="card">
                <p>추가 요청 수</p>
                <div className="info-frame en">
                    <h3>{requestNum}</h3>
                </div>
                <div className="more">
                    <p>목록 보기</p>
                </div>
            </div>
        </div>
    )
}

export default CardProduct;