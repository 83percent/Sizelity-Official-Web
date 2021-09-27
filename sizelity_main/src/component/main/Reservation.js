import axios from 'axios';
import { Link } from 'react-router-dom';

// Image
import MainImage from '../../contents/image/compare.png';

// CSS
import '../../contents/css/main/Reservation.css';

// Context
import {ServerContext} from '../../App';
import { useContext, useRef } from 'react';

const Reservation = ({history}) => {

    // Ref
    const errorFrame = useRef(null);
    const serviceBtn = useRef(null);
    const personalBtn = useRef(null);
    const data = useRef({
        domain : undefined,
        name : '',
        tel : '',
        email : '',
        privacy : {
            service : false,
            personal : false,
        }
    });

    // Context
    const server = useContext(ServerContext);

    const event = {
        checkToogle : function(target) {
            target.parentElement.classList.toggle('check', target.checked)
        }, // checkToogle
        send : async function() {
            console.log(data.current)
            if(!this.checkData()) {return;}
            await axios({
                method : 'POST',
                url : `${server}/reservation`,
                data : data.current,
                timeout : 3500
            }).then((response) => {
                switch(response.status) {
                    case 200 : {
                        history.push('/reservation/success');
                        break;
                    }
                    case 202 : {
                        this.toggleError("already");
                        break;
                    }
                    default : {
                        this.toggleError();
                    }
                }
                
            }).catch(() => {
                this.toggleError();
            });
        }, // send
        checkData : function() {
            const _n = data.current;
            const isDomain = ((value) => {
                return (/([a-z0-9\w]+\.*)+[a-z0-9]{2,4}/gi).test(value);
            })(_n.domain);
            if(!isDomain) {
                this.toggleError('domain');
                return false;
            }
            if(_n.name.length <= 0 || _n.name.length > 20) {
                this.toggleError('name');
                return false;
            }
            if(_n.tel.length < 8 || _n.tel.length > 12) {
                this.toggleError('tel');
                return false;
            }
            
            const isEmail = ((value) => {
                return (/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i).test(value);
            })(_n.email);
            if(!isEmail) {
                this.toggleError('email');
                return false;
            }
            if(!_n.privacy.service || !_n.privacy.personal) {
                this.toggleError('privacy');
                return false;
            }
            return true;
        }, // checkData
        toggleError : function (value) {
            let _text = '';
            switch(value) {
                case 'domain' : {
                    _text = '쇼핑몰 주소의 형식을 확인해주세요.';
                    break;
                }
                case 'name' : {
                    _text = '대표자명을 확인해주세요.';
                    break;
                }
                case 'tel' : {
                    _text = '연락처를 확인해주세요.';
                    break;
                }
                case 'email' : {
                    _text = '이메일 형식을 확인해주세요.';
                    break;
                }
                case 'privacy' : {
                    _text = '필수 약관에 모두 동의해주세요.';
                    break;
                }
                case 'already' : {
                    _text = '이미 사전등록된 쇼핑몰입니다.'
                    break;
                }
                default : {
                    _text = '문제가 발생했습니다.';
                    break;
                }
            }
            errorFrame.current.innerText = _text;
            if(!errorFrame.current.classList.contains('active')) errorFrame.current.classList.add('active');
        }, // toggleError()
        allToggle : function(value) {
            if(value) {
                serviceBtn.current.checked = true;
                this.checkToogle(serviceBtn.current);
                personalBtn.current.checked = true;
                this.checkToogle(personalBtn.current);
                data.current.privacy.service = true;
                data.current.privacy.personal = true;
            } else {
                serviceBtn.current.checked = false;
                this.checkToogle(serviceBtn.current);
                personalBtn.current.checked = false;
                this.checkToogle(personalBtn.current);
                
                data.current.privacy.service = false;
                data.current.privacy.personal = false;
            }
        }
    }   
    return (
        <main className="reservation">
            <section className="top">
                <div className="left">
                    <div className="main-title">
                        <h1>사이즈리티</h1>
                        <h1>사전등록 진행중.</h1>
                    </div>
                    <ul className="info-input">
                        <li>
                            <label>
                                <p>쇼핑몰 주소</p>
                                <input type="url" placeholder="http://www.example_shop.com" onChange={(e) => {
                                    data.current.domain = e.target.value;
                                }}/>
                            </label>
                        </li>
                        <li>
                            <label>
                                <p>대표자명</p>
                                <input type="text" placeholder="장윤희" onChange={(e) => {
                                    data.current.name = e.target.value;
                                }}/>
                            </label>
                        </li>
                        <li>
                            <label>
                                <p>연락가능한 연락처</p>
                                <input type="number" placeholder="010XXXXXXXX" onChange={(e) => {
                                    data.current.tel = e.target.value;
                                }}/>    
                            </label>
                        </li>
                        <li>
                            <label>
                                <p>확인가능한 이메일</p>
                                <input type="email" placeholder="email@example.com" onChange={(e) => {
                                    data.current.email = e.target.value;
                                }}/>
                            </label>
                        </li>
                    </ul>
                    <ul className="checklist">
                        <li style={{fontSize:"1.2rem",marginBottom:"1rem", paddingBottom: "1rem", paddingRight: "4rem",borderBottom: "2px solid #ccc"}}>
                            <label>
                                <i className="material-icons">check</i>
                                <p>전체 동의</p>
                                <input type="checkbox" onChange={(e) => {
                                    event.checkToogle(e.target);
                                    event.allToggle(e.target.checked);
                                    data.current.privacy.service = e.target.checked;    
                                }}/>
                            </label>
                        </li>
                        <li>
                            <label>
                                <i className="material-icons">check</i>
                                <p>사이즈리티 이용약관 동의 (필수)</p>
                                <Link to="/terms/service">내용보기</Link>
                                <input type="checkbox" onChange={(e) => {
                                    event.checkToogle(e.target);
                                    data.current.privacy.service = e.target.checked;    
                                }} ref={serviceBtn}/>
                            </label>
                        </li>
                        <li>
                            <label>
                                <i className="material-icons">check</i>
                                <p>개인정보 수집 및 이용 동의 (필수)</p>
                                <Link to="/terms/privacy">내용보기</Link>
                                <input type="checkbox" onChange={(e) => {
                                    event.checkToogle(e.target);
                                    data.current.privacy.personal = e.target.checked;
                                }} ref={personalBtn}/>
                            </label>
                        </li>
                    </ul>
                    <button onClick={() => event.send()}>사전등록</button>
                    <h4 ref={errorFrame}>Error</h4>
                    <Link to="/intro" >
                        <p>사이즈리티 더 알아보기</p>
                        <i className="material-icons">chevron_right</i>
                    </Link>
                </div>
                <div className="right">
                    <img src={MainImage} alt="main"/>
                </div>  
            </section>
        </main>
    )
}

export default Reservation;