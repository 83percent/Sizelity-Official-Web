import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import ProductType from '../../contents/js/ProductType';
import TImeFormat from '../../contents/js/TImeFormat';

// Context
import { ServerContext } from '../../App';
import { AlertToggle } from '../../router/MainRouter';

const ProductList = ({match}) => {
    // State
    const [productDatas, setProductDatas] = useState(null)
    const [loader, setLoader] = useState(true);

    // Context
    const server = useContext(ServerContext);
    const alert = useContext(AlertToggle);

    // Reg
    // Ref
    const _searchValue = useRef("");
    const comeDataCount = useRef(0);

    // Field
    const {type} = match.params;
    const event = {
        getInitList : async function(type) {
            if(!ProductType.get(type)) return null;
            this.getData(type, 0);
        }, // getInitList()
        getData : async function(type, count) {
            if(count < 0) return null;

            await axios({
                method : 'GET',
                url : `${server}/product/get/type/${type}/${count}`,
                withCredentials: true,
                timeout: 3500
            }).then((response) => {
                console.log(response.data);
                if(response.data.length > 0) comeDataCount.current += response.data.length;
                else comeDataCount.current += 1;
                if(count === 0) setProductDatas(response.data);
                else if(response.data.length > 0)setProductDatas([...productDatas, ...response.data]);
            }).catch((err) => {
                switch(err.response?.status) {
                    default : {
                        alert(true, "<p>문제가 </p>")
                    }
                }
            })
        }
    }

    useEffect(() => {
        event.getInitList(type);
    }, [type]);

    return (
        <section className="main-tap" id="list">
            <header>
                <h1>{ProductType.get(type)}</h1>
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
            </article>
        </section>
        
    )
}

export default ProductList;