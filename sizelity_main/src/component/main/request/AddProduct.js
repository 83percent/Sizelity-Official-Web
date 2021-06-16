const AddProduct = ({url}) => {
    return (
        <>
            <header>
                <div className="func-btn">
                    <div id="delete">
                        <i className="material-icons">delete</i>
                    </div>
                    <div id="save">
                        <i className="material-icons">save</i>
                    </div>
                </div>
                <div className="title">
                    <p className="ko">사이즈 요청 주소 : </p>
                    <h1 className="en">{url}</h1>
                </div>
            </header>
            <div className="input-wrapper ko">
                <span>
                    <span className="dot"></span>
                    <h1>상품명</h1>
                </span>
                <div className="info-input-frame">
                    <div>
                        <p>상품명</p>
                        <input type="text"/>
                    </div>
                    <p></p>
                    <p>[1+1], [추천] 등, 불필요한 내용은 모두 지워주세요</p>
                </div>
                <span>
                    <span className="dot"></span>
                    <h1>상품 구분</h1>
                </span>
                <select>
                    <option value="set">세트</option>
                    <option value="outer">아우터</option>
                    <option value="top">상의</option>
                    <option value="bottom">하의</option>
                    <option value="onepiace">원피스</option>
                </select>
                <div className="info-input-frame">
                    <div>
                        <p>세부 분류</p>
                        <input type="text" placeholder="긴팔, 반바지..."/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddProduct;