import { useRef, useState } from "react";

import ProductType from '../../../js/ProductType';

const AddProduct = ({url}) => {
    const [type, setType] = useState("null");
    const sizeData = useRef([]);
    const sizeDataFormat = useRef(null);
    console.log(sizeData)
    const event = {
        typeChange : function(value) {
            if(value) {
                const _d = ProductType.getSizeRate(value)
                
                const  _l = new Object();
                _l.sname = '';
                for(const [e,_] of _d) {
                    _l[e] = 0;
                }
                sizeDataFormat.current = _l;

                sizeData.current = [];

                setType(value);
            }
        },
        listAddHandler : function() {
            sizeData.current.push(JSON.parse(JSON.stringify(sizeDataFormat.current)));
            //setSizeData([...sizeData, sizeDataFormat]);
        },
        listRemoveHandler : function(index) {
            sizeData.current.splice(index,1);
            //sizeData.current = sizeData.current.filter((_,i) => i!==index);
            //console.log("삭제 후 데이터 : ", sizeData.current)
            //setSizeData(sizeData.filter((_,i) => i!==index));
        },
        listDataOnChange : function(index, name, value) {
            console.log(`변경할 ${index}  데이터 : `,sizeData.current[index][name])
            sizeData.current[index][name] = value;
            console.log(`변경할 ${index}  데이터 : `,sizeData.current[index])
        }
    }
    if(url !== null) {
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
                    <select onChange={(e) => {event.typeChange(e.target.value)}}>
                        <option value="null">상품 구분</option>
                        <option value="set">세트</option>
                        <option value="outer">아우터</option>
                        <option value="top">상의</option>
                        <option value="bottom">하의</option>
                        <option value="onepiece">원피스</option>
                    </select>
                    <div className="info-input-frame">
                        <div>
                            <p>세부 분류</p>
                            <input type="text" placeholder="긴팔, 반바지..."/>
                        </div>
                    </div>
                    <span>
                        <span className="dot"></span>
                        <h1>수치 입력</h1>
                    </span>
                    <List 
                        type={type}
                        sizeData={sizeData.current}
                        listAddHandler={event.listAddHandler}
                        listRemoveHandler={event.listRemoveHandler}
                        listDataOnChange={event.listDataOnChange}/>
                </div>
            </>
        )
    } else {
        function helpActiveToggle(e) {
            let tar = e.target
            if(tar.nodeName === "P") tar = e.target.parentElement;
            tar.classList.toggle("active")
            
        }
        return (
            <div id="wait-frame" className="ko">
                <header>
                    <h2>"상품 정보 요청"</h2>
                    <h1>주소를 선택해주세요.</h1>
                </header>
                <ul>
                    <li onClick={(e) => helpActiveToggle(e)}>
                        <p>Q. 목록의 주소는 무엇인가요?</p>
                        <div>
                            <p>고객들이 사이즈 비교를 원했지만, 상품 정보가 존재하지 않았던 주소의 목록입니다.</p>
                        </div>
                    </li>
                    <li onClick={(e) => helpActiveToggle(e)}>
                        <p>Q. 이미 등록한 주소의 상품인데, 목록에 있어요.</p>
                        <div>
                            <p>해당 목록은 고객이 상품 정보를 요청했을 당시에 저장된 내용입니다.</p>
                            <p>해당 "상품 정보 요청" 목록을 지워주시고, 이후 같은 문제가 계속 발생한다면, 문의를 남겨주세요.</p>
                        </div>
                    </li>
                    <li onClick={(e) => helpActiveToggle(e)}>
                        <p>Q. 제 쇼핑몰에 존재하는 상품이 아닙니다.</p>
                        <div>
                            <p>사용자가 잘못된 정보를 요청한 경우, 목록에 보여질 수 있습니다.</p>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
    
}

const List = ({type, sizeData, listAddHandler,listRemoveHandler, listDataOnChange}) => {
    const typeData = ProductType.getSizeRate(type);
    const [_c, _ch] = useState(true);
    const event = {
        listAddHandler : function() {
            listAddHandler();
            _ch(!_c);
            //setSizeData([...sizeData, sizeDataFormat]);
        },
        listRemoveHandler : function(index) {
            listRemoveHandler(index);
            _ch(!_c);
            //setSizeData(sizeData.filter((_,i) => i!==index));
        },
        listDataOnChange : function(index, name, value) {
            listDataOnChange(index, name, value);
            
        }
    }
    return (
        <div id="input-rate-wrapper">
            {
                type === "null" ? null : (
                    <>
                    <table>
                        <thead>
                            <tr>
                                <th>사이즈명</th>
                                {
                                    typeData.map((element, index) => {
                                        return (
                                            <th key={index}>{element[1]}</th>
                                        )
                                    })
                                }
                                <th></th>
                            </tr>                            
                        </thead>
                        <tbody>
                            {
                                sizeData.map((dataArrayElement, index) => {
                                    return (
                                        <tr key={index}>
                                            <td><input type="text" name="sname" placeholder="-" 
                                                defaultValue={dataArrayElement.sname ? dataArrayElement.sname : null}
                                                onChange={(e) => event.listDataOnChange(index, 'sname', e.target.value)}/></td>
                                            {
                                                typeData.map((element, i2) => (
                                                    <td key={i2}>
                                                        <input name={element[0]} type="number" min={0} placeholder="-"
                                                            onChange={(e) => listDataOnChange(index, element[0], e.target.value)}
                                                            defaultValue={dataArrayElement[element[0]] != 0 ? dataArrayElement[element[0]] : null}/>
                                                    </td>
                                                ))
                                            }
                                            <td>
                                                <i className="material-icons" onClick={() => event.listRemoveHandler(index)}>remove</i>
                                                {
                                                    index == sizeData.length-1 
                                                    ? null//(<i className="material-icons" onClick={(e) => event.listRemoveHandler(index)}>remove</i>) 
                                                    : null
                                                }
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <i className="material-icons" onClick={() => event.listAddHandler()}>add</i>
                    </>
                )
            }
            
        </div>
    )
}

export default AddProduct;