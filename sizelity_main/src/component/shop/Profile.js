import { useContext, useEffect, useState } from 'react';
import axios from 'axios';

// CSS
import '../../contents/css/main/Profile.css';

//Context
import { ServerContext, UserContext } from '../../App';
import { AlertToggle } from '../../router/ShopRouter';

const Profile = ({history}) => {
    // State
    const [data, setData] = useState(null);

    // Context
    const {user} = useContext(UserContext);
    const server = useContext(ServerContext);
    const alert = useContext(AlertToggle);

    function moveFatch(type) {
        if(data === null) return;
        let sendData = undefined;
        switch(type) {
            case "account" : {
                sendData = {id: user._id, ceo: data.info.ceo};
                break;
            }
            case "contact" : {
                sendData = {info : data.info};
                break;
            }
            case "credit" : {
                // 결제 정보 데이터 만들고 나서 추가
                console.log("Credit")
                break;
            }
            default : { return }
        }
        if(sendData !== undefined) {
            history.push({
                pathname: "/main/account/fatch",
                state : { type, data : sendData }
            });
        }
    }
    async function send() {
        const response = await axios({
            method: 'GET',
            url : `${server}/user/${user._id}`,
            withCredentials: true,
            timeout: 3500
        }).catch(err => {
            switch(err?.response?.status) {
                case 400 : {
                    alert(true, "<p>잘못된 접근입니다.</p>", "error");
                    break;
                }
                case 401 : {
                    alert(true, "<p>로그인이 필요한 작업입니다.</p>", "error");
                    break;
                }
                case 404 : 
                case 500 :
                default : {
                    alert(true, "<p>서버에 문제가 발생했습니다.</p><p>잠시후 다시 시도해주세요.</p>", "error");
                }
            }
            
        });
        if(response?.status == 200) {
            setTimeout(() => setData(response.data), 400);
            
        }
    }
    useEffect(() => { send(); }, []);
    if(data === null) {
        return (
            <article className="wrapper">
                <div className="loader-frame">
                    <div className="loader"></div>
                </div>
            </article>
        )
    } else return (
        <article className="wrapper ko">
            <header>
                <div className="title">
                    <h1 >내 계정</h1>
                </div>
            </header>
            <article id="profile">
                <div className="list-frame">
                    <div className="title">
                        <i className="material-icons">arrow_drop_down</i>
                        <h2>계정 정보</h2>
                        <p onClick={() => moveFatch("account")}>편집</p>
                    </div>
                    <ul>
                        <li>
                            <h4>계정 ID:</h4>
                            <p>{user._id}</p>
                        </li>
                        <li>
                            <h4>대표자 명:</h4>
                            <p>{data.info.ceo}</p>
                        </li>
                        <li>
                            <h4>비밀번호:</h4>
                            <p>●●●●●●●●●</p>
                        </li>
                    </ul>
                </div>
                <div className="list-frame">
                    <div className="title">
                        <i className="material-icons">arrow_drop_down</i>
                        <h2>연락처 정보</h2>
                        <p onClick={() => moveFatch("contact")}>편집</p>
                    </div>
                    <ul>
                        <li>
                            <h4>전화번호:</h4>
                            <p>{data.info.tel}</p>
                        </li>
                        <li>
                            <h4>이메일:</h4>
                            <p>{data.info.email}</p>
                        </li>
                        <li>
                            <h4>주소:</h4>
                            <p>{data.info?.address}</p>
                        </li>
                    </ul>
                </div>
                <div className="list-frame">
                    <div className="title">
                        <i className="material-icons">arrow_drop_down</i>
                        <h2>로그인 링크</h2>
                    </div>
                    <ul>
                        <li>
                            <h4>링크:</h4>
                            <p>https://shop.sizelity.com/account/{user._id}</p>
                        </li>
                    </ul>
                </div>
                <div className="list-frame">
                    <div className="title">
                        <i className="material-icons">arrow_drop_down</i>
                        <h2>연결된 쇼핑몰</h2>
                    </div>
                    <ul>
                        <li>
                            <h4>쇼핑몰 명:</h4>
                            <p>{user.sname}</p>
                        </li>
                        <li>
                            <h4>쇼핑몰 URL:</h4>
                            <p>{data.domain}</p>
                        </li>
                    </ul>
                </div>
                <div className="list-frame">
                    <div className="title">
                        <i className="material-icons">arrow_drop_down</i>
                        <h2>결제 정보</h2>
                        <p onClick={() => moveFatch("credit")}>편집</p>
                    </div>
                    <ul>
                        <li>
                            <h4>신용카드 :</h4>
                            <p></p>
                        </li>
                        <li>
                            <h4>카드번호 :</h4>
                            <p></p>
                        </li>
                        <li>
                            <h4>만료날짜 :</h4>
                            <p></p>
                        </li>
                    </ul>
                </div>
            </article>
        </article>
    )
}

export default Profile;