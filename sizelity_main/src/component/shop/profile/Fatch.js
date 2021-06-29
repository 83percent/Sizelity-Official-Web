import FatchAccount from './FatchAccount';
import FatchContact from './FatchContact';
import FatchCredit from './FatchCredit';

const Fatch = ({history, location}) => {
    console.log("Fatch ",location.state)
    //const data = location.state?.data;
    const type = location.state?.type;
    const title = ((type) => {
        switch(type) {
            case 'account' : {
                return "계정 정보 변경"
            }
            case 'contact' : {
                return "연락처 정보 변경"
            }
            case 'credit' : {
                return "결제 정보 변경"
            }
            default : {}
        }
    })(type);


    const event = {
        cancel : function() {
            if(window.confirm("정보 변경을 취소합니다.")) {
                history.goBack();
            }

        }, // cancel
    }

    return (
        <article id="accountFatch" className="wrapper fatch-wrapper ko">
            <header>
                <div className="title">
                    <h1>{title}</h1>
                    <div className="sub">
                        <p>변경하려는 정보만 입력해주세요</p>
                    </div>
                </div>
            </header>
            <article>
                <div>
                    <div className="title">
                        <h2>현재 비밀번호</h2>
                        <div className="sub">
                            <p>사용자 확인을 위해서 현재 비밀번호를 입력해주세요</p>
                        </div>
                    </div>
                    <input type="password" placeholder="현재 비밀번호"/>
                </div>
                {
                    type === 'account' ? (
                        <FatchAccount data={location.state?.data} />
                    ) : type === 'contact' ? (
                        <FatchContact data={location.state?.data?.info} />
                    ) : type === 'credit' ? (
                        <FatchCredit />
                    ) : (<div></div>)
                }
            </article>
            <div className="button-wrapper">
                <button className="send">변경</button>
                <button className="cancel" onClick={() => event.cancel()}>취소</button>
            </div>
        </article>
    )
}

export default Fatch;