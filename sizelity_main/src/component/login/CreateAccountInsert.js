import { useContext, useRef } from "react";
import axios from 'axios';

import {ServerContext} from '../../App';

const CreateAccountInsert = ({setStage, testing, id}) => {
    // Context
    const server = useContext(ServerContext);

    // Ref
    const caution = useRef(null);
    const repassword = useRef("");
    const data = useRef({
        sname: "",
        domain : "",
        password: "",
        cen: "",
        tel: "",
        email: ""
    }); 
    async function send(data) {
        const response = await axios({
            method: 'POST',
            data,
            url: `${server}/account/signup`,
            timeout: 3500
        }).catch(err => {
            switch(err.response?.status) {
                case 419 : {
                    event.setCaution("이미 가입된 사용자 입니다.");
                    return;
                }
                case 412 : {
                    event.setCaution("잘못된 정보가 포함되어 있습니다.");
                    return;
                }
                case 500 :
                default : {
                    event.setCaution("서버오류: 잠시 후 다시 시도해주세요.")
                }
            }
        });
        console.log(response.data._id);
        if(response.status === 200) {
            
            id.current = response.data._id;
            setStage(2);
        }
    }
    function sliceWWW(hostname) {
        let i = hostname.indexOf("www");
        let result = i === -1 ? hostname : hostname.slice(i+4, hostname.length);
        // m. slice
        let m = result.indexOf("m.");
        return m === 0 ? result.slice(2,result.length) : result;
    }
    const event = {
        signup : function() {
            const {sname, domain, password, ceo, tel, email} = data.current;
            if(sname.length < 2 || sname.length > 20) {
                this.setCaution("2~20자의 쇼핑몰 명을 입력해주세요 ")
                return;
            }
            try {
                let url;
                if(!domain.includes("http")) url = new URL(`http://${domain}`);
                else url = new URL(domain);
                if(url.hostname === "null") {
                    this.setCaution("쇼핑몰 주소의 형식을 확인해주세요.");
                    return;
                }
                // 앞서 테스트 한 값과 동일한 주소를 입력했는지 확인
                if(sliceWWW(url.hostname) !== testing.current.domain) {
                    this.setCaution("앞서 입력한 쇼핑몰과 다른 쇼핑몰입니다.");
                    return;
                }
                data.current.domain = url.hostname;
            } catch {
                this.setCaution("쇼핑몰 주소의 형식을 확인해주세요.");
                return;
            }
            const isPwd = ((value) => {
                return (/^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{8,20}$/).test(value);
            })(password);
            if(!isPwd) {
                this.setCaution("비밀번호의 형식을 확인해주세요.");
                return;
            }
            if(password !== repassword.current) {
                this.setCaution("비밀번호가 서로 일치하지 않습니다.");
                return;
            }
            if(ceo.length < 2 || ceo.length > 20) {
                this.setCaution("대표자명을 확인해주세요.");
                return;
            }
            if(tel.length < 8) {
                this.setCaution("전화번호를 확인해주세요.");
                return;
            }

            const isEmail = ((value) => {
                return (/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i).test(value);
            })(email);
            if(!isEmail) {
                this.setCaution("이메일 형식을 확인해주세요.");
                return;
            }
            send(data.current);

        },
        setCaution : function(msg) {
            caution.current.innerHTML = msg;
        }
    }


    return (
        <>
            <div className="title">
                <h1 className="en">Create Account</h1>
                <p className="ko">고객님의 소중한 정보를 입력해주세요.</p>
            </div>
            <div id="inputFrame" className="en">
                <div>
                    <h3>쇼핑몰 명</h3>
                    <div>
                        <input type="text" maxLength="20" onChange={(e) => {data.current.sname = e.target.value}}/>
                    </div>
                </div>
                <div>
                    <h3>쇼핑몰 주소</h3>
                    <div>
                        <input type="text" maxLength="40" onChange={(e) => {data.current.domain = e.target.value}}/>
                    </div>
                </div>
                <div>
                    <h3>비밀번호</h3>
                    <p>대, 소문자 영문 및 문자를 포함한 8~20자</p>
                    <div>
                        <input type="password" maxLength="30" onChange={(e) => {data.current.password = e.target.value}}/>
                    </div>
                    <div>
                        <input type="password" maxLength="30" onChange={(e) => {repassword.current = e.target.value}}/>
                    </div>
                </div>
                <div>
                    <h3>대표자 명</h3>
                    <div>
                        <input type="text" maxLength="20" onChange={(e) => {data.current.ceo = e.target.value}}/>
                    </div>
                </div>
                <div>
                    <h3>연락처</h3>
                    <p>'-'를 제외한 연락가능한 번호만 입력</p>
                    <div>
                        <input type="text" maxLength="15" onChange={(e) => {data.current.tel = e.target.value}}/>
                    </div>
                </div>
                <div>
                    <h3>이메일</h3>
                    <div>
                        <input type="email" maxLength="40" onChange={(e) => {data.current.email = e.target.value}}/>
                    </div>
                </div>
                <button className="ko" onClick={() => event.signup()}>완료</button>
                <p className="ko" ref={caution}></p>
            </div>
        </>
    )
}
export default CreateAccountInsert;