import axios from 'axios';
import { useContext, useRef, useState } from 'react';
import ProductType from '../../contents/js/ProductType';
import TImeFormat from '../../contents/js/TImeFormat';

// Context
import { ServerContext } from '../../App';
import { AlertToggle } from '../../router/ShopRouter';
const ProductSearch = () => {
    //State
    const [loader, setLoader] = useState(false);
    const [searchData, setSearchData] = useState(null);

    //Context
    const server = useContext(ServerContext);
    const alert = useContext(AlertToggle);

    // Ref
    const _searchValue = useRef("");
    const comeDataCount = useRef(0);
    
    // Field
    const _loaderMaxCount = 15;

    const event = {
        newSearch : async function(value) {
            if(value.length === 0) {
                return null;
            }
            if(_searchValue.current === value) {
                return null;
            } else _searchValue.current = value;
            comeDataCount.current = 0;
            this.getSearchData(value, 0);
        }, // search()
        moreSearchData : async function(value, count) {
            if(!value) return null;
            this.getSearchData(value, count);
        }, // moreSearchData()
        getSearchData : async function(value, count) {
            setLoader(true);
            await axios({
                method: 'get',
                url : `${server}/product/search/${value}/${count}`,
                timeout: 3500,
                withCredentials: true
            }).then((response) => {
                if(response.data.length > 0) comeDataCount.current += response.data.length;
                else comeDataCount.current += 1;
                if(count === 0) setSearchData(response.data);
                else if(response.data.length > 0)setSearchData([...searchData, ...response.data]);
            }).catch((err) => {
                comeDataCount.current = 0;
                console.log(err);
                switch(err?.response?.status) {
                    case 404 : {
                        // 쇼핑몰 정보가 없음.
                        // 로그인은 했으나, 해당 정보를 서버에서 불러 올 수 없는 형태임.
                        alert(true,'<p>오류가 발생했습니다.</p>','error');
                        break;
                    }
                    case 412 : {
                        alert(true,'<p>잘못된 접근입니다.</p>','error');
                        break;
                    }
                    default : {
                        alert(true,'<p>오류가 발생했습니다.</p>','error');
                    }
                }
            }).finally(() => {
                setLoader(false);
            });
        } // getSearchData()
    }

    return (
        <section className="main-tap" id="search">
            <header>
                <h1>검색</h1>
                <div className="search-frame">
                    <i className="material-icons">search</i>
                    <input type="text" onKeyDown={(e) => {if(e.key === 'Enter') event.newSearch(e.target.value, false)}}/>
                </div>
            </header>
            <article className="list-frame">
                {
                    searchData !== null ? (
                        <>
                            <PostSearch
                                searchValue={_searchValue.current}
                                searchData={searchData}/>
                            {
                                !loader && comeDataCount.current !== 0 && comeDataCount.current%_loaderMaxCount === 0 ? (
                                    <div id="more">
                                        <button onClick={() => event.moreSearchData(_searchValue.current, comeDataCount.current)}>검색 결과 더 보기</button>
                                    </div>
                                ) : null
                            }
                        </>
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

const PostSearch = ({searchValue,searchData}) => {
    
    return (
        <>
            <h4>'{searchValue}'에 대한 검색 결과</h4>
            {
                searchData.length > 0 ? (
                    <ul>
                        {
                            searchData.map((element, index) => (
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
                        }
                    </ul>
                ) : null
            }
        </>
    )
}
export default ProductSearch;