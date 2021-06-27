import React, { useEffect, useRef, useState } from 'react';

// Component
import AddProduct from './AddProduct';

// CSS
import '../../../contents/css/shop/RequestList.css';



const RequestList = () => {
    const [select, setSelect] = useState(null);
    const [requestDatas, setRequestDatas] = useState([]);
    const activeElement = useRef(null);
    const event = {
        selectElement : function(element, url) {
            if(element.nodeName !== "LI") {
                element = element.parentElement;
            }
            if(element === activeElement.current) return;
            if(activeElement.current !== null) activeElement.current.classList.remove("active");
            activeElement.current = element;
            activeElement.current.classList.add("active");
            setSelect(url);
        }
    }
    useEffect(() => {
        setRequestDatas([
            "http://www.sizelity.com/product?branduid=1234125asbasdfbasdfweascsdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            "http://www.sizelity.com/product?branduid=1234125asbasdfbasdfweascsd",
            "http://www.sizelity.com/product?branduid=1234125asbasdfbasdfwscsda",
            "http://www.sizelity.com/product?branduid=1234125asbasdfbasdfweascsda",
            "http://www.sizelity.com/product?branduid=1234125asbasdfbasdfwascsda",
            "http://www.sizelity.com/product?branduid=1234125asbasdfbasdfweasca"
        ]);
    }, []);
    return (
        <article className="leftList" id="request">
            <section className="side-tap" id="request_list">
                <div className='ko' id="title">
                    <h1>상품 정보 요청</h1>
                    <p>고객들이 사이즈 비교를 원했지만, 상품 정보가 없었어요.</p>
                </div>
                <ul>
                    {
                        requestDatas.map((element, index) => {
                            return (
                                <li key={index} onClick={(e) => event.selectElement(e.target, element)}>
                                    <div></div>
                                    <p>{element}</p>
                                </li>
                            )
                        })
                    }
                </ul>
                <div id="more">
                    <button>
                        <i className="material-icons">more_vert</i>
                    </button>
                </div>
            </section>
            <section className="main-tap">
                <AddProduct 
                    url={select}
                />
            </section>
        </article>
    )
}

export default React.memo(RequestList);