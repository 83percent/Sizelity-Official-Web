import { useRef } from "react";

const CreateAccountComplete = ({id}) => {

    // Ref
    const loginURL = useRef(null);

    /* const event = {
        copy: function() {
            console.log(loginURL.current);
        }
    }; 복사 버튼 만들려고했는데 잘안됨 */
    return (
        <>
            <div id="completeFrame" className="ko">
                <h1>환영합니다!</h1>
                <p>회원님 만을 위한 <b>로그인 링크</b>를 알려드릴게요.</p>
                <div>
                    <p ref={loginURL}>https://shop.sizelity.com/account/{id.current}</p>
                </div>
                <p>Sizelity for shop 서비스를 이용하기 위해서는 위 링크를 통해서 접속 가능합니다.</p>
                <p>잃어버리지 않기 위해 꼭 다른 곳에 <b>저장</b>해두세요.</p>
                <ul>
                    <li>영업일 0~5일 이내에 입력된 정보에 대한 확인요청 연락이 전달될 수 있습니다.</li>    
                    <li>'로그인 링크'를 분실하실 경우 정보입력란에 기입된 정보를 통해 찾을 수 있습니다.</li>
                    <li>부정적인 방법을 통한 악용사례가 발견될 경우 계정 정지처리 및 법적 조치를 받을 수 있습니다.</li>

                </ul>             
            </div>
        </>
    )
}
export default CreateAccountComplete;
