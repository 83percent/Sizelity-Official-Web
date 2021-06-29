import axios from 'axios';
import { useContext, useEffect, useRef, useState } from 'react';
import TImeFormat from '../../contents/js/TImeFormat';
import ProductType from '../../contents/js/ProductType';
// Context
import { ServerContext } from '../../App';
import { AlertToggle } from '../../router/ShopRouter';

const ProductExpires = () => {
    // State
    const [productDatas, setProductDatas] = useState(null)
    const [loader, setLoader] = useState(true);

    //Context
    const server = useContext(ServerContext);
    const alert = useContext(AlertToggle);

    // Reg
    const comeDataCount = useRef(0);

    // Field
    const _loaderMaxCount = 15;

    const event = {
       /*  getInitList : async function() {
            this.getData(0);
        }, // getInitList() */
        getData : async function(count) {
            setLoader(true);
            await axios({
                method : 'GET',
                url : `${server}/product/get/expires`,
                withCredentials : true,
                timeout: 3500
            }).then(response => {
                if(response.data.length > 0) comeDataCount.current += response.data.length;
                else comeDataCount.current += 1;
                if(count === 0) setProductDatas(response.data);
                else if(response.data.length > 0) {
                    setProductDatas([...productDatas, ...response.data]);
                }
            }).catch(err => {
                console.log(err)
                switch(err.response?.status) {
                    case 412 : {
                        alert(true,'<p>잘못된 접근입니다.</p>','error');
                        break;
                    }
                    case 500 :
                    default : {
                        alert(true, "<p>오류가 발생했습니다.</p>", 'error')
                    }
                }
            }).finally(() => {
                setLoader(false);
            })
        }, // getData()
        getMoreData : async function(count) {
            this.getData(count);
        }
    }

    useEffect(() => {
        event.getInitList();
    }, [])

    return (
        <section className="main-tap" id="expires">
            <header>
                <h1>상품 만료 확인</h1>
                <p>상품 등록일로 부터 3개월이 지난 상품의 목록입니다.</p>
                <p>판매가 중지 되었는지 확인해보세요.</p>
            </header>
            <article className="list-frame">
            {
                    productDatas ? (
                        productDatas.length > 0 ? (
                            productDatas.map((element, index) => (
                                <li key={index} className="element">
                                    <h1>{element.info.pname}</h1>
                                    <div>
                                        <div>
                                            <p>{ProductType.get(element.info.ptype)}</p>
                                            <p>/</p>
                                            <p>{element.info.subtype}</p>
                                        </div>
                                        <p>{TImeFormat.get(new Date(element.reg_date))}</p>
                                    </div>
                                </li>
                            ))
                        ) : (
                            <div></div>
                        )
                    ) : null
                }
                {
                    loader ? (
                        <div id="loader-frame">
                            <div className="loader"></div>
                        </div>
                    ) : null    
                }
                {
                    !loader && comeDataCount.current !== 0 && comeDataCount.current%_loaderMaxCount === 0 ? (
                        <div id="more">
                            <button onClick={() => event.getMoreData(comeDataCount.current)}>검색 결과 더 보기</button>
                        </div>
                    ) : null
                }
            </article>
        </section>
    )
}

export default ProductExpires;