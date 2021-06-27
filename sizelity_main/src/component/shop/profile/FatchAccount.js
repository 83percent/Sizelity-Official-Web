// CSS
import '../../../contents/css/shop/AccountFatch.css';

const FatchAccount = ({data}) => {
    return (
        <>
            <div>
                <div className="title">
                    <h2>대표자 명 변경</h2>
                </div>
                <input type="text" placeholder={data?.ceo} />
            </div>
            <div>
                <div className="title">
                    <h2>비밀번호 변경</h2>
                    <div className="sub">
                        <p>변경하려는 비밀번호를 입력해주세요</p>
                        <p>영문 대, 소문자 및 숫자, 특수문자를 포함한 8~20자 입력</p>
                    </div>
                </div>
                <input type="password" placeholder="변경 비밀번호" />
                <input type="password" placeholder="변경 비밀번호 확인" />
            </div>
        </>
    )
}

export default FatchAccount;